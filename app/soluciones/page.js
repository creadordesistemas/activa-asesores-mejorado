import Link from 'next/link';

export const metadata = {
  title: 'Servicios y Soluciones de Ahorro | Activa Asesores',
  description:
    'Gestión de altas de luz, cambios de titular, optimización de potencia y tarifas. Soluciones energéticas 100% gratuitas para tu hogar o negocio.',
};

const ZapIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const FileTextIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const TrendingDownIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
    <polyline points="17 18 23 18 23 12"/>
  </svg>
);
const SearchIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const StarIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
  </svg>
);
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const solutions = [
  {
    icon: <TrendingDownIcon size={28} />,
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-600',
    badge: 'Servicio Estrella',
    badgeColor: 'bg-brand-50 text-brand-600 border-brand-100',
    title: 'Análisis y Optimización de Facturas',
    subtitle: 'Estudio gratuito de tu contrato actual de luz o gas',
    description:
      'Comparamos tu tarifa actual con todas las ofertas del mercado en España (Endesa, Iberdrola, Naturgy, Repsol y TotalEnergies) para encontrar la opción más económica. Analizamos si estás pagando cargos innecesarios o servicios adicionales que no utilizas.',
    includes: [
      'Análisis detallado de tu consumo histórico',
      'Comparativa independiente entre las principales compañías',
      'Cálculo exacto de tu ahorro anual proyectado',
      'Tramitación sin coste del cambio a la mejor tarifa',
    ],
    time: 'Menos de 24 horas',
    price: '100% Gratis',
    link: '/contacto',
  },
  {
    icon: <FileTextIcon size={28} />,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    title: 'Cambio de Titular de Luz',
    subtitle: 'Gestión rápida para compraventas, herencias o alquileres',
    description:
      'Tramitamos el cambio de titularidad de tu suministro de luz de forma ágil y sin complicaciones ante la distribuidora. Evita llamadas infinitas y esperas. Nos encargamos de recopilar y validar la documentación necesaria.',
    includes: [
      'Gestión del cambio ante la distribuidora de tu zona',
      'Asesoramiento para evitar cortes de suministro',
      'Validación de boletines y documentación técnica',
      'Estudio paralelo gratuito para elegir la mejor tarifa de entrada',
    ],
    time: 'De 3 a 10 días laborables',
    price: '100% Gratis',
    link: '/gestiones/cambio-titular-luz',
  },
  {
    icon: <ZapIcon size={28} />,
    iconBg: 'bg-electric-50',
    iconColor: 'text-electric-600',
    title: 'Alta de Suministro de Luz',
    subtitle: 'Activación de electricidad en tu hogar o local comercial',
    description:
      'Te ayudamos con el alta de suministro de electricidad tanto en inmuebles nuevos como en segundas ocupaciones que hayan sido dados de baja. Te asesoramos sobre la potencia inicial óptima para no pagar de más en el término fijo de tu factura.',
    includes: [
      'Tramitación completa del expediente de acometida',
      'Asesoramiento sobre la potencia recomendada para tu perfil',
      'Selección de la tarifa de luz más barata disponible',
      'Seguimiento continuo hasta la activación definitiva del contador',
    ],
    disclaimer: true,
    time: 'De 3 a 7 días hábiles',
    price: 'Gestión gratuita',
    link: '/gestiones/alta-suministro-luz',
  },
  {
    icon: <SearchIcon size={28} />,
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    title: 'Revisión y Ajuste de Potencia',
    subtitle: 'Paga solo por la potencia eléctrica que realmente necesitas',
    description:
      '¿Sabías que el término de potencia contratada representa una parte fija muy importante de tu factura de luz? Calculamos con precisión matemática si estás sobredimensionado y tramitamos la bajada o subida de potencia recomendada.',
    includes: [
      'Estudio de picos de potencia máximos de los últimos 12 meses',
      'Cálculo de la potencia óptima según tus electrodomésticos y hábitos',
      'Tramitación del cambio de potencia ante la distribuidora',
      'Eliminación de sobrecostes inútiles en el término fijo mensual',
    ],
    disclaimer: true,
    time: '24 horas para el estudio',
    price: 'Gestión gratuita',
    link: '/gestiones/subida-potencia-luz',
  },
  {
    icon: <StarIcon size={28} />,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    title: 'Mejora de Condiciones del Contrato',
    subtitle: 'Actualización anual y blindaje contra subidas de precios',
    description:
      'Las comercializadoras suelen subir los precios al finalizar el contrato de 12 meses. En Activa Asesores realizamos un seguimiento de tu cuenta: cuando pase un año, te llamaremos proactivamente para volver a mejorarte las condiciones.',
    includes: [
      'Seguimiento anual y alertas de renovación de contrato',
      'Comparativa recurrente frente a nuevas ofertas del mercado',
      'Negociación de descuentos o tarifas especiales para clientes activos',
      'Asesoría continua sin permanencias ni ataduras',
    ],
    time: 'Seguimiento anual continuo',
    price: '100% Gratis',
    link: '/gestiones/mejora-condiciones-luz',
  },
];

export default function SolucionesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden gradient-bg pt-32 pb-16 md:pb-20 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-brand-200/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-full mb-6">
              <ZapIcon size={14} />
              Nuestras Soluciones
            </div>
            <h1 className="text-[56px] md:text-[72px] font-bold text-neutral-900 leading-[1.08] mb-5">
              Optimiza tus facturas de luz y gas<br />
              <span className="text-gradient">con soporte experto sin coste</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              Olvídate de la burocracia de las distribuidoras y de las confusas tarifas de las comercializadoras. En Activa Asesores realizamos todas tus gestiones de forma rápida y sin coste de asesoría para ti.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards List */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto space-y-8">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white rounded-3xl border border-neutral-100 shadow-soft overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-card ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Left Color Panel */}
              <div className={`md:w-64 lg:w-72 shrink-0 ${s.iconBg} flex flex-col items-center justify-center p-6 md:p-10 relative overflow-hidden`}>
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/80 backdrop-blur-sm ${s.iconColor} flex items-center justify-center shadow-soft relative z-10 mb-3 md:mb-4`}>
                  {s.icon}
                </div>
                <div className="relative z-10 text-center">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-0.5">Precio</span>
                  <span className={`text-base md:text-lg font-extrabold ${s.iconColor}`}>{s.price}</span>
                </div>
              </div>

              {/* Right Content Panel */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      {s.badge && (
                        <span className={`inline-block text-[11px] font-bold border px-2.5 py-1 rounded-full mb-2 ${s.badgeColor}`}>
                          {s.badge}
                        </span>
                      )}
                      <h2 className="text-2xl font-bold text-neutral-900">{s.title}</h2>
                      <p className="text-brand-600 font-semibold text-sm mt-0.5">{s.subtitle}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-neutral-400">Plazo de resolución</div>
                      <div className="text-sm font-bold text-neutral-800">{s.time}</div>
                    </div>
                  </div>

                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">{s.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {s.includes.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                        <span className="mt-0.5 shrink-0 text-brand-500"><CheckIcon /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {s.disclaimer ? (
                    <p className="text-xs text-neutral-400">
                      * Nuestra gestión es siempre gratuita. Algunos trámites (como el alta o el cambio de potencia) pueden conllevar cargos de la distribuidora que se reflejan en tu primera factura.
                    </p>
                  ) : <span />}
                  <Link href={s.link} className="btn-primary text-sm px-6 py-3 inline-flex items-center whitespace-nowrap self-start sm:self-auto">
                    Solicitar gestión
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust CTA section */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4">
            ¿Quieres que analicemos tu factura <span className="text-gradient">ahora mismo?</span>
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Llámanos al <strong className="text-neutral-800">854 615 199</strong> o envíanos tu última factura. En menos de 24h laborables te daremos una respuesta para reducir tu gasto de luz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto" className="btn-primary px-8 py-4 text-base">
              <ZapIcon size={18} />
              Solicitar análisis gratuito
            </Link>
            <a href="tel:+34854615199" className="btn-secondary px-8 py-4 text-base">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
