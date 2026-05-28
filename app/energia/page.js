import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Soluciones de Ahorro Energético | Activa Asesores',
  description:
    'Compara tarifas de luz baratas, calcula tu potencia óptima y reduce tu consumo eléctrico con nuestras herramientas independientes. ¡Estudio gratis!',
};

// ── Icons ────────────────────────────────────────────────────────────
const LightbulbIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6m-6-3h6m-7-4a5 5 0 1 1 8 0c0 2-3 3-3 3H9s-3-1-3-3z" />
  </svg>
);
const ZapIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const ArrowLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const CalcIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="10" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="8" y1="18" x2="10" y2="18" />
    <line x1="14" y1="10" x2="16" y2="10" /><line x1="14" y1="14" x2="16" y2="18" /><line x1="16" y1="14" x2="14" y2="18" />
  </svg>
);
const FileIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.91-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

// ── Datos ─────────────────────────────────────────────────────────────
const tools = [
  {
    icon: <ZapIcon />,
    iconBg: 'bg-accent-50 text-accent-600',
    title: 'Tarifas de Luz Baratas',
    desc: 'Compara las mejores tarifas de luz del mercado y encuentra la opción más económica para tu perfil de consumo.',
    href: '/energia/tarifas-luz-baratas',
    btnText: 'Ver tarifas',
  },
  {
    icon: <FileIcon />,
    iconBg: 'bg-brand-50 text-brand-600',
    title: 'Factura de la Luz',
    desc: 'Aprende a entender tu recibo eléctrico y descubre dónde se ocultan los cargos que inflan tu factura mensual.',
    href: '/energia/factura-luz',
    btnText: 'Saber más',
  },
  {
    icon: <CalcIcon />,
    iconBg: 'bg-accent-50 text-accent-600',
    title: 'Calculadora de Potencia',
    desc: 'Calcula con precisión la potencia eléctrica contratada que realmente necesita tu hogar para evitar pagar de más.',
    href: '/energia/calculadora-potencia-luz',
    btnText: 'Calcular potencia',
  },
  {
    icon: <LightbulbIcon />,
    iconBg: 'bg-brand-50 text-brand-600',
    title: 'Calculadora de Consumo',
    desc: 'Estima tu consumo mensual de electricidad en kWh y planifica tu gasto energético de forma estructurada.',
    href: '/energia/calculadora-consumo-luz',
    btnText: 'Calcular consumo',
  },
];

const companias = [
  { name: 'Endesa',        href: '/energia/companias/endesa-luz',        logo: '/companias/logo-endesa.webp' },
  { name: 'Naturgy',       href: '/energia/companias/naturgy-luz',       logo: '/companias/logo-naturgy.webp' },
  { name: 'Iberdrola',     href: '/energia/companias/iberdrola-luz',     logo: '/companias/logo-iberdrola.webp' },
  { name: 'Repsol',        href: '/energia/companias/repsol-luz',        logo: '/companias/logo-repsol.webp' },
  { name: 'TotalEnergies', href: '/energia/companias/totalenergies-luz', logo: '/companias/logo-totalenergies.webp' },
];

const gestiones = [
  { title: 'Cambio de Titular',              desc: 'Tramitamos el cambio de nombre en tu contrato por mudanza, venta o alquiler.', href: '/gestiones/cambio-titular-luz' },
  { title: 'Alta de Suministro',             desc: 'Activamos la electricidad en viviendas nuevas o tras periodos de baja.', href: '/gestiones/alta-suministro-luz' },
  { title: 'Mejora de Condiciones',          desc: 'Renegociamos y blindamos tu contrato para mantener tarifas bajas todo el año.', href: '/gestiones/mejora-condiciones-luz' },
  { title: 'Subida de Potencia',             desc: 'Gestionamos el aumento de potencia contratada si saltan tus plomos.', href: '/gestiones/subida-potencia-luz' },
  { title: 'Alta Nuevo Punto de Suministro', desc: 'Expedientes complejos de acometida para nuevos inmuebles y locales.', href: '/gestiones/alta-nuevo-punto-suministro-luz' },
];

const faqs = [
  {
    q: '¿Cómo puedo saber si estoy pagando de más en mi factura de luz?',
    a: 'Puedes comparar tu tarifa con las ofertas vigentes en nuestra guía de tarifas baratas. También te sugerimos usar la calculadora de consumo para estimar tu coste teórico o contactar directamente a nuestros asesores enviando tu última factura.',
  },
  {
    q: '¿Qué necesito para cambiar mi tarifa de luz?',
    a: 'Únicamente tu última factura eléctrica. Nosotros nos encargamos de contactar con la comercializadora elegida y tramitar el cambio sin cortes de luz ni molestias.',
  },
  {
    q: '¿Ofrecen servicios para empresas?',
    a: 'Sí, ofrecemos estudios energéticos especializados de alta potencia y optimización de facturas para locales comerciales, pymes y grandes cuentas de forma 100% gratuita.',
  },
];

export default function EnergiaPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-20 md:pb-24 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-brand-600 mb-8 transition-colors">
            <ArrowLeftIcon />
            Inicio
          </Link>
          <div className="max-w-3xl">
            <div className="section-tag-accent mb-6">
              <LightbulbIcon size={16} />
              Sección de Energía
            </div>
            <h1 className="text-[34px] sm:text-[44px] md:text-[64px] font-extrabold text-neutral-900 leading-[1.08] mb-6 tracking-tight">
              Soluciones Energéticas{' '}
              <span className="text-gradient-blue">Inteligentes</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl">
              En Activa Asesores te ofrecemos herramientas interactivas y asesoramiento personalizado sin coste alguno. Nuestro objetivo es que tomes el control de tu gasto eléctrico, pagando lo mínimo.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPAÑÍAS ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 md:px-8 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-tag">Compañías de Luz</div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">¿Con qué compañía tienes la <span className="text-gradient">luz<span className="inline sm:hidden"> o el gas</span>?</span></h2>
            <p className="text-neutral-500 text-base mt-3 max-w-lg mx-auto">Selecciona tu comercializadora para ver sus tarifas y cómo podemos mejorar tus condiciones actuales.</p>
          </div>
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar -mx-6 px-[10vw] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 sm:w-auto sm:mx-0 sm:px-0 sm:left-auto sm:right-auto sm:ml-0 sm:mr-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {companias.map(c => (
              <Link
                key={c.name}
                href={c.href}
                className="snap-center shrink-0 w-[80vw] sm:w-auto group flex flex-col items-center gap-3 p-5 bg-white border border-neutral-100 rounded-2xl hover:border-neutral-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center"
              >
                <div className="w-full h-16 flex items-center justify-center">
                  <Image
                    src={c.logo}
                    alt={`Logo ${c.name}`}
                    width={120}
                    height={60}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-200"
                    style={{ maxHeight: '60px' }}
                  />
                </div>
                <span className="text-sm font-semibold text-neutral-600 group-hover:text-brand-600 transition-colors">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Herramientas gratuitas</div>
            <h2 className="section-title">Herramientas para ahorrar en energía</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Utiliza nuestras calculadoras y guías didácticas para analizar de forma independiente tus contratos y hábitos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map(tool => (
              <div key={tool.title} className="card-base flex flex-col justify-between h-full hover:border-brand-200">
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${tool.iconBg} flex items-center justify-center mb-6`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{tool.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">{tool.desc}</p>
                </div>
                <Link href={tool.href} className="btn-secondary text-sm py-3 justify-center w-full">
                  {tool.btnText}
                  <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GESTIONES ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag-accent">Trámites directos</div>
            <h2 className="section-title">Servicios de Gestión Energética</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Gestionamos todos tus trámites de electricidad con la distribuidora de tu zona de forma 100% gratuita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gestiones.map(g => (
              <div key={g.title} className="group bg-neutral-50 border border-neutral-100 rounded-3xl p-6 flex flex-col justify-between hover:bg-white hover:shadow-soft hover:border-accent-200 transition-all duration-200">
                <div>
                  {/* Barra naranja de acento */}
                  <div className="w-8 h-1 rounded-full bg-accent-400 mb-4" />
                  <h3 className="font-bold text-neutral-900 text-base mb-2">{g.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-5">{g.desc}</p>
                </div>
                <Link href={g.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:gap-2.5 transition-all duration-200">
                  Ver trámite <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">¿Por qué gestionar tu energía con <span className="text-gradient">Activa Asesores?</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Ahorro Garantizado',   desc: 'Encontramos las mejores tarifas de luz optimizando tu término de potencia contratada.' },
              { title: 'Herramientas Prácticas', desc: 'Calculadoras en línea para simular consumos sin registros ni compromisos.' },
              { title: 'Servicios Gratuitos',  desc: 'Gestionamos altas, bajas y cambios de titular sin cobrarte ninguna comisión.' },
              { title: 'Asesor Personal',      desc: 'Hablamos en lenguaje sencillo y te asignamos un gestor personal real.' },
            ].map(b => (
              <div key={b.title} className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft text-center">
                <div className="w-10 h-10 bg-accent-50 text-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon />
                </div>
                <h4 className="font-bold text-neutral-900 text-sm mb-2">{b.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag">Preguntas frecuentes</div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">Resolvemos tus <span className="text-gradient">dudas</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6">
                <h3 className="font-semibold text-neutral-900 text-base mb-3 flex items-start gap-2">
                  <span className="text-accent-500 shrink-0 mt-0.5">
                    <ZapIcon size={16} />
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden"        style={{ background: 'linear-gradient(135deg, #1A5FAD 0%, #1e3a8a 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">¿Quieres empezar a ahorrar hoy mismo?</h2>
          <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
            Llámanos gratis de lunes a viernes de 8:00 a 20:00. Analizaremos tu factura de luz en menos de 10 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+34854615199" className="btn-accent px-8 py-4 text-base">
              <PhoneIcon size={16} />
              Llamar gratis
            </a>
            <Link href="/contacto" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors py-2">
              Solicitar análisis gratuito <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
