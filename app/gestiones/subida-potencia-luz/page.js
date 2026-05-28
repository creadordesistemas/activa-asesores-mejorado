import Link from 'next/link';

export const metadata = {
  title: 'Subir o Bajar la Potencia Contratada | Activa Asesores',
  description:
    '¿Saltan tus plomos o pagas de más? Calculamos tu potencia contratada recomendada y gestionamos el ajuste gratis ante la distribuidora de luz.',
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

export default function SubidaPotenciaLuzPage() {
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
              Subida de{' '}<span className="text-gradient">Potencia de Luz</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              ¿Saltan constantemente los plomos cuando enciendes la lavadora y el horno a la vez? Te asesoramos en la potencia óptima para tu hogar y tramitamos el cambio ante la distribuidora de forma gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cuándo y cómo subir la potencia contratada?</h2>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                La potencia contratada (medida en kW) es el límite de electricidad simultánea que puede absorber tu instalación. Si enciendes varios electrodomésticos de alto consumo a la vez y superas el límite, el Interruptor de Control de Potencia (ICP) de tu contador inteligente corta el suministro.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                Antes de subir la potencia, es vital calcular si realmente necesitas más kW o si un reajuste en tus hábitos de consumo o de tarifas evitaría pagar más en tu término fijo de la factura.
              </p>
              <div className="space-y-4">
                <Link href="/energia/calculadora-potencia-luz" className="btn-secondary inline-flex text-xs py-3">
                  Calcular mi potencia recomendada en segundos
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-neutral-100 p-8 shadow-soft space-y-6">
              <h3 className="font-bold text-xl text-neutral-900">Requisitos para subir la potencia</h3>
              <ul className="space-y-4">
                {[
                  'Código CUPS de tu suministro.',
                  'Datos personales del titular del contrato.',
                  'Boletín Eléctrico (CIE) en vigor. Si la potencia solicitada supera el límite máximo de tu boletín actual o si este tiene más de 20 años, la distribuidora solicitará un nuevo boletín técnico.',
                  'Número de cuenta bancaria (IBAN) para la domiciliación.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                    <span className="text-brand-500 mt-0.5 shrink-0"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulated costs info */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cuánto cuesta modificar la potencia de luz?</h2>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Las distribuidoras aplican tarifas reguladas por el Estado que se facturan en tu siguiente recibo por cada kW modificado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-neutral-50 border border-neutral-100 rounded-2xl">
              <h4 className="font-bold text-neutral-900 text-sm mb-2">Coste por Subir de Potencia</h4>
              <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                Se pagan derechos de extensión (~17,37 € por cada kW aumentado) y derechos de acceso (~19,70 € por cada kW aumentado), además de los derechos de enganche (~9,04 €).
              </p>
              <span className="font-mono text-xs font-bold text-brand-600">Coste medio por kW extra: ~45€</span>
            </div>
            <div className="p-6 bg-neutral-50 border border-neutral-100 rounded-2xl">
              <h4 className="font-bold text-neutral-900 text-sm mb-2">Coste por Bajar de Potencia</h4>
              <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                Bajar la potencia es mucho más económico. Únicamente se abonan los derechos de enganche regulados para reconfigurar el contador digital de forma remota.
              </p>
              <span className="font-mono text-xs font-bold text-brand-600">Coste de enganche único: ~9,04 € + IVA</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950 text-white border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Evita cortes de luz inesperados y optimiza tu factura</h2>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
            De lunes a viernes de 8:00 a 20:00. Un especialista de Activa Asesores gestionará el cambio de potencia de tu contrato de forma rápida y 100% gratuita.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+34854615199" className="btn-primary w-full sm:w-auto justify-center px-8 py-4 text-base">
              Llamar gratis
            </a>
            <Link href="/contacto" className="text-white hover:underline font-bold py-2">
              Solicitar estudio de potencia gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
