import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Rate Limiting para el chat (Máximo 15 solicitudes por IP cada 10 minutos)
const chatRateLimitMap = new Map();
const LIMIT_WINDOW = 10 * 60 * 1000;
const MAX_REQUESTS = 15;

function isChatRateLimited(ip) {
  const now = Date.now();
  
  if (chatRateLimitMap.size > 1000) {
    chatRateLimitMap.clear();
  }

  if (!chatRateLimitMap.has(ip)) {
    chatRateLimitMap.set(ip, [now]);
    return false;
  }

  const timestamps = chatRateLimitMap.get(ip).filter(t => now - t < LIMIT_WINDOW);
  timestamps.push(now);
  chatRateLimitMap.set(ip, timestamps);

  return timestamps.length > MAX_REQUESTS;
}

// Instrucciones del sistema para el comportamiento del agente de IA
const SYSTEM_INSTRUCTION = `
Eres "Activa Bot", el asesor energético inteligente de Activa Asesores.
Tu objetivo es resolver de forma amable, profesional, concisa y experta cualquier duda del usuario sobre sus facturas de luz o gas, gestiones de suministro en España y cómo ahorrar dinero en energía.

Información clave de Activa Asesores:
- Gestoría energética especializada en luz y gas, con sede en Sevilla, España. Operamos en todo el territorio nacional.
- Todos nuestros servicios son completamente gratuitos para el cliente (cobramos comisión directa a las comercializadoras).
- Servicios principales:
  1. Alta de Suministro: En viviendas nuevas o tras un periodo de baja. Coordinación en 24-72h.
  2. Cambio de Titular: Rápido y sin corte de suministro en ningún momento.
  3. Acometida Eléctrica / Alta Nuevo Punto: Gestión del expediente técnico de obra con la distribuidora.
  4. Mejora de Condiciones: Auditoría energética comparando tarifas del mercado libre para encontrar el máximo ahorro.
  5. Optimización de Potencia: Ajuste de kW contratados para eliminar cargos fijos sobreestimados.
- Compañías con las que trabajamos: Endesa, Naturgy, Iberdrola, Repsol y TotalEnergies.
- Contacto directo:
  * Teléfono gratuito: +34 854 615 199
  * WhatsApp: https://wa.me/34656414908 (Recomendado para mandar facturas)
  * Email: info@activaasesores.com
  * Dirección: Av. San Francisco Javier, 9 STN 7, 41018 Sevilla

Pautas de comportamiento:
- Responde siempre en español.
- Sé claro, cortés y ve al grano. Evita explicaciones excesivamente largas a menos que se te solicite detalle técnico.
- Mantén siempre una actitud servicial e independiente. Tu prioridad es el ahorro real del cliente.
- Si un usuario tiene dudas complejas o desea que le revisen su factura, invítale amablemente a enviarla a nuestro WhatsApp (https://wa.me/34656414908) o a rellenar el formulario de estudio gratuito en la web.
`;

export async function POST(req) {
  try {
    // 1. Rate Limiting por IP
    const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
    if (isChatRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas consultas al chat. Por favor, espera unos minutos e inténtalo de nuevo.' },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    // 2. Validación de inputs
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Formato de historial de chat inválido.' },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    // 3. Simulación elegante si no está configurada la API Key (facilita desarrollo local sin errores de red)
    if (!geminiApiKey) {
      console.warn('Advertencia: GEMINI_API_KEY no está configurada. Simulando respuesta del chatbot de energía.');
      return NextResponse.json({
        role: 'model',
        text: '¡Hola! Soy tu asesor energético de Activa Asesores. En este momento el sistema inteligente se encuentra en modo de demostración. Puedes hacerme cualquier consulta y muy pronto estaré conectado al 100%. Para asesoría inmediata, puedes escribirnos por WhatsApp aquí: https://wa.me/34656414908'
      });
    }

    // 4. Conexión real con Gemini
    // Inicializar Google Generative AI con la clave
    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    // Preparar el formato del historial para Gemini
    // Gemini espera la estructura: { role: 'user'|'model', parts: [{ text: '...' }] }
    const geminiContents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content || msg.text || '' }]
    }));

    // Obtener la respuesta del modelo Gemini 2.5 Flash (ideal por velocidad y coste)
    const result = await model.generateContent({
      contents: geminiContents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800,
      },
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const replyText = result.response.text() || 'Lo siento, no he podido procesar tu respuesta en este momento.';

    return NextResponse.json({
      role: 'model',
      text: replyText
    });

  } catch (error) {
    console.error('Error en el endpoint de chat agéntico:', error);
    return NextResponse.json(
      { error: 'Lo siento, ha ocurrido un error al procesar tu consulta energética.' },
      { status: 500 }
    );
  }
}
