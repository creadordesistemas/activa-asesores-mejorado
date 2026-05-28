import LegalLayout from '@/components/ui/LegalLayout';

export const metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Activa Asesores. Información sobre el titular del sitio web, condiciones de uso y propiedad intelectual.',
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="mayo de 2025">
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se facilitan los siguientes datos identificativos del titular del sitio web:
      </p>

      {/* Tarjetas de datos identificativos con branding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100/50 flex items-center justify-center text-[#1A5FAD] shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Denominación Social</div>
            <div className="text-[14px] font-bold text-neutral-800 mt-0.5">Activa Asesores, S.L.</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100/50 flex items-center justify-center text-[#1A5FAD] shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="7" y1="8" x2="17" y2="8" />
              <line x1="7" y1="12" x2="17" y2="12" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">CIF / NIF</div>
            <div className="text-[14px] font-bold text-neutral-800 mt-0.5">B75810804</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100/50 flex items-center justify-center text-[#1A5FAD] shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Domicilio Social</div>
            <div className="text-[13.5px] font-bold text-neutral-800 mt-0.5 leading-snug">Avenida San Francisco Javier 9, stn 7, 41018 Sevilla</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100/50 flex items-center justify-center text-[#1A5FAD] shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Contacto</div>
            <a href="mailto:info@activaasesores.com" className="block text-[14px] font-bold text-[#1A5FAD] hover:text-[#f4a261] transition-colors mt-0.5">info@activaasesores.com</a>
            <a href="tel:+34854615199" className="block text-[12px] font-semibold text-neutral-500 mt-0.5">854 615 199</a>
          </div>
        </div>
      </div>

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>
        El presente Aviso Legal regula las condiciones de uso del sitio web <strong>www.activaasesores.com</strong>. El acceso y uso de este sitio web implica la aceptación expresa de estas condiciones por parte de los usuarios.
      </p>
      <p>
        Activa Asesores se reserva el derecho a modificar de manera unilateral las presentes condiciones, así como los contenidos, servicios o tarifas ofrecidos en el sitio web, sin necesidad de previo aviso.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (incluyendo textos, imágenes, fotografías, gráficos, logotipos, marcas, código fuente, estructura de navegación y software) son propiedad de Activa Asesores o de terceros que han autorizado su uso, y están debidamente protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.
      </p>
      <p>
        Queda expresamente prohibida la reproducción, distribución, comunicación pública, puesta a disposición, reutilización o transformación de estos contenidos sin la autorización expresa y por escrito de Activa Asesores.
      </p>

      <h2>4. Condiciones de uso del sitio web</h2>
      <p>
        El usuario se compromete a realizar un uso del sitio web de conformidad con la ley, las buenas costumbres, la moral y el presente Aviso Legal. Queda prohibido:
      </p>
      <ul>
        <li>Utilizar el sitio web con fines ilícitos, dañinos, o lesivos de los derechos e intereses de Activa Asesores o de terceros.</li>
        <li>Realizar acciones encaminadas a vulnerar la seguridad de la web o intentar acceder de manera no autorizada a bases de datos y sistemas conectados al sitio.</li>
        <li>Introducir en la web software malicioso, virus informáticos o cualquier elemento susceptible de alterar o dañar los servidores de la empresa.</li>
      </ul>

      <h2>5. Exclusión de responsabilidades</h2>
      <p>
        Activa Asesores no garantiza la total disponibilidad ni la continuidad ininterrumpida del sitio web y no se responsabiliza por los daños o perjuicios que se deriven de caídas de servicio, cortes de red, o fallos de telecomunicaciones ajenos a su control.
      </p>
      <p>
        La información contenida en esta web (tarifas, condiciones y normativas) se ofrece con fines meramente orientativos. Para la realización de cualquier trámite específico o un análisis personalizado de sus facturas, se recomienda contactar directamente con nuestro equipo de asesores independientes.
      </p>

      <h2>6. Legislación aplicable y jurisdicción</h2>
      <p>
        Las relaciones establecidas entre Activa Asesores y los usuarios de este sitio web se regirán por la legislación española vigente. Para dirimir cualquier controversia o discrepancia, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles por ley, a los Juzgados y Tribunales del domicilio del usuario.
      </p>
    </LegalLayout>
  );
}
