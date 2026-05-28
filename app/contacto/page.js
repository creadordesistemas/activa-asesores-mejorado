import ContactForm from '@/components/ui/ContactForm';

export const metadata = {
  title: 'Contacto y Estudio de Factura de Luz Gratis | Activa',
  description:
    'Solicita tu estudio energético 100% gratuito. Envíanos tu factura de luz o llámanos para descubrir cuánto puedes ahorrar hoy. ¡Sin compromiso!',
};

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.91-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const contactDetails = [
  {
    icon: <PhoneIcon />,
    color: 'bg-brand-50 text-brand-600',
    label: 'Teléfono',
    value: '854 615 199',
    sub: 'Llamada gratuita',
    href: 'tel:+34854615199',
  },
  {
    icon: <MailIcon />,
    color: 'bg-electric-50 text-electric-600',
    label: 'Email',
    value: 'info@activaasesores.com',
    sub: 'Respondemos en 24h',
    href: 'mailto:info@activaasesores.com',
  },
  {
    icon: <ClockIcon />,
    color: 'bg-violet-50 text-violet-600',
    label: 'Horario',
    value: 'Lunes - Viernes: 8:00–20:00',
    sub: 'Atención personalizada',
  },
];

const promises = [
  'Análisis gratuito y sin compromiso',
  'Respuesta garantizada en menos de 24h',
  'Un asesor real, no un bot',
  'Sin letra pequeña, sin sorpresas',
];

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-16 md:pb-20 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="section-tag-accent mb-6 mx-auto">
            <ZapIcon />
            Análisis gratuito
          </div>
          <h1 className="text-[34px] sm:text-[44px] md:text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6">
            Cuéntanos tu situación.<br className="hidden sm:inline" />
            <span className="text-gradient">Nosotros te respondemos.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
            Sin formularios interminables ni llamadas comerciales. Solo dinos qué necesitas y te daremos una respuesta honesta y sin compromiso.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10">
            {/* Sidebar */}
            <div className="order-2 lg:order-1 lg:col-span-2 space-y-6">
              {/* Contact details */}
              <div className="bg-white rounded-3xl border border-neutral-100 shadow-soft p-7">
                <h2 className="font-bold text-neutral-900 mb-5">Datos de contacto</h2>
                <div className="space-y-4">
                  {contactDetails.map(d => (
                    <div key={d.label} className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${d.color} rounded-xl flex items-center justify-center shrink-0`}>
                        {d.icon}
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 font-medium">{d.label}</p>
                        {d.href ? (
                          <a href={d.href} className="text-sm font-semibold text-neutral-800 hover:text-brand-600 transition-colors">
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-neutral-800">{d.value}</p>
                        )}
                        <p className="text-xs text-neutral-400">{d.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promises */}
              <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-7 text-white shadow-glow">
                <h3 className="font-bold text-lg mb-4 text-white">Nuestro compromiso contigo</h3>
                <ul className="space-y-3">
                  {promises.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white">
                      <span className="mt-0.5 shrink-0 text-brand-300"><CheckIcon /></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-brand-500">
                  <p className="text-xs text-brand-200">
                    Más de 3.000 clientes han confiado en nosotros desde 2018.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="bg-white rounded-3xl border border-neutral-100 shadow-soft p-6 sm:p-8">
                <div className="mb-7">
                  <h2 className="text-2xl font-bold text-neutral-900">Solicita tu análisis</h2>
                  <p className="text-sm text-neutral-500 mt-1.5">
                    Rellena el formulario y te contactamos en menos de 24 horas.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
