import Link from 'next/link';
import TestimonialsScroll from '@/components/ui/TestimonialsScroll';

export const metadata = {
  title: 'Ahorrar en la Factura de Luz y Gas | Activa Asesores',
  description:
    'Optimiza tu factura de luz con asesores independientes. Compara tarifas gratis y tramita tu alta o cambio de titular sin coste. ¡Llámanos ya!',
};

// ── Icons ─────────────────────────────────────────────────────────────────────

const ZapIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </svg>
);

const PhoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.91-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FileIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const TrendingDownIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
  </svg>
);

const ShieldIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);

const SearchIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const UsersIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldCheckIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SparklesIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const BarChartIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

// ── Datos ──────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <FileIcon />,
    category: 'Gestión',
    title: 'Cambio de titular',
    desc: 'Tramitamos el cambio de titularidad de tu suministro de principio a fin, sin que tengas que gestionar ningún papeleo.',
    href: '/gestiones/cambio-titular-luz',
  },
  {
    icon: <ZapIcon size={20} />,
    category: 'Alta',
    title: 'Alta de suministro',
    desc: 'Activamos tu punto de suministro con soporte personalizado. Nos ocupamos de toda la documentación necesaria.',
    href: '/gestiones/alta-suministro-luz',
  },
  {
    icon: <TrendingDownIcon />,
    category: 'Ahorro',
    title: 'Mejora de condiciones',
    desc: 'Analizamos tu contrato actual y lo comparamos con las mejores ofertas del mercado para reducir tu factura.',
    href: '/gestiones/mejora-condiciones-luz',
    highlight: true,
  },
  {
    icon: <SearchIcon />,
    category: 'Potencia',
    title: 'Subida de potencia',
    desc: 'Evaluamos tus necesidades reales y ajustamos la potencia contratada para que no pagues de más ni de menos.',
    href: '/gestiones/subida-potencia-luz',
  },
  {
    icon: <PlusIcon />,
    category: 'Nuevo punto',
    title: 'Alta nuevo suministro',
    desc: 'Activamos un nuevo punto de suministro para tu hogar o negocio. Gestionamos todos los trámites ante la distribuidora.',
    href: '/gestiones/alta-nuevo-punto-suministro-luz',
  },
  {
    icon: <ShieldIcon />,
    category: 'Consultoría',
    title: 'Estudio energético',
    desc: 'Analizamos tu perfil de consumo completo y te presentamos un informe con las oportunidades de ahorro identificadas.',
    href: '/soluciones',
  },
];

const stats = [
  { value: '+3.000', label: 'Clientes atendidos', icon: <UsersIcon size={20} />, color: 'brand' },
  { value: '100%',  label: 'Independiente', icon: <ShieldCheckIcon size={20} />, color: 'accent' },
  { value: '€0',    label: 'Coste para ti', icon: <SparklesIcon size={20} />, color: 'accent' },
  { value: null, label: null, icon: null, color: 'brand', fullText: true },
];

const steps = [
  {
    number: '01',
    title: 'Nos cuentas tu situación',
    desc: 'Una llamada de menos de 10 minutos es suficiente. Uno de nuestros asesores analiza tu factura y hábitos de consumo.',
  },
  {
    number: '02',
    title: 'Comparamos el mercado',
    desc: 'Revisamos en tiempo real las condiciones de Endesa, Iberdrola, Naturgy, Repsol y TotalEnergies para encontrar tu tarifa óptima.',
  },
  {
    number: '03',
    title: 'Ejecutamos el cambio',
    desc: 'Gestionamos todo el proceso sin que muevas un dedo. Tú apruebas, nosotros ejecutamos. Sin permanencias ni letra pequeña.',
  },
];

const testimonials = [
  {
    quote: 'Muy contento con el cambio de tarifa. Me asesoraron muy bien y se encargaron de todo el papeleo. Desde que hice el cambio, he notado un ahorro importante en la factura de la luz: estoy pagando unos 20 € menos al mes. Totalmente recomendable.',
    name: 'Vink Metal',
    stars: 5,
  },
  {
    quote: 'Me ayudaron a cambiar el titular en la luz y el gas, soy nuevo inquilino, el proceso fue rápido, me lo explicaron todo, y mi factura bajó 25 € el primer mes.',
    name: 'Serafin',
    stars: 5,
  },
  {
    quote: 'Se nos iba la luz de casa cada dos por tres, saltando el diferencial. Me ayudaron a subir la potencia y además me pusieron una tarifa que mejoró considerablemente el precio de mi factura.',
    name: 'Cynthia Laia',
    stars: 5,
  },
  {
    quote: 'Necesitaba dar de alta la luz de mi vivienda y ellos me ayudaron. 5 días después tenemos luz, y además me buscaron la mejor tarifa en mi zona. Servicio muy recomendable.',
    name: 'Santiago Vega Sanchez',
    stars: 5,
  },
  {
    quote: 'Pagábamos mucho en la factura de luz, y después de contactar con ellos, nuestra factura ha bajado muchísimo. El año que viene volveré a llamar.',
    name: 'Selenne',
    stars: 5,
  },
  {
    quote: 'Muy buenos profesionales, me asesoraron y ayudaron. Me ofertaron un cambio de tarifa eléctrica mucho mejor del que tenía, ahorrando mes a mes.',
    name: 'Jose Antonio Acal Estepa',
    stars: 5,
  },
  {
    quote: 'Alta de luz y de gas, rápido porque además me urgía, las tarifas económicas, muy profesionales y me explicaron todos los detalles. Muchas gracias Activa Asesores.',
    name: 'Carlos Dóyega Morales',
    stars: 5,
  },
  {
    quote: 'Me ayudaron con el cambio de titularidad de la luz. Son muy simpáticos y en 15 minutos teníamos todo tramitado.',
    name: 'Jarp',
    stars: 5,
  },
  {
    quote: 'Super contento, me cambiaron el número de cuenta en un momento y además me mejoraron la factura de luz. 100% recomendado.',
    name: 'Castelo Moneymaker',
    stars: 5,
  },
  {
    quote: 'Llamé para mejorar mi factura y me ayudaron mucho.',
    name: 'Juan Jose Castro',
    stars: 5,
  },
  {
    quote: 'Un trato excelente y muy resolutivos.',
    name: 'Lola Franco',
    stars: 5,
  },
];

const companies = [
  { name: 'Endesa',        href: '/energia/companias/endesa-luz' },
  { name: 'Naturgy',       href: '/energia/companias/naturgy-luz' },
  { name: 'Iberdrola',     href: '/energia/companias/iberdrola-luz' },
  { name: 'Repsol',        href: '/energia/companias/repsol-luz' },
  { name: 'TotalEnergies', href: '/energia/companias/totalenergies-luz' },
];

// ── Componentes auxiliares ─────────────────────────────────────────────────────

function PhoneCTA({ id, className = '' }) {
  return (
    <div className={`flex flex-col items-center md:items-start gap-1.5 w-full sm:w-auto ${className}`}>
      <a
        href="tel:+34854615199"
        id={id}
        className="btn-accent inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[15px] w-full sm:w-auto text-center"
      >
        <PhoneIcon size={16} />
        Hablar con un asesor
      </a>
      <span className="text-xs text-neutral-400 pl-1 text-center md:text-left">
        Atención gratuita · <span className="font-semibold text-neutral-500">854 615 199</span>
      </span>
    </div>
  );
}

// ── Página ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-28 md:pt-48 md:pb-36 px-6 md:px-8">
        {/* Fondo orbs – sutiles */}
        <div className="absolute top-[-80px] left-[-120px] w-[700px] h-[700px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-80px] w-[500px] h-[500px] bg-accent-400/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-16 items-center">

             {/* Columna texto */}
            <div className="md:col-span-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-8 animate-fade-up w-full md:w-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500 text-center md:text-left">
                  Gestión energética gratuita
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[60px] md:text-[80px] font-extrabold text-neutral-900 leading-[1.02] tracking-tight mb-7 animate-fade-up animate-delay-100 text-center md:text-left">
                {/* Versión móvil: 3 líneas */}
                <span className="md:hidden">
                  <span className="block">Tu factura</span>
                  <span className="block">
                    de <span className="text-gradient">Luz</span> y <span className="text-gradient">Gas</span>
                  </span>
                  <span className="block">optimizada.</span>
                </span>
                {/* Versión desktop: layout original, gradiente en Luz y Gas */}
                <span className="hidden md:block">
                  Tu factura de <span className="text-gradient">Luz</span> y <span className="text-gradient">Gas</span>,{' '}
                  <span className="block">optimizada.</span>
                </span>
              </h1>

              <p className="text-[17px] text-neutral-500 leading-[1.75] mb-10 max-w-[480px] mx-auto md:mx-0 text-center md:text-left animate-fade-up animate-delay-200">
                Analizamos tu consumo, comparamos las mejores tarifas del mercado
                y gestionamos cualquier trámite por ti. Sin coste, sin esperas.
              </p>

              {/* CTA principal */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:items-start md:justify-start gap-5 animate-fade-up animate-delay-300 w-full">
                <PhoneCTA id="hero-cta-principal" />
                <Link
                  href="/soluciones"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors py-4 group w-full sm:w-auto text-center"
                >
                  Ver soluciones
                  <span className="transition-transform group-hover:translate-x-1 duration-200">
                    <ArrowRightIcon size={14} />
                  </span>
                </Link>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-10 animate-fade-up animate-delay-400">
                {['Sin permanencia', 'Asesoría independiente', 'Respuesta en 10 min'].map(t => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-neutral-500 bg-white border border-neutral-200 px-3 py-1.5 rounded-full"
                  >
                    <CheckIcon size={11} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna hero card */}
            <div className="md:col-span-6 hidden md:flex justify-end animate-fade-in animate-delay-400">
              <div
                className="w-full max-w-[400px] rounded-[28px] border border-white/80 p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, #ffffff 0%, #f1f5ff 100%)',
                  boxShadow: '0 24px 64px rgba(26,95,173,0.10), 0 1px 0 rgba(255,255,255,0.9) inset',
                }}
              >
                {/* Decoración top-right */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-400/8 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl" />

                {/* Indicador live */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-neutral-400">
                    Estudio de ahorro
                  </span>
                </div>

                {/* Stat principal */}
                <div className="mb-7">
                  <div className="text-[58px] font-extrabold text-neutral-900 leading-none tracking-tight mb-2">
                    35<span className="text-accent-500">%</span>
                  </div>
                  <p className="text-sm text-neutral-400 font-medium">
                    Reducción media anual en factura eléctrica
                  </p>
                </div>

                {/* Barra visual de ahorro */}
                <div className="mb-7">
                  <div className="flex justify-between text-[11px] font-semibold text-neutral-400 mb-2">
                    <span>Tarifa actual</span>
                    <span className="text-brand-600">Tarifa óptima</span>
                  </div>
                  <div className="relative h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        width: '100%',
                        background: 'linear-gradient(90deg, #1A5FAD 0%, #f4a261 100%)',
                      }}
                    />
                    <div
                      className="absolute left-0 top-0 h-full rounded-full bg-neutral-100"
                      style={{ left: '65%', width: '35%' }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-400 mt-1.5">
                    <span></span>
                    <span className="text-accent-500 font-bold">−35% ahorro</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {[
                    { label: 'Comparamos entre todas las compañías', sub: 'Endesa, Iberdrola, Naturgy…' },
                    { label: 'Trámites 100% gratuitos', sub: 'Sin burocracia ni esperas' },
                    { label: 'Seguimiento anual', sub: 'Te avisamos si hay mejora' },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-neutral-100"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <CheckIcon size={10} />
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-neutral-800 leading-tight">{item.label}</div>
                        <div className="text-[11px] text-neutral-400">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COMPAÑÍAS ─────────────────────────────────────────────────────── */}
      <section className="py-7 px-6 md:px-8 bg-white border-y border-neutral-100">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-neutral-300 pr-4">
            Trabajamos con
          </span>
          {companies.map((c, i) => (
            <span key={c.name} className="flex items-center gap-2">
              <Link
                href={c.href}
                className="text-[13px] font-semibold text-neutral-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1A5FAD] hover:to-[#f4a261] hover:bg-clip-text hover:text-transparent hover:scale-105"
              >
                {c.name}
              </Link>
              {i < companies.length - 1 && (
                <span className="w-px h-3.5 bg-neutral-200 mx-1" />
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS + POR QUÉ ───────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-stretch">

            {/* Stats */}
            <div className="flex flex-col h-full">
              <div className="flex justify-center md:justify-start">
                <div className="section-tag mb-6 md:mb-8">
                  <ZapIcon size={13} />
                  Resultados que hablan
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-5 flex-grow">
                {stats.map(stat => (
                  <div
                    key={stat.label}
                    className="p-5 md:p-8 rounded-3xl border border-neutral-100 bg-white shadow-soft hover:shadow-card hover:border-brand-200 transition-all duration-300 group flex flex-col justify-between h-full"
                  >
                    {stat.icon && (
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          stat.color === 'brand' 
                            ? 'bg-brand-50 text-brand-600 border border-brand-100/50' 
                            : 'bg-accent-50 text-accent-600 border border-accent-100/50'
                        }`}>
                          {stat.icon}
                        </div>
                      </div>
                    )}
                    <div className={stat.fullText ? 'text-center flex flex-col items-center justify-center h-full' : ''}>
                      {stat.fullText ? (
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[12px] font-semibold text-neutral-400 uppercase tracking-widest">Trabajamos con</span>
                          <span className="text-[44px] sm:text-[52px] md:text-[56px] font-extrabold leading-none tracking-tight text-gradient">TODAS</span>
                          <span className="text-[12px] font-semibold text-neutral-400 uppercase tracking-widest">las compañías</span>
                        </div>
                      ) : (
                        <>
                          <div className="text-[34px] sm:text-[38px] md:text-[44px] font-extrabold text-neutral-900 leading-none tracking-tight mb-2 group-hover:text-brand-600 transition-colors duration-300">
                            {stat.value}
                          </div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-400">
                            {stat.label}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Copy */}
            <div className="md:pt-16 text-center md:text-left">
              <h2 className="text-[38px] font-extrabold text-neutral-900 leading-[1.1] tracking-tight mb-6 text-center md:text-left">
                Energía gestionada.<br />
                <span className="text-gradient">Facturas reducidas.</span>
              </h2>
              <div className="space-y-5 text-[15px] text-neutral-500 leading-[1.8] text-center md:text-left">
                <p>
                  Somos una gestoría energética independiente. No cobramos al cliente porque nuestra
                  retribución proviene de las compañías, lo que nos permite ser completamente objetivos
                  al comparar tarifas.
                </p>
                <p>
                  Trabajamos con <strong className="font-semibold text-neutral-700">Endesa, Naturgy, Iberdrola,
                  Repsol y TotalEnergies</strong>. Comparamos en tiempo real sus condiciones para
                  encontrar la tarifa que realmente se adapta a tu consumo, no la que más les conviene
                  a ellos.
                </p>
                <p>
                  Al año de tu contratación, te llamamos proactivamente para revisar si han surgido
                  mejores condiciones. <strong className="font-semibold text-neutral-700">Tu ahorro no
                  termina en el primer cambio.</strong>
                </p>
              </div>
              <div className="mt-9 flex justify-center md:justify-start">
                <PhoneCTA id="why-us-cta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-8 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <div className="section-tag-accent mb-5">
                <ZapIcon size={13} />
                Gestiones sin coste
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-center md:text-left">
              <h2 className="text-[38px] font-extrabold text-neutral-900 leading-[1.1] tracking-tight max-w-md mx-auto md:mx-0">
                ¿En qué podemos <span className="text-gradient">ayudarte?</span>
              </h2>
              <Link
                href="/soluciones"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors group shrink-0 w-full md:w-auto"
              >
                Ver todas las soluciones
                <span className="transition-transform group-hover:translate-x-1 duration-200">
                  <ArrowRightIcon size={14} />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <Link
                key={s.title}
                href={s.href}
                className={`group relative flex flex-col justify-between p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                  s.highlight
                    ? 'bg-white border-brand-200 hover:border-brand-400'
                    : 'bg-white border-neutral-100 hover:border-neutral-200'
                }`}
              >
                {s.highlight && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.08em] text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">
                    Más solicitado
                  </span>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 mb-5 group-hover:bg-brand-50 group-hover:border-brand-100 group-hover:text-brand-600 transition-all duration-300">
                    {s.icon}
                  </div>

                  {/* Category */}
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-neutral-400 mb-2">
                    {s.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold text-neutral-900 mb-3 leading-snug">
                    {s.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-[13.5px] text-neutral-500 leading-[1.7]">
                    {s.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-6 text-[13px] font-semibold text-brand-600 group-hover:gap-2.5 transition-all duration-200">
                  Más información
                  <ArrowRightIcon size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ───────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-tag mb-5 mx-auto">
              Proceso
            </div>
            <h2 className="text-[38px] font-extrabold text-neutral-900 leading-[1.1] tracking-tight max-w-lg mx-auto">
              Empezar a <span className="text-gradient">ahorrar</span> es más fácil de lo que crees
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
            {/* Línea conectora desktop */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-neutral-100 z-0" />

            {steps.map((step, i) => (
              <div key={step.number} className="relative p-8 z-10">
                {/* Número grande watermark */}
                <div
                  className="text-[80px] font-extrabold leading-none mb-4 select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.5px',
                    WebkitTextStrokeColor: '#1A5FAD',
                  }}
                >
                  {step.number}
                </div>

                <h3 className="text-[17px] font-bold text-neutral-900 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-neutral-500 leading-[1.75]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA bajo el proceso */}
          <div className="mt-14 flex flex-col items-center gap-3">
            <PhoneCTA id="process-cta" className="items-center" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-8 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
        {/* Orbs decorativos */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-500/8 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-14 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-neutral-500">
                  Experiencias reales
                </span>
              </div>
            </div>
            <h2 className="text-[38px] font-extrabold text-white leading-[1.1] tracking-tight max-w-md mx-auto md:mx-0">
              Lo que dicen nuestros <span className="text-gradient">clientes</span>
            </h2>
            {/* Indicador de reseñas de Google – solo móvil */}
            <div className="flex items-center gap-2 mt-4 justify-center md:hidden">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
              </svg>
              <span className="text-[11px] text-neutral-400 font-medium">Reseñas reales de Google · 5 ★ todas</span>
            </div>
          </div>

          {/* Wrapper scroll – mismo comportamiento en móvil y desktop */}
          <div className="relative">

            {/* Flechas de navegación (Client Component) */}
            <TestimonialsScroll />

            {/* Scroll horizontal – móvil y desktop */}
            <div
              id="testimonials-scroll"
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar -mx-6 px-[10vw] sm:px-[20vw] md:mx-0 md:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name + i}
                  className="flex flex-col justify-between p-7 rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700 transition-colors duration-300 snap-center md:snap-start shrink-0 w-[80vw] sm:w-[60vw] md:w-[440px]"
                >
                  {/* Comilla + estrellas */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="text-[56px] font-extrabold leading-none select-none"
                      style={{ color: '#f4a261', lineHeight: '0.75' }}
                    >
                      "
                    </div>
                    {/* Estrellas */}
                    <div className="flex gap-0.5 pt-1">
                      {[...Array(t.stars)].map((_, si) => (
                        <svg key={si} width="13" height="13" viewBox="0 0 24 24" fill="#f4a261">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-[14px] text-neutral-300 leading-[1.8] mb-6 flex-grow">
                    {t.quote}
                  </p>

                  <div className="border-t border-neutral-800 pt-4">
                    <div className="text-[13px] font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">Reseña verificada · Google</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Triángulo indicador de scroll – móvil */}
            <div
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-0 h-0 animate-bounce"
                style={{
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: '16px solid #f4a261',
                  filter: 'drop-shadow(0 0 6px rgba(244,162,97,0.7))',
                }}
              />
              <span className="text-[9px] font-bold uppercase tracking-widest text-accent-400 mt-1">más</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-8 bg-white border-t border-neutral-100 relative overflow-hidden">
        {/* Elemento decorativo */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden md:block"
          style={{
            background: 'linear-gradient(to left, rgba(26,95,173,0.03) 0%, transparent 100%)',
          }}
        />
        <div className="absolute top-8 right-8 w-64 h-64 rounded-full bg-accent-400/5 blur-3xl pointer-events-none hidden md:block" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-2 mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                    Lun–Vie · 8:00–20:00 · Gratuito
                  </span>
                </div>
              </div>
              <h2 className="text-[44px] md:text-[52px] font-extrabold text-neutral-900 leading-[1.06] tracking-tight mb-6">
                Paga menos por<br />
                <span className="text-gradient">la misma luz.</span>
              </h2>
              <p className="text-[16px] text-neutral-500 leading-[1.8] max-w-sm mx-auto md:mx-0 mb-10">
                Una llamada y nuestro equipo analiza tu situación sin compromiso.
                Sin permanencia. Sin comisiones ocultas.
              </p>
              <div className="flex justify-center md:justify-start">
                <PhoneCTA id="final-cta-phone" />
              </div>
            </div>

            {/* Panel de contact info */}
            <div
              className="rounded-2xl border border-neutral-100 p-8"
              style={{ background: 'linear-gradient(145deg, #f8f9fb 0%, #ffffff 100%)' }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0 mt-0.5">
                    <PhoneIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-neutral-400 mb-1">
                      Llámanos
                    </div>
                    <a
                      href="tel:+34854615199"
                      className="text-[22px] font-extrabold text-neutral-900 tracking-tight hover:text-brand-600 transition-colors duration-200"
                    >
                      854 615 199
                    </a>
                    <p className="text-[12px] text-neutral-400 mt-0.5">Atención inmediata, sin esperas</p>
                  </div>
                </div>

                <div className="h-px bg-neutral-100" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 border border-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-neutral-400 mb-1">
                      Escríbenos
                    </div>
                    <a
                      href="mailto:info@activaasesores.com"
                      className="text-[15px] font-semibold text-neutral-700 hover:text-brand-600 transition-colors duration-200"
                    >
                      info@activaasesores.com
                    </a>
                    <p className="text-[12px] text-neutral-400 mt-0.5">Respondemos en menos de 24h</p>
                  </div>
                </div>

                <div className="h-px bg-neutral-100" />

                <div className="flex flex-wrap gap-2 pt-1">
                  {['Sin permanencia', 'Asesoría independiente', '€0 de coste'].map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
