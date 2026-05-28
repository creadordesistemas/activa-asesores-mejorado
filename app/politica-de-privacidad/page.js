import LegalLayout from '@/components/ui/LegalLayout';

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Activa Asesores. Cómo recogemos, usamos y protegemos tus datos personales conforme al RGPD.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="mayo de 2025">
      <p>
        En Activa Asesores nos tomamos muy en serio la privacidad y la protección de los datos de nuestros clientes y usuarios. Esta política describe con transparencia cómo recopilamos, tratamos y protegemos la información personal que nos facilitas, de estricto acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        La entidad responsable de la recogida y posterior tratamiento de los datos personales obtenidos a través de esta web es:
      </p>

      {/* Tarjeta del responsable con branding */}
      <div className="my-6 p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 not-prose">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100/50 flex items-center justify-center text-[#1A5FAD] shrink-0 mt-0.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-neutral-800">Activa Asesores, S.L.</div>
              <div className="text-[12px] text-neutral-400 mt-0.5">CIF: B75810804 · Domicilio en Sevilla</div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end">
            <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Contacto de privacidad (DPO)</span>
            <a href="mailto:privacidad@activaasesores.com" className="text-[14px] font-bold text-[#1A5FAD] hover:text-[#f4a261] transition-colors mt-0.5">
              privacidad@activaasesores.com
            </a>
          </div>
        </div>
      </div>

      <h2>2. Datos que recopilamos</h2>
      <p>Para la prestación de nuestros servicios independientes de asesoramiento energético, podemos recopilar y tratar:</p>
      <ul>
        <li><strong>Datos de contacto básicos:</strong> Nombre completo, dirección de correo electrónico y teléfono.</li>
        <li><strong>Datos del suministro de energía:</strong> Código CUPS, dirección física del punto de suministro de luz o gas, potencia contratada y la copia de tu factura de energía en caso de que decidas enviárnosla voluntariamente para realizar un análisis de ahorro.</li>
        <li><strong>Datos de navegación web:</strong> Dirección IP, tipo de navegador, páginas visitadas y comportamiento (obtenidos mediante cookies analíticas consentidas).</li>
      </ul>

      <h2>3. Finalidad y base legal del tratamiento</h2>
      <p>Tratamos tus datos personales basándonos en las siguientes justificaciones legales:</p>
      <ul>
        <li><strong>Ejecución contractual:</strong> Para realizar las gestiones solicitadas (cambio de titularidad de la luz, altas de suministros, o mejora de condiciones de contratos energéticos).</li>
        <li><strong>Interés legítimo:</strong> Para atender tus consultas de soporte técnico, resolver incidencias telefónicas y mejorar la usabilidad del sitio web.</li>
        <li><strong>Consentimiento expreso:</strong> Para enviarte de forma periódica comunicaciones de ahorro energético y ofertas especiales, únicamente si marcas la casilla correspondiente de autorización.</li>
        <li><strong>Obligaciones de carácter legal:</strong> Cumplimiento de requerimientos de la administración pública o normativas del sector eléctrico.</li>
      </ul>

      <h2>4. Conservación de tus datos</h2>
      <p>
        Mantendremos tus datos personales únicamente durante el tiempo estrictamente necesario para cumplir con la prestación del servicio que nos solicitaste y, una vez finalizado, se conservarán bloqueados durante los plazos legalmente vigentes de prescripción de responsabilidades fiscales y civiles (con carácter general, hasta un máximo de 5 años).
      </p>

      <h2>5. Destinatarios de la información</h2>
      <p>
        No cedemos tus datos a ningún tercero con fines comerciales. Tus datos únicamente serán compartidos con las empresas distribuidoras y comercializadoras de electricidad o gas asociadas al trámite que nos solicites realizar (por ejemplo, al tramitar un alta con Iberdrola, Endesa, Naturgy, etc.).
      </p>

      <h2>6. Tus derechos de privacidad</h2>
      <p>
        Tienes plenos derechos sobre tus datos de carácter personal y puedes ejercerlos enviando un correo electrónico detallado a <a href="mailto:privacidad@activaasesores.com">privacidad@activaasesores.com</a> adjuntando una prueba de identidad (DNI o similar):
      </p>

      {/* Grid de derechos interactivo con branding */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 not-prose">
        {[
          {
            title: 'Acceso',
            desc: 'Conocer si en Activa Asesores estamos tratando tus datos y acceder a la información específica sobre dicho tratamiento.',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )
          },
          {
            title: 'Rectificación',
            desc: 'Solicitar la corrección o actualización de aquellos datos personales tuyos que consideres inexactos o que estén obsoletos.',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z" />
              </svg>
            )
          },
          {
            title: 'Supresión',
            desc: 'Solicitar la eliminación definitiva de tu información de nuestros archivos cuando ya no sea necesaria para prestar el servicio.',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            )
          },
          {
            title: 'Oposición y Limitación',
            desc: 'Oponerte a tratamientos específicos de tus datos de contacto (como fines comerciales) o pausar temporalmente su tratamiento.',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            )
          },
          {
            title: 'Portabilidad',
            desc: 'Recibir tus datos personales archivados en un formato digital estructurado, común y de lectura directa para transferirlos a otra entidad.',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 1 21 5 17 9" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
            )
          },
          {
            title: 'Revocar Consentimiento',
            desc: 'Retirar tu consentimiento previo en cualquier momento para fines de marketing o análisis web sin carácter retroactivo.',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            )
          }
        ].map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl border border-neutral-100 bg-white shadow-sm flex flex-col justify-between hover:border-brand-200 transition-all duration-300 hover:shadow-md">
            <div>
              <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-[#1A5FAD] mb-4">
                {item.icon}
              </div>
              <h4 className="text-[13.5px] font-bold text-neutral-800 leading-tight mb-2">{item.title}</h4>
              <p className="text-[12px] text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4">
        Si consideras que tus derechos de protección de datos han sido vulnerados, tienes derecho a interponer una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>7. Medidas de seguridad</h2>
      <p>
        Implementamos rigurosas medidas técnicas y organizativas para proteger tus datos personales contra accesos no autorizados, pérdidas, alteraciones accidentales o destrucciones ilícitas de acuerdo con el artículo 32 del RGPD (encriptación SSL, cortafuegos de seguridad y accesos restringidos para el personal autorizado).
      </p>

      <h2>8. Actualizaciones</h2>
      <p>
        Podemos actualizar ocasionalmente esta política de privacidad para adecuarla a modificaciones legislativas o jurisprudenciales. La fecha de última actualización siempre estará indicada al principio de este documento.
      </p>
    </LegalLayout>
  );
}
