import Link from 'next/link';

export const metadata = {
  title: 'Cambio de Titular de Luz Gratis y Rápido | Activa Asesores',
  description:
    'Tramitamos el cambio de titularidad del contrato de luz gratis por mudanza, alquiler o herencia. Evita trámites infinitos con la distribuidora.',
};

const ZapIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const requirements = [
  { title: 'Datos del nuevo titular', desc: 'Nombre completo, DNI/NIE/CIF del nuevo titular y sus datos de contacto (teléfono y email).' },
  { title: 'Dirección del suministro', desc: 'La dirección exacta del inmueble donde está activo el contrato eléctrico.' },
  { title: 'Código CUPS', desc: 'El Código Universal del Punto de Suministro que identifica la instalación (se encuentra en cualquier factura previa).' },
  { title: 'Justificación del cambio', desc: 'Escritura de propiedad o contrato de alquiler del inmueble para acreditar el cambio.' },
  { title: 'Datos Bancarios', desc: 'Un número de cuenta bancaria (IBAN) para domiciliar los futuros recibos de luz.' },
];

export default function CambioTitularLuzPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-24 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/soluciones" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-brand-600 mb-8 transition-colors">
            <ArrowLeftIcon /> Volver a Soluciones
          </Link>
          <div className="max-w-3xl">
            <div className="section-tag mb-6">
              <ZapIcon size={14} />
              Gestión gratuita
            </div>
            <h1 className="text-5xl md:text-[60px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6">
              Cambio de{' '}<span className="text-gradient">Titular de Luz</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              ¿Te has mudado o has alquilado un inmueble? En Activa Asesores gestionamos el cambio de titularidad de tu suministro eléctrico de forma rápida, segura y 100% gratuita para ti.
            </p>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Documentación</div>
            <h2 className="section-title">Requisitos para el cambio de titular de luz</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Para realizar el cambio del contrato ante la comercializadora, necesitarás facilitar los siguientes datos básicos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map(r => (
              <div key={r.title} className="card-base hover:border-brand-200">
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-neutral-900 text-base mb-2">{r.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cómo realizamos el cambio?</h2>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                Simplificamos el papeleo para evitarte colas telefónicas con las compañías eléctricas. El proceso completo consta de 4 sencillos pasos.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Recopilación de datos', desc: 'Nos facilitas los datos del nuevo titular y una factura anterior para extraer el código CUPS.' },
                  { title: 'Revisión y optimización de la tarifa', desc: 'Comprobamos el contrato actual. Si detectamos que puedes pagar menos de luz, te aconsejamos una tarifa más barata.' },
                  { title: 'Gestión oficial con la distribuidora', desc: 'Contactamos directamente con la compañía y registramos el cambio de nombre sin cortes de energía.' },
                  { title: 'Notificación y confirmación', desc: 'Te informamos cuando el trámite sea procesado y la siguiente factura llegue correctamente a tu nombre.' },
                ].map((step, idx) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm mb-1">{step.title}</h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-4xl p-8 border border-neutral-100 space-y-6">
              <h3 className="font-bold text-xl text-neutral-900">¿Cuándo se necesita este trámite?</h3>
              <ul className="space-y-4">
                {[
                  'Compraventa o alquiler de un inmueble.',
                  'Fallecimiento del titular del contrato.',
                  'Divorcio o separación matrimonial.',
                  'Traspaso o cambio de inquilinos en locales comerciales.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                    <span className="text-brand-500 mt-0.5 shrink-0"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  **¿Cuánto cuesta?** El cambio de titular es un trámite gratuito. No requiere de costes técnicos adicionales.
                </p>
                <Link href="/contacto" className="btn-primary w-full justify-center py-4">
                  <ZapIcon size={16} />
                  Iniciar cambio gratis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Cambia la titularidad de tu suministro sin dolores de cabeza</h2>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
            De lunes a viernes de 8:00 a 20:00. Un gestor personal te ayudará a recopilar los datos y realizar el trámite con la distribuidora en menos de 10 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+34854615199" className="btn-primary w-full sm:w-auto justify-center px-8 py-4 text-base">
              Llamar gratis
            </a>
            <Link href="/contacto" className="text-white hover:underline font-bold py-2">
              Solicitar por correo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
