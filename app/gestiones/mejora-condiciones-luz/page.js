import Link from 'next/link';

export const metadata = {
  title: 'Mejorar Tarifa de Luz y Contrato Gratis | Activa Asesores',
  description:
    'Analizamos tu tarifa actual de luz. Renegociamos tus condiciones y te cambiamos a la opción más barata del mercado sin permanencia ni coste.',
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

const benefits = [
  { title: 'Estudio de tarifas independientes', desc: 'Comparamos tu contrato actual con todas las ofertas vigentes del mercado español para encontrar el mayor ahorro.' },
  { title: 'Eliminación de servicios extra', desc: 'Identificamos y eliminamos seguros de mantenimiento o coberturas ocultas que no hayas solicitado.' },
  { title: 'Alineación de potencias', desc: 'Ajustamos tu potencia contratada al mínimo técnico necesario para reducir el coste fijo mensual.' },
  { title: 'Protección anual activa', desc: 'Cuando pase un año de tu contrato, te llamaremos proactivamente para volver a revisar y mejorarte las condiciones si el mercado ha bajado.' },
];

export default function MejoraCondicionesPage() {
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
              Mejora de{' '}<span className="text-gradient">Condiciones de Luz</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              ¿Llevas más de un año con el mismo contrato de luz? Las compañías suelen subir los precios al finalizar las promociones temporales. En Activa Asesores auditamos tu contrato y optimizamos tu tarifa de forma gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Ahorro Activo</div>
            <h2 className="section-title">¿Cómo optimizamos tu tarifa actual?</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Realizamos una auditoría técnica completa del suministro para recortar costes fijos y variables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="card-base hover:border-brand-200 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg mb-2">{b.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">{b.desc}</p>
                </div>
                <span className="text-brand-600 font-semibold text-xs">Servicio 100% Sin Coste</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual callback protection program details */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Nuestro Plan de Blindaje Anual</h2>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                La mayoría de las personas se olvidan de su contrato de luz una vez firmado. Al cabo de los 12 meses, las comercializadoras eliminan los descuentos de bienvenida y suben el precio del kWh.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                En Activa Asesores hemos creado un **sistema de protección anual**: registramos la fecha de vencimiento de tu tarifa y, cuando falten unas semanas para cumplirse el año, te llamamos para buscarte una nueva oferta y blindarte contra subidas de precios.
              </p>
              <ul className="space-y-3">
                {[
                  'Alertas automáticas de vencimiento de contratos.',
                  'Auditorías recurrentes anuales sin que tengas que pedirlas.',
                  'Negociación activa con Endesa, Iberdrola, Naturgy y más.',
                  'Libertad total: sin permanencias ni penalizaciones.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                    <span className="text-brand-500 mt-0.5 shrink-0"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-4xl p-8 border border-neutral-100 space-y-6 text-center">
              <h3 className="font-bold text-xl text-neutral-900">¿Quieres auditar tu contrato hoy?</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Tardamos menos de 10 minutos en analizar tu factura y decirte cuánto puedes ahorrar. No cobramos comisiones ni te vinculamos a ningún compromiso.
              </p>
              <div className="space-y-4">
                <Link href="/contacto" className="btn-primary w-full justify-center py-4">
                  <ZapIcon size={16} />
                  Auditar mi factura gratis
                </Link>
                <a href="tel:+34854615199" className="btn-secondary w-full justify-center py-4 text-neutral-700 font-bold">
                  Llamar gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">No pagues ni un euro más por la desactualización de tu tarifa</h2>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
            Nuestro equipo revisa y renegocia tu contrato de lunes a viernes de 8:00 a 20:00. Rápido, transparente y gestionado por personas reales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+34854615199" className="btn-primary w-full sm:w-auto justify-center px-8 py-4 text-base">
              Llamar gratis
            </a>
            <Link href="/contacto" className="text-white hover:underline font-bold py-2">
              Solicitar por correo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
