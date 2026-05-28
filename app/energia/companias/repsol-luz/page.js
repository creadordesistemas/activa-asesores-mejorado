import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Tarifas de Luz de Repsol más Baratas | Activa Asesores',
  description:
    'Comparamos los planes de luz de Repsol (Ahorro, Precio Fijo) para conseguir la tarifa más económica. Gestión gratuita de contratos y titularidad.',
};

const ZapIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);
const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.91-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const tariffs = [
  { title: 'Tarifa Ahorro Luz', desc: 'Tarifa básica con precio fijo por kWh durante las 24 horas. Evita sorpresas y ofrece un coste estable de energía.' },
  { title: 'Tarifa Discriminación Horaria', desc: 'Precios regulados con diferencias en tres franjas de horas (punta, llano y valle). Ahorra si concentras consumos de noche.' },
  { title: 'Tarifa Plana Repsol', desc: 'Permite pagar una cuota mensual invariable adaptada a tus necesidades, calculada a partir de tu histórico anual.' },
];

const extraServices = [
  { name: 'Tu Asistente 24h', desc: 'Servicio de reparaciones rápidas de fontanería, electricidad y cerrajería en el hogar.' },
  { name: 'Solar360 Repsol', desc: 'Asesoramiento para instalaciones compartidas o individuales de placas solares de última generación.' },
  { name: 'Descuentos Waylet', desc: 'Beneficios y ahorros directos en carburantes en estaciones Repsol al vincular tus contratos de luz.' },
];

export default function RepsolLuzPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg pt-32 pb-20 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-brand-200/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6">
            <Link href="/energia" className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700">
              <ArrowLeftIcon />
              Compañías de Luz
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              {/* Logo transparente */}
              <div className="shrink-0">
                <Image
                  src="/companias/logo-repsol.webp"
                  alt="Repsol"
                  width={200}
                  height={112}
                  className="h-12 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-[60px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight">
                  Repsol Luz
                </h1>
                <p className="text-gradient text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-1">
                  Tarifas y Gestiones
                </p>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl">
              Explora las tarifas eléctricas y servicios de Repsol. En Activa Asesores analizamos de forma independiente tu factura de Repsol y gestionamos tus trámites de forma totalmente gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Repsol España</div>
            <h2 className="section-title">¿Por qué elegir Repsol para tu suministro?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Ahorro Multiproducto', desc: 'Descuentos cruzados en gasolineras Repsol y otros servicios al agrupar energía.' },
              { title: 'Soporte Completo', desc: 'Red comercial amplia y atención al cliente telefónica y presencial rápida.' },
              { title: 'Compromiso Sostenible', desc: 'Inversión constante en parques eólicos e hidráulicos para un suministro verde.' },
              { title: 'App Waylet Integrada', desc: 'Gestiona tu saldo acumulado de carburante y paga tus facturas desde el móvil.' },
            ].map(b => (
              <div key={b.title} className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft text-center">
                <h4 className="font-bold text-neutral-900 text-sm mb-2">{b.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs & Extra Services */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Tariffs */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Tarifas de Repsol Destacadas</h2>
              <div className="space-y-4">
                {tariffs.map(t => (
                  <div key={t.title} className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <h3 className="font-bold text-neutral-900 text-base mb-1">{t.title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Services */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Servicios Adicionales de Repsol</h2>
              <div className="space-y-4">
                {extraServices.map(s => (
                  <div key={s.name} className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <h3 className="font-bold text-neutral-900 text-base mb-1">{s.name}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cómo contratar o gestionar tu tarifa de Repsol?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <span className="text-brand-600 font-bold text-lg block mb-2">01</span>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">Analizamos tu consumo</h4>
              <p className="text-neutral-500 text-xs">Evaluamos tu factura de Repsol para confirmar si acumulas descuentos Waylet correctamente y si tu tarifa es óptima.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <span className="text-brand-600 font-bold text-lg block mb-2">02</span>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">Comparamos precios</h4>
              <p className="text-neutral-500 text-xs">Cruzamos tus datos con tarifas alternativas de Repsol y competidores para asegurar el máximo ahorro.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <span className="text-brand-600 font-bold text-lg block mb-2">03</span>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">Te ayudamos gratis</h4>
              <p className="text-neutral-500 text-xs">Gestionamos cualquier cambio de titular o alta en Repsol de forma gratuita y sin interrupciones en tu suministro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber si tu tarifa de Repsol es la mejor?</h2>
          <span className="block sm:hidden text-accent-400 font-extrabold text-lg mb-2 tracking-wide">
            ¡Infórmate!
          </span>
          <p className="text-neutral-400 text-sm mb-6 md:mb-8 leading-relaxed">
            Te asesoramos gratis. Analizamos si pagas de más por kW o si tienes servicios extras activos que no utilizas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="btn-primary w-full sm:w-auto justify-center">
              <ZapIcon size={16} />
              Revisar factura de Repsol gratis
            </Link>
            <a href="tel:+34854615199" className="btn-accent w-full sm:w-auto justify-center">
              <PhoneIcon size={16} />
              Llamar gratis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
