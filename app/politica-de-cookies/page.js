import LegalLayout from '@/components/ui/LegalLayout';

export const metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Activa Asesores. Qué cookies usamos, para qué y cómo puedes gestionarlas.',
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="mayo de 2025">
      <p>
        Esta política explica detalladamente qué son las cookies, qué tipos de cookies utilizamos en <strong>activaasesores.com</strong> y de qué manera puedes configurar o deshabilitar sus preferencias en tu dispositivo, en estricto cumplimiento con la Ley 34/2002 (LSSICE) y el RGPD.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu ordenador, teléfono móvil o tablet cuando los visitas. Se utilizan con el fin de recordar tus preferencias de navegación, mejorar el rendimiento técnico del sitio, y analizar el comportamiento de las visitas de forma agregada.
      </p>

      <h2>2. Cookies que utilizamos</h2>
      <p>
        Clasificamos las cookies de este sitio web según su finalidad en las siguientes categorías:
      </p>

      {/* Grid de tipos de cookies con branding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50">
          <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-[#1A5FAD] mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3 className="text-[13.5px] font-bold text-neutral-800 leading-tight mb-2">Cookies Técnicas (Necesarias)</h3>
          <p className="text-[12px] text-neutral-500 leading-relaxed">
            Son indispensables para el funcionamiento correcto de la web. Permiten la navegación, carga de recursos y seguridad. No pueden desactivarse y no requieren consentimiento previo.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50">
          <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-[#1A5FAD] mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <h3 className="text-[13.5px] font-bold text-neutral-800 leading-tight mb-2">Cookies Analíticas (Opcionales)</h3>
          <p className="text-[12px] text-neutral-500 leading-relaxed">
            Nos ayudan a entender de forma anónima cómo interactúan los usuarios con nuestra web, medir visitas, páginas más frecuentadas y el rendimiento global del sitio para mejorarlo.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50">
          <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-[#1A5FAD] mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
            </svg>
          </div>
          <h3 className="text-[13.5px] font-bold text-neutral-800 leading-tight mb-2">Cookies de Preferencias (Opcionales)</h3>
          <p className="text-[12px] text-neutral-500 leading-relaxed">
            Almacenan la información de tus elecciones en el sitio web (como si has aceptado o rechazado el uso de cookies) para que no tengas que responder de nuevo en futuras visitas.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50">
          <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-[#1A5FAD] mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="text-[13.5px] font-bold text-neutral-800 leading-tight mb-2">Cookies de Publicidad y Marketing</h3>
          <p className="text-[12px] text-neutral-500 leading-relaxed">
            Actualmente <strong>no utilizamos</strong> cookies de rastreo publicitario, remarketing o creación de perfiles comerciales en activaasesores.com.
          </p>
        </div>
      </div>

      <h2>3. Tabla de cookies detallada</h2>
      <p>
        En la siguiente tabla identificamos cada una de las cookies que se pueden instalar en tu equipo durante el acceso y navegación en nuestra web:
      </p>

      {/* Tabla de cookies premium con diseño responsivo */}
      <div className="overflow-x-auto rounded-2xl border border-neutral-100 my-6 not-prose">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-100">
              <th className="px-5 py-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider">Identificador</th>
              <th className="px-5 py-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider">Clasificación</th>
              <th className="px-5 py-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider">Duración</th>
              <th className="px-5 py-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider">Finalidad técnica</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 bg-white">
            {[
              ['_session', 'Necesaria', 'Sesión del navegador', 'Garantizar el correcto funcionamiento de las peticiones técnicas de tu sesión.'],
              ['activa-cookie-consent', 'Preferencia', '12 meses', 'Recordar si has configurado o aceptado las cookies de la web.'],
              ['_ga', 'Analítica', '2 años', 'Google Analytics - Generar identificadores aleatorios para contabilizar visitas únicas.'],
              ['_gid', 'Analítica', '24 horas', 'Google Analytics - Agrupar las páginas consultadas por un mismo usuario en el día.'],
            ].map(([name, type, duration, purpose]) => (
              <tr key={name} className="hover:bg-neutral-50/50 transition-colors">
                <td className="px-5 py-4 font-mono text-[12px] font-bold text-[#1A5FAD]">{name}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-[10.5px] font-bold ${
                    type === 'Necesaria' 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : type === 'Preferencia'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}>
                    {type}
                  </span>
                </td>
                <td className="px-5 py-4 text-[13px] text-neutral-500">{duration}</td>
                <td className="px-5 py-4 text-[13px] text-neutral-500 leading-normal">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>4. Cómo gestionar las cookies en tu dispositivo</h2>
      <p>
        Puedes restringir, bloquear o eliminar las cookies de este o cualquier otro sitio web configurando la seguridad de tu navegador de Internet. A continuación te enlazamos los soportes oficiales de los principales navegadores del mercado:
      </p>

      {/* Grid de navegadores con branding */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
        {[
          { name: 'Google Chrome', icon: '🌐', url: 'https://support.google.com/chrome/answer/95647?hl=es' },
          { name: 'Mozilla Firefox', icon: '🦊', url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias' },
          { name: 'Apple Safari', icon: '🧭', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
          { name: 'Microsoft Edge', icon: '💻', url: 'https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d' },
        ].map((browser) => (
          <a
            key={browser.name}
            href={browser.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-white text-center hover:border-brand-300 hover:shadow-md transition-all duration-300 block hover:-translate-y-0.5"
          >
            <div className="text-2xl mb-1">{browser.icon}</div>
            <div className="text-[12px] font-bold text-neutral-700">{browser.name}</div>
          </a>
        ))}
      </div>

      <h2>5. Actualizaciones de la política</h2>
      <p>
        En Activa Asesores nos reservamos el derecho de modificar la presente política de cookies en función de nuevos requisitos normativos, técnicos o directrices de la Agencia Española de Protección de Datos (AEPD). Se aconseja a los usuarios revisarla periódicamente.
      </p>

      <h2>6. Canal de dudas</h2>
      <p>
        Para resolver cualquier duda o consulta relacionada con la presente política de cookies, puedes ponerte en contacto directo con nosotros a través de la dirección de correo electrónico:{' '}
        <a href="mailto:privacidad@activaasesores.com">privacidad@activaasesores.com</a>
      </p>
    </LegalLayout>
  );
}
