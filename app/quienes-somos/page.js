import Link from 'next/link';

export const metadata = {
  title: 'Asesores Energéticos Independientes | Activa Asesores',
  description:
    'Conoce al equipo independiente de Activa Asesores. Nuestra misión es simplificar la energía y ayudarte a pagar lo mínimo, de forma transparente.',
};

const ZapIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const values = [
  {
    icon: <EyeIcon />,
    color: 'bg-brand-50 text-brand-600',
    title: 'Transparencia total',
    desc: 'Te decimos exactamente lo que hacemos, cuánto cuesta y qué puedes esperar. Sin sorpresas ni letra pequeña.',
  },
  {
    icon: <HeartIcon />,
    color: 'bg-red-50 text-red-500',
    title: 'Orientados a personas',
    desc: 'Detrás de cada trámite hay una persona con una situación real. Nos tomamos el tiempo de entenderla.',
  },
  {
    icon: <TrendingUpIcon />,
    color: 'bg-electric-50 text-electric-600',
    title: 'Agilidad ante todo',
    desc: 'El sector energético puede ser lento y burocrático. Nosotros actuamos rápido para que tú no esperes.',
  },
  {
    icon: <UsersIcon />,
    color: 'bg-violet-50 text-violet-600',
    title: 'Especialización real',
    desc: 'No somos una asesoría generalista. Somos especialistas en energía, y eso marca la diferencia.',
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-24 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag mb-6">
              <UsersIcon size={16} />
              El equipo
            </div>
            <h1 className="text-[34px] sm:text-[44px] md:text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6">
              Hacemos la energía{' '}<span className="text-gradient">más simple para todos</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl">
              Somos un equipo especializado en gestión energética con una misión clara: que ninguna persona pague de más en su factura de luz o gas por no saber cómo gestionar su contrato.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-electric-700 bg-electric-50 border border-electric-100 px-3.5 py-1.5 rounded-full mb-6">
                Nuestra misión
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 mb-5 leading-tight">
                El sector energético es complejo. Nosotros lo <span className="text-gradient">simplificamos.</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-5">
                Las facturas de luz y gas son, para la mayoría de personas, un documento incomprensible. Términos como "término de potencia", "peaje de acceso" o "discriminación horaria" alejan a los consumidores de decisiones que les afectan directamente en el bolsillo.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-5">
                En Activa Asesores nacimos para cambiar eso. Traducimos la energía a un lenguaje claro, identificamos dónde puedes ahorrar y gestionamos los trámites que tú no quieres ni deberías tener que hacer.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                No somos un comparador de precios ni una comercializadora con intereses comerciales propios. Somos un equipo de gestión independiente, siempre del lado del cliente.
              </p>
            </div>

            {/* Visual stats panel */}
            <div className="bg-neutral-50 rounded-4xl p-8 border border-neutral-100">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '+3.000', label: 'Clientes atendidos', sub: 'Desde 2018' },
                  { n: '€180', label: 'Ahorro medio/año', sub: 'Por cliente' },
                  { n: '48h', label: 'Tiempo de respuesta', sub: 'Garantizado' },
                  { n: '100%', label: 'Independientes', sub: 'Sin ataduras' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-3xl p-5 border border-neutral-100 shadow-soft">
                    <div className="text-3xl font-bold text-neutral-900 mb-1">{s.n}</div>
                    <div className="text-sm font-medium text-neutral-600">{s.label}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-full mb-5">
              Nuestros valores
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900">Cómo <span className="text-gradient">trabajamos</span></h2>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
              Cuatro principios que guían cada gestión, cada llamada y cada decisión que tomamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.title} className="card-base text-center">
                <div className={`w-12 h-12 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{v.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Equipo y Contacto */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* Columna izquierda: Información del equipo */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-full mb-6">
                <UsersIcon />
                El equipo
              </div>
              <h2 className="text-4xl font-extrabold text-neutral-900 leading-tight mb-5">
                Personas reales,<br />
                <span className="text-gradient">trato real.</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed max-w-md mx-auto md:mx-0">
                No somos un bot ni un sistema automatizado. Somos personas con nombres, conocimientos y el compromiso de resolver tu gestión de forma directa y cercana.
              </p>
            </div>

            {/* Columna derecha: Call to Action */}
            <div className="bg-neutral-50 rounded-4xl p-8 md:p-10 border border-neutral-100 text-center md:text-left shadow-soft">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ¿Quieres conocernos mejor antes de empezar?
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Escríbenos o llámanos. Estaremos encantados de contarte cómo podemos ayudarte a reducir tus facturas de luz sin ningún compromiso.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contacto" className="btn-primary px-7 py-4 w-full sm:w-auto justify-center">
                  <ZapIcon size={18} />
                  Hablar con el equipo
                </Link>
                <Link href="/soluciones" className="btn-secondary px-7 py-4 w-full sm:w-auto justify-center">
                  Ver servicios
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
