import Link from 'next/link';

export const metadata = {
  title: 'Cómo Entender la Factura de la Luz | Activa Asesores',
  description:
    'Guía práctica para descifrar tu recibo eléctrico. Aprende qué pagas por potencia contratada, consumo e impuestos y reduce tu factura de luz ya.',
};

const LightbulbIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6m-6-3h6m-7-4a5 5 0 1 1 8 0c0 2-3 3-3 3H9s-3-1-3-3z"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const concepts = [
  {
    title: 'Término de Potencia Contratada',
    desc: 'Es el coste fijo mensual que pagas por tener disponibilidad eléctrica, medido en kilovatios (kW). Determina cuántos electrodomésticos puedes encender al mismo tiempo sin que salte el diferencial (los "plomos"). Si tienes más kW de los que realmente necesitas, estás pagando de más innecesariamente.',
    actionText: 'Optimizar Potencia',
    actionHref: '/energia/calculadora-potencia-luz',
  },
  {
    title: 'Término de Consumo de Energía',
    desc: 'Es la parte variable basada en la cantidad de kilovatios-hora (kWh) que consumes durante el periodo de facturación. Su coste final depende de tus hábitos y del precio estipulado por kWh en tu tarifa contratada.',
    actionText: 'Simular Consumo',
    actionHref: '/energia/calculadora-consumo-luz',
  },
  {
    title: 'Impuesto Eléctrico',
    desc: 'Un impuesto especial regulado por el gobierno que se aplica tanto al término de potencia como al de consumo de la factura de luz. Se sitúa en torno al 5,11% (o mínimos regulados), sumándose antes de aplicar el IVA general.',
    actionText: 'Comparar Tarifas',
    actionHref: '/energia/tarifas-luz-baratas',
  },
  {
    title: 'Alquiler del Contador',
    desc: 'Un coste obligatorio regulado que pagas a la distribuidora de tu zona a través de tu comercializadora. Generalmente ronda los 0,81 € al mes para contadores inteligentes monofásicos.',
  },
  {
    title: 'Otros Servicios y Seguros',
    desc: 'Muchas comercializadoras adjuntan sutilmente servicios de mantenimiento o urgencias que inflan el coste mensual entre 3€ y 10€. Estos servicios suelen ser innecesarios y se pueden cancelar para ahorrar.',
  },
];

export default function FacturaLuzPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-24 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/energia" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-brand-600 mb-8 transition-colors">
            <ArrowLeftIcon /> Volver a Energía
          </Link>
          <div className="max-w-3xl">
            <div className="section-tag mb-6">
              <LightbulbIcon size={14} />
              Guía práctica
            </div>
            <h1 className="text-[56px] md:text-[72px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6">
              Entiende y optimiza{' '}<span className="text-gradient">tu factura de la luz</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              ¿Te cuesta descifrar los cargos mensuales de tu factura? En Activa Asesores te enseñamos a desglosar los conceptos clave para que identifiques exactamente dónde puedes ahorrar en tu recibo eléctrico.
            </p>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Desglose de conceptos</div>
            <h2 className="section-title">Conceptos clave de tu factura eléctrica</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Cada recibo de luz en España se divide en varias partes fundamentales. Conocerlas es la clave para reducir tus gastos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concepts.map(concept => (
              <div key={concept.title} className="card-base flex flex-col justify-between hover:border-brand-200">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">{concept.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-6">{concept.desc}</p>
                </div>
                {concept.actionHref && (
                  <Link href={concept.actionHref} className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700">
                    {concept.actionText} <span className="text-[10px]">→</span >
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actionable Advice */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">¿Cómo optimizar tu factura de la luz?</h2>
            <p className="text-sm text-neutral-500 mt-3">Sigue estas directrices prácticas recomendadas por nuestros asesores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Ajusta tu potencia contratada</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Si nunca te han saltado los plomos, es probable que tengas contratada una potencia superior a la requerida. Bajar un solo tramo de potencia (ej. de 4.6 kW a 3.45 kW) puede ahorrarte más de 60€ al año.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Elige la tarifa adecuada a tus horarios</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Si pasas el día fuera de casa y concentras el uso de lavadoras y calefacción en horario nocturno o de mañana, una tarifa con discriminación horaria te permitirá abaratar costes notablemente.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Elimina los servicios adicionales</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Revisa las últimas páginas de tu factura. Si encuentras conceptos como "Servicio de urgencias eléctricas" o "Seguro de pagos", solicita su cancelación de inmediato. No son obligatorios por ley.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 font-bold flex items-center justify-center shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Invierte en bombillas LED y eficiencia</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Sustituir la iluminación tradicional por bombillas LED y utilizar electrodomésticos con etiquetas energéticas de alta calificación (A) reduce el consumo de kWh de forma pasiva a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">¿Te resulta complejo? Deja que nosotros lo analicemos por ti</h2>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
            Envíanos una copia de tu última factura a través de nuestro formulario de contacto. Realizaremos una auditoría detallada de forma 100% gratuita para detectar dónde puedes ahorrar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="btn-primary w-full sm:w-auto justify-center px-8 py-4 text-base">
              <LightbulbIcon />
              Subir factura para estudio gratis
            </Link>
            <a href="tel:+34854615199" className="text-white hover:underline font-bold py-2">
              Llámanos gratis: 854 615 199
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
