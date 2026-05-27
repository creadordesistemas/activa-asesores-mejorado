import Link from 'next/link';

export const metadata = {
  title: 'Servicios — Gestión energética integral',
  description:
    'Optimización de facturas, cambio de titular, altas de luz y gas, revisión de potencia y estudios de ahorro energético. Gestionamos todo tipo de trámites energéticos en España.',
};

const ZapIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const FlameIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/>
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
const AlertIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
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

const services = [
  {
    icon: <TrendingDownIcon size={28} />,
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-600',
    accentColor: 'border-brand-200',
    badge: 'Más popular',
    badgeColor: 'bg-brand-50 text-brand-600 border-brand-100',
    title: 'Optimización de facturas',
    subtitle: 'Paga exactamente lo que corresponde, ni un euro más',
    description:
      'Muchos usuarios llevan años pagando tarifas desactualizadas, potencias mal ajustadas o consumos mal leídos. Analizamos tu factura de luz o gas al detalle y detectamos dónde hay margen de mejora.',
    includes: [
      'Análisis gratuito de tu factura actual',
      'Comparativa de tarifas disponibles en el mercado',
      'Propuesta de ahorro con cifras reales',
      'Gestión del cambio de tarifa si decides continuar',
    ],
    time: '24-48h para el informe inicial',
    price: 'Consulta gratuita',
  },
  {
    icon: <ZapIcon size={28} />,
    iconBg: 'bg-electric-50',
    iconColor: 'text-electric-600',
    accentColor: 'border-electric-200',
    title: 'Alta de electricidad',
    subtitle: 'Nuevo suministro en marcha sin complicaciones',
    description:
      'Tanto si te mudas a una vivienda nueva como si reactivás un suministro dado de baja, gestionamos todo el proceso ante la distribuidora y la comercializadora de tu elección.',
    includes: [
      'Tramitación completa ante Red Eléctrica',
      'Asesoramiento en la elección de potencia',
      'Selección de la mejor tarifa para tu perfil',
      'Seguimiento hasta la activación',
    ],
    time: '3-7 días hábiles',
    price: 'Desde 29€',
  },
  {
    icon: <FlameIcon size={28} />,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    accentColor: 'border-orange-200',
    title: 'Alta de gas natural',
    subtitle: 'Gestión completa de tu suministro de gas',
    description:
      'El alta de gas tiene más pasos de lo que parece: inspección de instalación, alta en distribuidora y contratación con comercializadora. Nos encargamos de toda la cadena sin que tengas que hacer nada.',
    includes: [
      'Coordinación con la empresa distribuidora',
      'Tramitación de la inspección si es necesaria',
      'Alta con la comercializadora de tu elección',
      'Acompañamiento en el proceso completo',
    ],
    time: '7-15 días hábiles',
    price: 'Desde 39€',
  },
  {
    icon: <FileTextIcon size={28} />,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    accentColor: 'border-violet-200',
    title: 'Cambio de titular',
    subtitle: 'Herencias, compraventas y cambios de inquilino',
    description:
      'Comprar un piso, alquilarlo o gestionar una herencia implica cambiar la titularidad de los suministros. Es un trámite sencillo pero tedioso. Nosotros lo hacemos por ti.',
    includes: [
      'Cambio de titular de luz y/o gas',
      'Gestión de documentación necesaria',
      'Comunicación directa con la comercializadora',
      'Confirmación escrita del cambio efectuado',
    ],
    time: '3-10 días hábiles',
    price: 'Desde 19€',
  },
  {
    icon: <SearchIcon size={28} />,
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    accentColor: 'border-sky-200',
    title: 'Revisión de potencia',
    subtitle: 'Ni más ni menos de lo que realmente necesitas',
    description:
      'Pagar una potencia mayor de la que consumes es tirar dinero cada mes. Analizamos tu historial de consumo y te recomendamos la potencia óptima para tu vivienda o negocio.',
    includes: [
      'Análisis de consumo de los últimos 12 meses',
      'Cálculo de la potencia óptima',
      'Gestión del cambio ante la distribuidora',
      'Estimación del ahorro mensual',
    ],
    time: '24h para el análisis',
    price: 'Desde 15€',
  },
  {
    icon: <AlertIcon size={28} />,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    accentColor: 'border-red-100',
    title: 'Reclamaciones e incidencias',
    subtitle: 'Tu representante ante la comercializadora',
    description:
      'Errores en la factura, cortes injustificados, problemas con el contador... Cuando algo va mal con tu suministro, te representamos y gestionamos la reclamación para que se resuelva.',
    includes: [
      'Reclamaciones ante la comercializadora',
      'Gestión de cortes o problemas de suministro',
      'Errores en facturación o lecturas',
      'Recurso ante organismos reguladores si es necesario',
    ],
    time: 'Según el tipo de incidencia',
    price: 'Consulta gratuita',
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-bg pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-full mb-6">
              <ZapIcon size={14} />
              Servicios energéticos
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight mb-5">
              Todo lo que necesitas,<br />
              <span className="text-gradient">gestionado por nosotros</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Somos especialistas en gestión energética. Desde optimizar tu factura hasta tramitar cualquier cambio en tu suministro de luz o gas. Sin burocracia, sin esperas.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white rounded-3xl border border-neutral-100 shadow-soft overflow-hidden flex flex-col md:flex-row ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Color panel */}
              <div className={`md:w-64 lg:w-80 shrink-0 ${s.iconBg} flex items-center justify-center p-10 relative overflow-hidden`}>
                <div className={`absolute inset-0 opacity-10 ${s.iconBg}`} />
                <div className={`w-20 h-20 rounded-3xl bg-white/70 backdrop-blur-sm ${s.iconColor} flex items-center justify-center shadow-soft relative z-10`}>
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    {s.badge && (
                      <span className={`inline-block text-xs font-semibold border px-2.5 py-1 rounded-full mb-2 ${s.badgeColor}`}>
                        {s.badge}
                      </span>
                    )}
                    <h2 className="text-2xl font-bold text-neutral-900">{s.title}</h2>
                    <p className="text-brand-600 font-medium text-sm mt-0.5">{s.subtitle}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-semibold text-neutral-900">{s.price}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">{s.time}</div>
                  </div>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed mb-6">{s.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                  {s.includes.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                      <span className="mt-0.5 shrink-0 text-brand-500"><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/contacto" className="btn-primary text-sm px-5 py-3 inline-flex">
                  Solicitar este servicio
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-neutral-500 mb-8">
            Contáctanos y cuéntanos tu situación. Si está relacionado con la energía, lo gestionamos.
          </p>
          <Link href="/contacto" className="btn-primary px-8 py-4 text-base inline-flex">
            <ZapIcon size={18} />
            Consulta personalizada gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
