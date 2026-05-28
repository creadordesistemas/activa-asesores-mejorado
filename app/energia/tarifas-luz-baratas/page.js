import Link from 'next/link';

export const metadata = {
  title: 'Tarifas de Luz más Baratas en 2026 | Activa Asesores',
  description:
    'Compara las tarifas de luz más baratas del mercado. Analizamos gratis Iberdrola, Endesa, Naturgy, Repsol y TotalEnergies para que ahorres al máximo.',
};

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ZapIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const tariffs = [
  {
    company: 'Iberdrola',
    logoUrl: '/companias/logo-iberdrola.webp',
    title: 'Tarifa Iberahorro Plus',
    features: ['Sin permanencia', 'Energía 100% verde', 'Precios fijos sin sorpresas'],
    price: '37,62 €',
    period: 'mes (estimado)',
    badge: 'Más Económica',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    company: 'Naturgy',
    logoUrl: '/companias/logo-naturgy.webp',
    title: 'Tarifa Compromiso',
    features: ['Sin permanencia', 'Precios fijos garantizados', 'Descuentos exclusivos'],
    price: '39,39 €',
    period: 'mes (estimado)',
    badge: 'Recomendada',
    badgeColor: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    company: 'Endesa',
    logoUrl: '/companias/logo-endesa.webp',
    title: 'Tarifa One',
    features: ['Sin permanencia', 'Factura 100% digital', 'Asesoramiento energético'],
    price: '41,23 €',
    period: 'mes (estimado)',
  },
];

export default function TarifasLuzBaratasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-24 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag mb-6">
              <ZapIcon size={14} />
              Comparador Tarifario 2026
            </div>
            <h1 className="text-[56px] md:text-[72px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6">
              Tarifas de Luz{' '}<span className="text-gradient">Más Baratas 2026</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              ¿Quieres recortar tu factura eléctrica? En Activa Asesores comparamos las mejores tarifas del mercado de forma independiente. Encuentra la opción que mejor encaja con tus hábitos y ahorra mes a mes.
            </p>
          </div>
        </div>
      </section>

      {/* Tariffs List */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Mejores Tarifas de Luz Vigentes</h2>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto">
              Selección basada en un consumo medio mensual de **200 kWh** y una potencia contratada de **3,45 kW**. Si tu perfil de consumo es diferente, llámanos para recalcular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map(t => (
              <div key={t.company} className="card-base flex flex-col justify-between relative hover:border-brand-200">
                {t.badge && (
                  <span className={`absolute top-5 right-5 text-[10px] font-bold border px-2.5 py-1 rounded-full ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                )}
                <div>
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white border border-neutral-100 rounded-2xl flex items-center justify-center p-2.5 mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img
                      src={t.logoUrl}
                      alt={t.company}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{t.title}</h3>
                  <p className="text-xs text-brand-600 font-semibold mb-6">{t.company}</p>

                  <ul className="space-y-3 mb-8">
                    {t.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-600">
                        <span className="text-brand-500 mt-0.5 shrink-0"><CheckIcon /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-neutral-100">
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-neutral-900">{t.price}</span>
                    <span className="text-xs text-neutral-400"> / {t.period}</span>
                  </div>
                  <a href="tel:+34854615199" className="btn-primary w-full justify-center text-sm py-3.5">
                    Contratar gratis
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide / Advice */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cómo elegir la mejor tarifa de luz?</h2>
              <p className="text-neutral-500 leading-relaxed mb-8 text-sm">
                No existe una única tarifa perfecta para todo el mundo. El precio depende directamente de cuándo consumas electricidad y de cuánta potencia necesiten tus electrodomésticos en marcha.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Analiza tu consumo real', desc: 'Revisa tus facturas o simula tus costes con nuestra calculadora de consumo para conocer tus hábitos.' },
                  { title: 'Compara precios por término de energía', desc: 'El precio del kWh consumido determina la parte variable de tu factura. Asegúrate de que no incluya márgenes ocultos.' },
                  { title: 'Evita penalizaciones y permanencias', desc: 'Elige siempre tarifas libres de permanencia que te permitan cambiarte si el mercado eléctrico baja.' },
                  { title: 'Ajusta tu potencia contratada', desc: 'No pagues por potencia sobrante que encarece el término fijo del recibo sin aportar valor real.' },
                ].map((item, idx) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-4xl p-8 border border-neutral-100">
              <h3 className="font-bold text-xl text-neutral-900 mb-4">¿Te ayudamos a elegir de forma personalizada?</h3>
              <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                En lugar de adivinar, sube una foto de tu última factura. Nuestro equipo calculará de forma independiente el ahorro que obtendrías con cada tarifa en menos de 24h.
              </p>
              <div className="space-y-4">
                <Link href="/contacto" className="btn-primary w-full justify-center py-4">
                  <ZapIcon size={16} />
                  Estudio de ahorro gratuito
                </Link>
                <a href="tel:+34854615199" className="btn-secondary w-full justify-center py-4 text-neutral-700 font-bold">
                  Llamar gratis
                </a>
              </div>
              <p className="text-center text-[10px] text-neutral-400 mt-4">
                Horario: Lunes a viernes de 8:00 a 20:00 (Llamada ininterrumpida)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
