import { NextResponse } from 'next/server';

// Almacenamiento temporal en memoria para el Rate Limiting (Máximo 5 solicitudes por IP cada 10 minutos)
const rateLimitMap = new Map();
const LIMIT_WINDOW = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip) {
  const now = Date.now();
  
  // Limpieza periódica para evitar fugas de memoria
  if (rateLimitMap.size > 1000) {
    rateLimitMap.clear();
  }

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [now]);
    return false;
  }

  const timestamps = rateLimitMap.get(ip).filter(t => now - t < LIMIT_WINDOW);
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  return timestamps.length > MAX_REQUESTS;
}

// Sanitización de inputs para prevenir inyección HTML
function sanitizeString(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export async function POST(req) {
  try {
    // 1. Obtener IP y aplicar Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Has excedido el límite de solicitudes de contacto. Por favor, inténtalo más tarde.' },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    
    // 2. Comprobar campo Honeypot
    const website = formData.get('website');
    if (website) {
      console.warn(`[Spam Blocked] Petición bloqueada por Honeypot desde la IP: ${ip}`);
      // Respondemos con éxito simulado para despistar al robot atacante
      return NextResponse.json({
        success: true,
        message: 'Lead simulado con éxito (Honeypot).',
      });
    }

    // 3. Extraer y sanitizar campos de texto
    const nombre = sanitizeString(formData.get('nombre'));
    const email = sanitizeString(formData.get('email'));
    const telefono = sanitizeString(formData.get('telefono'));
    const servicio = sanitizeString(formData.get('servicio'));
    const mensaje = sanitizeString(formData.get('mensaje'));
    const facturaFile = formData.get('factura');

    // Validación básica de campos obligatorios
    if (!nombre || !email || !servicio) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos obligatorios en el formulario.' },
        { status: 400 }
      );
    }

    // 4. Preparar y validar adjuntos si existen
    const attachments = [];
    if (facturaFile && facturaFile instanceof File && facturaFile.size > 0) {
      // Validar tamaño máximo: 50 MB (50 * 1024 * 1024 bytes)
      if (facturaFile.size > 50 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, error: 'El archivo adjunto supera el tamaño máximo permitido de 50 MB.' },
          { status: 400 }
        );
      }

      // Validar tipos de archivo permitidos (PDF o imágenes estándar)
      const allowedMimes = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
      if (!allowedMimes.includes(facturaFile.type)) {
        return NextResponse.json(
          { success: false, error: 'Formato de archivo no permitido. Solo se aceptan PDFs e imágenes (JPG, PNG, WEBP).' },
          { status: 400 }
        );
      }

      const arrayBuffer = await facturaFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64Content = buffer.toString('base64');
      attachments.push({
        content: base64Content,
        name: facturaFile.name,
      });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    // Si no está configurada la API key, simulamos éxito para que el frontend
    // funcione correctamente y mostramos advertencia en consola
    if (!brevoApiKey) {
      console.warn(
        'Advertencia: BREVO_API_KEY no está configurada en las variables de entorno (.env). El lead se ha simulado con éxito.'
      );
      return NextResponse.json({
        success: true,
        message: 'Lead simulado con éxito (API Key no configurada).',
      });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: 'Web Activa Asesores',
          email: 'info@activaasesores.com',
        },
        to: [
          {
            email: 'info@activaasesores.com',
            name: 'Activa Asesores',
          },
        ],
        replyTo: {
          email: email,
          name: nombre,
        },
        subject: `Nuevo Lead Web: ${nombre} (${servicio})`,
        htmlContent: `
          <html>
            <head>
              <style>
                body { font-family: sans-serif; color: #333; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
                h2 { color: #1A5FAD; border-bottom: 2px solid #f4a261; padding-bottom: 8px; }
                .field { margin-bottom: 12px; }
                .label { font-weight: bold; color: #555; }
                .value { margin-top: 4px; }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>Nuevo Lead recibido desde el Formulario Web</h2>
                <div class="field"><span class="label">Nombre completo:</span><div class="value">${nombre}</div></div>
                <div class="field"><span class="label">Email de contacto:</span><div class="value">${email}</div></div>
                <div class="field"><span class="label">Teléfono:</span><div class="value">${telefono || 'No proporcionado'}</div></div>
                <div class="field"><span class="label">Servicio solicitado:</span><div class="value">${servicio}</div></div>
                <div class="field"><span class="label">Mensaje o consulta:</span><div class="value">${mensaje || 'Sin mensaje adicional'}</div></div>
                <div class="field"><span class="label">Factura adjunta:</span><div class="value">${attachments.length > 0 ? 'Sí (adjuntada en este correo)' : 'No'}</div></div>
              </div>
            </body>
          </html>
        `,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error en API de Brevo: ${response.status} - ${errorText}`);
    }

    return NextResponse.json({ success: true, message: 'Lead enviado a Brevo con éxito.' });
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return NextResponse.json(
      { success: false, error: 'Hubo un error al procesar tu solicitud.' },
      { status: 500 }
    );
  }
}
