'use client';

import { useState } from 'react';
import Link from 'next/link';

// Icons
const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const ZapIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);

const RefrigeratorIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="9" y1="6" x2="9" y2="8" />
    <line x1="9" y1="15" x2="9" y2="18" />
  </svg>
);

const LightbulbIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </svg>
);

const WashingMachineIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <circle cx="12" cy="13" r="5" />
    <circle cx="12" cy="13" r="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="18" y1="6" x2="18.01" y2="6" />
  </svg>
);

const DishwasherIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="9" y1="5" x2="15" y2="5" />
    <circle cx="8" cy="14" r="1.5" />
    <circle cx="16" cy="14" r="1.5" />
    <path d="M12 12v4" />
  </svg>
);

const OvenIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <rect x="6" y="8" width="12" height="10" rx="1" />
    <line x1="6" y1="5" x2="8" y2="5" />
    <line x1="11" y1="5" x2="13" y2="5" />
    <line x1="16" y1="5" x2="18" y2="5" />
  </svg>
);

const CooktopIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="16" r="3" />
    <circle cx="8" cy="16" r="2.5" />
    <circle cx="16" cy="8" r="2.5" />
  </svg>
);

const MicrowaveIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <rect x="4" y="7" width="11" height="10" rx="1" />
    <circle cx="18" cy="8" r="1" />
    <circle cx="18" cy="12" r="1" />
    <circle cx="18" cy="16" r="1" />
  </svg>
);

const AirConditionerIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="10" rx="2" />
    <line x1="6" y1="14" x2="8" y2="18" />
    <line x1="12" y1="14" x2="12" y2="19" />
    <line x1="18" y1="14" x2="16" y2="18" />
    <line x1="7" y1="9" x2="17" y2="9" />
  </svg>
);

const HeaterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="7" y1="7" x2="7" y2="17" />
    <line x1="11" y1="7" x2="11" y2="17" />
    <line x1="15" y1="7" x2="15" y2="17" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

const DryerIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <circle cx="12" cy="13" r="5" />
    <path d="M12 10a3 3 0 0 1 2 2.5" />
    <line x1="6" y1="6" x2="18" y2="6" />
  </svg>
);

const BoilerIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 2h10a2 2 0 0 1 2 2v14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2z" />
    <line x1="12" y1="6" x2="12" y2="8" />
    <circle cx="12" cy="14" r="2" />
    <line x1="9" y1="22" x2="9" y2="24" />
    <line x1="15" y1="22" x2="15" y2="24" />
  </svg>
);

const PcTvIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="13" rx="2" />
    <line x1="12" y1="16" x2="12" y2="21" />
    <line x1="8" y1="21" x2="16" y2="21" />
  </svg>
);

const APPLIANCES = [
  { id: 'nevera', name: 'Nevera / Congelador', power: 0.35, alwaysOn: true, icon: <RefrigeratorIcon /> },
  { id: 'iluminacion', name: 'Iluminación básica (LED)', power: 0.25, alwaysOn: true, icon: <LightbulbIcon /> },
  { id: 'lavadora', name: 'Lavadora', power: 2.2, alwaysOn: false, icon: <WashingMachineIcon /> },
  { id: 'lavavajillas', name: 'Lavavajillas', power: 1.8, alwaysOn: false, icon: <DishwasherIcon /> },
  { id: 'horno', name: 'Horno eléctrico', power: 2.0, alwaysOn: false, icon: <OvenIcon /> },
  { id: 'vitro', name: 'Vitrocerámica / Inducción', power: 1.8, alwaysOn: false, icon: <CooktopIcon /> },
  { id: 'microondas', name: 'Microondas', power: 0.8, alwaysOn: false, icon: <MicrowaveIcon /> },
  { id: 'aire', name: 'Aire acondicionado', power: 1.5, alwaysOn: false, icon: <AirConditionerIcon /> },
  { id: 'calefaccion', name: 'Calefacción eléctrica / Radiador', power: 2.0, alwaysOn: false, icon: <HeaterIcon /> },
  { id: 'secadora', name: 'Secadora', power: 2.0, alwaysOn: false, icon: <DryerIcon /> },
  { id: 'termo', name: 'Termo eléctrico (agua caliente)', power: 1.5, alwaysOn: false, icon: <BoilerIcon /> },
  { id: 'pc', name: 'Ordenador / TV / Consola', power: 0.4, alwaysOn: false, icon: <PcTvIcon /> },
];

const STANDARD_POWERS = [2.3, 3.45, 4.6, 5.75, 6.9, 8.05, 9.2];

export default function CalculadoraPotenciaPage() {
  const [selected, setSelected] = useState(
    APPLIANCES.filter(a => a.alwaysOn).map(a => a.id)
  );
  const [simultaneity, setSimultaneity] = useState(0.45); // Coeficiente de simultaneidad medio

  const handleToggle = (id) => {
    const item = APPLIANCES.find(a => a.id === id);
    if (item?.alwaysOn) return; // Never disable always-on items
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Calculate sum of powers
  const activeAppliances = APPLIANCES.filter(a => selected.includes(a.id));
  const sumPower = activeAppliances.reduce((sum, a) => sum + a.power, 0);

  // Simultaneity formula: (sum of active temporary appliances) * coeff + sum of alwaysOn
  const tempAppliances = activeAppliances.filter(a => !a.alwaysOn);
  const alwaysOnAppliances = activeAppliances.filter(a => a.alwaysOn);
  const tempPower = tempAppliances.reduce((sum, a) => sum + a.power, 0);
  const alwaysOnPower = alwaysOnAppliances.reduce((sum, a) => sum + a.power, 0);

  const calculatedPower = parseFloat((tempPower * simultaneity + alwaysOnPower).toFixed(2));

  // Find recommended standard power
  const recommendedStandard = STANDARD_POWERS.find(p => p >= calculatedPower) || 9.2;

  return (
    <>
      <section className="relative overflow-hidden gradient-bg pt-36 pb-20 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/energia" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-brand-600 mb-8 transition-colors">
            <ArrowLeftIcon /> Volver a Energía
          </Link>
          <div className="max-w-3xl">
            <div className="section-tag-accent mb-6">
              <ZapIcon size={14} />
              Herramienta gratuita
            </div>
            <h1 className="text-[56px] md:text-[72px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-6">
              Calculadora de{' '}<span className="text-gradient">Potencia Eléctrica</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              Descubre qué potencia de luz contratada necesitas para tu hogar. Evita pagar de más en el término fijo de tu factura seleccionando tus electrodomésticos habituales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left side: Appliance selector */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-100 p-8 shadow-soft">
              <h2 className="text-xl font-bold text-neutral-900 mb-2">1. Selecciona tus electrodomésticos</h2>
              <p className="text-xs text-neutral-400 mb-6">
                Marca los dispositivos que utilizas en tu día a día en casa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {APPLIANCES.map(a => {
                  const isChecked = selected.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => handleToggle(a.id)}
                      className={`group flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 ${
                        isChecked
                          ? 'border-brand-500 bg-brand-50/30 shadow-soft'
                          : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50'
                      } ${a.alwaysOn ? 'cursor-default opacity-90' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isChecked 
                            ? 'bg-brand-100 text-brand-700' 
                            : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200/80 group-hover:text-neutral-700'
                        }`}>
                          {a.icon}
                        </div>
                        <div>
                          <div className="text-[13.5px] font-bold text-neutral-800 leading-snug">{a.name}</div>
                          <div className="text-xs font-semibold text-neutral-400 mt-0.5">{a.power} kW</div>
                        </div>
                      </div>
                      {a.alwaysOn ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-100/50">
                          Fijo
                        </span>
                      ) : (
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isChecked 
                            ? 'bg-brand-500 border-brand-500 text-white scale-110 shadow-sm' 
                            : 'border-neutral-300 bg-white group-hover:border-neutral-400'
                        }`}>
                          {isChecked && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Slider for Simultaneity */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold text-neutral-800">Coeficiente de uso simultáneo</h3>
                  <span className="text-xs font-mono font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                    {Math.round(simultaneity * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="0.8"
                  step="0.05"
                  value={simultaneity}
                  onChange={e => setSimultaneity(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-2">
                  <span>Poco uso simultáneo (0.2)</span>
                  <span>Uso intensivo y simultáneo (0.8)</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-4 leading-relaxed">
                  * El coeficiente representa qué porcentaje de electrodomésticos enciendes de forma simultánea. El valor de 45% es el estándar promedio nacional en España.
                </p>
              </div>
            </div>

            {/* Right side: Results display */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl p-8 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
                <h2 className="text-lg font-bold mb-6">Tu recomendación de potencia</h2>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Potencia Teórica Necesaria</div>
                    <div className="text-3xl font-extrabold mt-1 text-brand-400">{calculatedPower} kW</div>
                  </div>

                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Tramo de Potencia Recomendado</div>
                    <div className="text-4xl font-extrabold mt-1 text-white">{recommendedStandard} kW</div>
                    <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                      Este es el tramo regulado normalizado en España más cercano a tu necesidad real para evitar cortes de suministro.
                    </p>
                  </div>
                </div>


              </div>

              {/* Action card */}
              <div className="bg-white rounded-3xl border border-neutral-100 p-8 shadow-soft text-center">
                <h3 className="font-bold text-neutral-900 text-lg mb-3">¿Pagas de más actualmente?</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                  Muchos hogares españoles tienen contratados 5.75 kW o más sin necesidad. Bajando a 3.45 kW o 4.6 kW puedes ahorrar un promedio de **120€ a 180€ anuales**.
                </p>
                <div className="space-y-4">
                  <Link href="/contacto" className="btn-primary w-full justify-center py-4">
                    <ZapIcon size={16} />
                    Ajustar mi potencia gratis
                  </Link>
                  <a href="tel:+34854615199" className="btn-secondary w-full justify-center py-4 text-neutral-700 font-bold">
                    Llamar gratis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
