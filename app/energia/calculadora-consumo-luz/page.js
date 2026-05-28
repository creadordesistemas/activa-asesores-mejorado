'use client';

import { useState } from 'react';
import Link from 'next/link';

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

export default function CalculadoraConsumoPage() {
  const [size, setSize] = useState('medium'); // small, medium, large
  const [people, setPeople] = useState('couple'); // single, couple, family, large
  const [heating, setHeating] = useState('gas'); // gas, electric, none
  const [water, setWater] = useState('gas'); // gas, electric
  const [ac, setAc] = useState(false);
  const [habits, setHabits] = useState('medium'); // low, medium, high

  // Calculation Logic
  let kwh = 0;

  // Base by size
  if (size === 'small') kwh += 100;
  else if (size === 'medium') kwh += 180;
  else kwh += 280;

  // People addition
  if (people === 'single') kwh += 20;
  else if (people === 'couple') kwh += 50;
  else if (people === 'family') kwh += 100;
  else kwh += 180;

  // Heating addition
  if (heating === 'electric') kwh += 160;
  else if (heating === 'gas') kwh += 15;

  // Hot water addition
  if (water === 'electric') kwh += 90;
  else if (water === 'gas') kwh += 10;

  // AC addition
  if (ac) kwh += 50;

  // Habits multiplier
  if (habits === 'low') kwh *= 0.85;
  else if (habits === 'high') kwh *= 1.25;

  const estimatedKwh = Math.round(kwh);

  // Average cost calculation (Spain 2025 avg: 0.16€/kWh energy + ~12€ power term + taxes)
  const energyCost = estimatedKwh * 0.16;
  const powerCost = 12.5; // fixed avg
  const taxMultiplier = 1.15; // standard taxes
  const estimatedCostMin = parseFloat(((energyCost * 0.9 + powerCost) * taxMultiplier).toFixed(2));
  const estimatedCostMax = parseFloat(((energyCost * 1.1 + powerCost) * taxMultiplier).toFixed(2));

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
              Calculadora de{' '}<span className="text-gradient">Consumo Eléctrico</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              Estima tu consumo mensual en kWh y proyecta el coste aproximado de tu factura de luz. Selecciona las características de tu hogar para simular tu perfil energético.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left selector card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-100 p-8 shadow-soft space-y-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-2">1. Características de tu vivienda</h2>

              {/* Size */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">Tamaño del inmueble</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'small', label: 'Pequeño', desc: '< 50 m²' },
                    { id: 'medium', label: 'Mediano', desc: '50-100 m²' },
                    { id: 'large', label: 'Grande', desc: '> 100 m²' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setSize(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        size === opt.id
                          ? 'border-brand-500 bg-brand-50/10 font-semibold text-brand-700 shadow-sm'
                          : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600'
                      }`}
                    >
                      <div className="text-sm">{opt.label}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Residents */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">Habitantes</label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { id: 'single', label: '1 Persona' },
                    { id: 'couple', label: '2 Personas' },
                    { id: 'family', label: '3-4 Personas' },
                    { id: 'large', label: '5 o más' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setPeople(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        people === opt.id
                          ? 'border-brand-500 bg-brand-50/10 font-semibold text-brand-700 shadow-sm'
                          : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600 text-xs'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Heating */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">Tipo de calefacción</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'electric', label: 'Eléctrica / Bomba' },
                    { id: 'gas', label: 'Gas Natural / Común' },
                    { id: 'none', label: 'No utilizo' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setHeating(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        heating === opt.id
                          ? 'border-brand-500 bg-brand-50/10 font-semibold text-brand-700 shadow-sm'
                          : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600'
                      }`}
                    >
                      <span className="text-xs">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Water */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">Agua caliente sanitaria (ACS)</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'electric', label: 'Termo eléctrico' },
                    { id: 'gas', label: 'Calentador a Gas' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setWater(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        water === opt.id
                          ? 'border-brand-500 bg-brand-50/10 font-semibold text-brand-700 shadow-sm'
                          : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600'
                      }`}
                    >
                      <span className="text-xs">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Air Conditioning toggle */}
              <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                <div>
                  <h3 className="text-sm font-bold text-neutral-800">Aire Acondicionado</h3>
                  <p className="text-[10px] text-neutral-400">¿Utilizas aire acondicionado en verano?</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAc(!ac)}
                  className={`w-12 h-6 rounded-full transition-colors relative outline-none ${ac ? 'bg-brand-500' : 'bg-neutral-300'}`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${ac ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* Habits */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">Hábitos de permanencia</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'low', label: 'Fuera de casa', desc: 'Poco uso diurno' },
                    { id: 'medium', label: 'Estándar', desc: 'Presencia normal' },
                    { id: 'high', label: 'Teletrabajo', desc: 'Consumo continuo' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setHabits(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        habits === opt.id
                          ? 'border-brand-500 bg-brand-50/10 font-semibold text-brand-700 shadow-sm'
                          : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600'
                      }`}
                    >
                      <div className="text-sm">{opt.label}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side results card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl p-8 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
                <h2 className="text-lg font-bold mb-6">Tu estimación de consumo</h2>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Consumo mensual aproximado</div>
                    <div className="text-3xl font-extrabold mt-1 text-brand-400">{estimatedKwh} kWh</div>
                  </div>

                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Factura mensual estimada</div>
                    <div className="text-4xl font-extrabold mt-1 text-white">
                      {estimatedCostMin}€ – {estimatedCostMax}€
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-2 leading-relaxed">
                      * Rango calculado según el coste de energía regulada media en España, incluyendo término de potencia básico e IVA.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-neutral-400 leading-relaxed">
                  Esta simulación tiene un fin orientativo. Los precios reales varían notablemente según la comercializadora seleccionada y las ofertas de contratación vigentes.
                </div>
              </div>

              {/* Call to action */}
              <div className="bg-white rounded-3xl border border-neutral-100 p-8 shadow-soft text-center">
                <h3 className="font-bold text-neutral-900 text-lg mb-3">¿Quieres comparar con tus costes reales?</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                  Con una factura real podemos auditar cada hora de consumo registrada por tu contador inteligente y encontrar la mejor tarifa exacta de España.
                </p>
                <div className="space-y-4">
                  <Link href="/contacto" className="btn-primary w-full justify-center py-4">
                    <ZapIcon size={16} />
                    Estudio de facturas gratis
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
