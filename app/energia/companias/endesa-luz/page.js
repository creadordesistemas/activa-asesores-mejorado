import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Tarifas de Luz de Endesa más Baratas | Activa Asesores',
  description:
    'Comparamos las mejores tarifas de Endesa (One Luz, Tempo, Solar) y gestionamos tu cambio de titular o alta gratis. ¡Ahorra en tu factura hoy!',
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
  { title: 'Tarifa One Luz', desc: 'Precio fijo por el kWh consumido las 24 horas del día. Ideal para familias que buscan estabilidad sin depender del reloj.' },
  { title: 'Tarifa Tempo Happy', desc: 'Permite elegir horas de consumo gratuito a la semana o al mes. Perfecta si concentras tu gasto los fines de semana.' },
  { title: 'Tarifa Solar Simply', desc: 'Tarifa especial para viviendas equipadas con placas solares, con excelentes condiciones de compensación de excedentes.' },
];

const extraServices = [
  { name: 'OK Luz Assist', desc: 'Servicio de mantenimiento y asistencia técnica 24/7 para solventar cualquier avería en tu red eléctrica.' },
  { name: 'Autoconsumo Endesa X', desc: 'Solución integral de diseño, instalación y legalización de paneles solares para hogares.' },
  { name: 'Protección 360', desc: 'Seguro para imprevistos en los pagos de facturas con coberturas de reparaciones integrales.' },
];

export default function EndesaLuzPage() {
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
                  src="/companias/logo-endesa.webp"
                  alt="Endesa"
                  width={200}
                  height={112}
                  className="h-12 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-[60px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight">
                  Endesa Luz
                </h1>
                <p className="text-gradient text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-1">
                  Tarifas y Gestiones
                </p>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl">
              Explora las tarifas eléctricas y servicios de Endesa. En Activa Asesores realizamos un estudio comparativo e independiente de tus facturas de Endesa y gestionamos tus trámites sin coste alguno.
            </p>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Endesa España</div>
            <h2 className="section-title">¿Por qué elegir Endesa para tu suministro?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tarifas Personalizadas', desc: 'Dispone de planes fijos, de discriminación horaria y especiales de autoconsumo.' },
              { title: 'Atención al Cliente', desc: 'Servicio oficial de soporte técnico y comercial disponible a nivel nacional.' },
              { title: 'Energía Sostenible', desc: 'Gran parte de su mix eléctrico procede de energías de bajas emisiones y renovables.' },
              { title: 'Gestión por App', desc: 'Área de cliente digital para verificar tus lecturas y consumos históricos.' },
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
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Tarifas de Endesa Destacadas</h2>
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
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Servicios Adicionales de Endesa</h2>
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
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cómo contratar o gestionar tu tarifa de Endesa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <span className="text-brand-600 font-bold text-lg block mb-2">01</span>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">Analizamos tu consumo</h4>
              <p className="text-neutral-500 text-xs">Evaluamos tu factura de Endesa actual para ver si pagas recargos de potencia o servicios innecesarios.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <span className="text-brand-600 font-bold text-lg block mb-2">02</span>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">Comparamos precios</h4>
              <p className="text-neutral-500 text-xs">Cruzamos tus datos con otras tarifas de Endesa y de la competencia para garantizarte el mayor ahorro.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100">
              <span className="text-brand-600 font-bold text-lg block mb-2">03</span>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">Tramitamos gratis</h4>
              <p className="text-neutral-500 text-xs">Gestionamos tu cambio de titular o alta en Endesa de forma 100% gratuita y sin burocracia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber si tu tarifa de Endesa es la mejor?</h2>
          <span className="block sm:hidden text-accent-400 font-extrabold text-lg mb-2 tracking-wide">
            ¡Infórmate!
          </span>
          <p className="text-neutral-400 text-sm mb-6 md:mb-8 leading-relaxed">
            Te asesoramos gratis. Analizamos si pagas de más por kW o si tienes servicios extras activos que no utilizas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="btn-primary w-full sm:w-auto justify-center">
              <ZapIcon size={16} />
              Revisar factura de Endesa gratis
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
