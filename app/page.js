import Link from 'next/link';

export const metadata = {
  title: 'Activa Asesores | Ahorra en tu factura de luz y gas sin complicaciones',
  description:
    'Gestoría energética especializada. Reducimos tu factura de luz y gas, tramitamos cambios de titular y gestionamos altas de suministros. Rápido, claro y sin burocracia.',
};

// ── Icons ──────────────────────────────────────────────────────────
const ZapIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const FlameIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/>
  </svg>
);
const FileTextIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);
const TrendingDownIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
    <polyline points="17 18 23 18 23 12"/>
  </svg>
);
const ShieldCheckIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const ClockIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const SearchIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const StarIcon = ({ filled = false }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

// ── Service Cards data ─────────────────────────────────────────────
const services = [
  {
    icon: <TrendingDownIcon size={22} />,
    color: 'bg-brand-50 text-brand-600',
    title: 'Optimización de facturas',
    desc: 'Analizamos tu consumo y tarifa actual. Si hay margen de ahorro, lo encontramos y lo aplicamos.',
    badge: 'Más solicitado',
  },
  {
    icon: <ZapIcon size={22} />,
    color: 'bg-electric-50 text-electric-600',
    title: 'Alta de electricidad',
    desc: 'Nuevo suministro, cambio de vivienda o reconexión. Lo tramitamos de principio a fin.',
  },
  {
    icon: <FlameIcon size={22} />,
    color: 'bg-orange-50 text-orange-500',
    title: 'Alta de gas natural',
    desc: 'Gestionamos el alta de gas en cualquier punto del territorio nacional. Sin colas ni esperas.',
  },
  {
    icon: <FileTextIcon size={22} />,
    color: 'bg-violet-50 text-violet-600',
    title: 'Cambio de titular',
    desc: 'Compraventa, herencia o cambio de inquilino. Tramitamos el cambio sin que tengas que moverte.',
  },
  {
    icon: <SearchIcon size={22} />,
    color: 'bg-sky-50 text-sky-600',
    title: 'Revisión de potencia',
    desc: 'Detectamos si pagas más de lo que necesitas y ajustamos la potencia a tu consumo real.',
  },
  {
    icon: <ShieldCheckIcon size={22} />,
    color: 'bg-teal-50 text-teal-600',
    title: 'Gestión de incidencias',
    desc: 'Cortes de suministro, reclamaciones a la comercializadora. Te representamos y resolvemos.',
  },
];

// ── Trust stats ────────────────────────────────────────────────────
const stats = [
  { value: '+3.000', label: 'Clientes gestionados' },
  { value: '€180', label: 'Ahorro medio anual' },
  { value: '48h', label: 'Tiempo medio de resolución' },
  { value: '98%', label: 'Clientes satisfechos' },
];

// ── How it works steps ─────────────────────────────────────────────
const steps = [
  {
    number: '01',
    title: 'Nos envías tu factura',
    desc: 'Sube tu última factura de luz o gas a través del formulario. Sólo necesitamos eso para empezar.',
  },
  {
    number: '02',
    title: 'Analizamos tu situación',
    desc: 'Nuestros especialistas revisan tu tarifa, potencia y consumo en menos de 24 horas.',
  },
  {
    number: '03',
    title: 'Te presentamos las opciones',
    desc: 'Recibes un informe claro con el ahorro potencial y los pasos a seguir. Sin letra pequeña.',
  },
  {
    number: '04',
    title: 'Nosotros lo tramitamos todo',
    desc: 'Con tu autorización, gestionamos todo el proceso. Tú no tienes que hacer nada más.',
  },
];

// ── Testimonials ───────────────────────────────────────────────────
const testimonials = [
  {
    name: 'María García',
    role: 'Propietaria, Madrid',
    text: 'Me ahorraron más de 200€ al año en la factura de luz ajustando la potencia. El proceso fue facilísimo, ellos se encargaron de todo.',
    stars: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Gestor de comunidad, Barcelona',
    text: 'Tramitamos el cambio de titular de varios suministros tras una herencia. Rápido, profesional y sin complicaciones.',
    stars: 5,
  },
  {
    name: 'Laura Fernández',
    role: 'Autónoma, Valencia',
    text: 'No entendía mi factura de gas. Me lo explicaron todo y además encontraron una tarifa más barata. Recomendables 100%.',
    stars: 5,
  },
];

// ── FAQ ────────────────────────────────────────────────────────────
const faqs = [
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'La consulta inicial es gratuita. Solo cobramos una tarifa plana acordada si decidimos trabajar juntos, sin sorpresas ni comisiones ocultas.',
  },
  {
    q: '¿Necesito desplazarme a ningún sitio?',
    a: 'No. Todo el proceso se realiza de forma online o por teléfono. Nos envías los documentos y nosotros hacemos el resto.',
  },
  {
    q: '¿Gestionáis suministros en toda España?',
    a: 'Sí, operamos en todo el territorio nacional, tanto para particulares como para comunidades de vecinos y pequeñas empresas.',
  },
  {
    q: '¿Cuánto tiempo tarda un cambio de titular?',
    a: 'En condiciones normales, entre 3 y 10 días hábiles, dependiendo de la comercializadora. Te mantenemos informado en todo momento.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-bg pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-brand-200/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-electric-200/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-4 py-2 rounded-full mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              Gestoría energética — Sin papeleos, sin esperas
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.08] mb-6 animate-fade-up animate-delay-100">
              Reduce tu factura.{' '}
              <span className="text-gradient">Nosotros tramitamos</span>{' '}
              lo demás.
            </h1>

            <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up animate-delay-200">
              Analizamos tu contrato de luz o gas, detectamos lo que estás pagando de más y gestionamos cualquier trámite energético en menos de 48 horas. Tú no haces nada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animate-delay-300">
              <Link href="/contacto" className="btn-primary text-base px-8 py-4">
                <ZapIcon size={18} />
                Optimizar mi factura gratis
              </Link>
              <Link href="/servicios" className="btn-secondary text-base px-8 py-4">
                Ver todos los trámites
                <ArrowRightIcon />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-400 animate-fade-up animate-delay-400">
              {['Consulta gratuita', 'Sin compromiso', 'Gestionamos en toda España', 'Respuesta en 24h'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-brand-500"><CheckIcon /></span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="py-14 px-4 md:px-8 bg-white border-y border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="stat-card">
                <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="section-tag">
              <ZapIcon size={14} />
              Nuestros servicios
            </div>
            <h2 className="section-title">Todo lo que necesitas para tu suministro energético</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Desde una simple revisión de tarifa hasta trámites complejos de cambio de titular. Lo hacemos todo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="card-base group relative overflow-hidden">
                {s.badge && (
                  <span className="absolute top-5 right-5 text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className={`w-11 h-11 ${s.color} rounded-2xl flex items-center justify-center mb-5`}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                <Link href="/servicios" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all duration-200">
                  Saber más <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/servicios" className="btn-secondary inline-flex">
              Ver todos los servicios
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="section-tag">
              <ClockIcon size={14} />
              Así de fácil
            </div>
            <h2 className="section-title">Empiezas hoy, ahorras mañana</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Un proceso diseñado para que no tengas que preocuparte de nada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+0px)] w-full h-px bg-gradient-to-r from-neutral-200 to-transparent z-0" style={{ width: '100%', left: '88px' }} />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-lg mb-5 shadow-glow">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contacto" className="btn-primary inline-flex px-8 py-4 text-base">
              <ZapIcon size={18} />
              Empezar ahora — Es gratis
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="section-tag">
              <StarIcon filled />
              Testimonios
            </div>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="card-base">
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <StarIcon key={i} filled />
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-electric-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-tag">FAQ</div>
              <h2 className="section-title">Preguntas frecuentes</h2>
            </div>

            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.q} className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            ¿Pagas de más en tu factura energética?
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Descúbrelo en menos de 24 horas. Análisis gratuito, sin compromiso y gestionado por personas reales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="btn-primary px-8 py-4 text-base">
              <ZapIcon size={18} />
              Analizar mi factura gratis
            </Link>
            <a href="tel:+34900000000" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors">
              O llámanos: 900 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
