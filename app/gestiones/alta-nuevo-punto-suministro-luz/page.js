import Link from 'next/link';

export const metadata = {
  title: 'Alta de Nuevo Suministro de Luz Gratis | Activa Asesores',
  description:
    'Gestionamos tu expediente de acometida y alta de luz para obra, vivienda nueva o local comercial ante la distribuidora de forma rápida y gratuita.',
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

const steps = [
  { title: 'Estudio de Viabilidad y Acometida', desc: 'Analizamos la distancia a la red de distribución eléctrica existente y solicitamos el presupuesto de acometida a la distribuidora.' },
  { title: 'Asignación del código CUPS', desc: 'La distribuidora inspecciona la instalación y genera el CUPS, el código de identificación de tu nuevo punto de suministro.' },
  { title: 'Emisión del Boletín Eléctrico (CIE)', desc: 'Validamos que el electricista autorizado emita el Certificado de Instalación en regla, indispensable para contratar.' },
  { title: 'Contratación y Conexión del Contador', desc: 'Seleccionamos la mejor tarifa de luz del mercado y coordinamos la cita para instalar el contador digital en la vivienda.' },
];

export default function AltaNuevoPuntoSuministroPage() {
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
              Alta de Nuevo{' '}<span className="text-gradient">Punto de Suministro</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              ¿Acabas de construir una vivienda o vas a abrir un local comercial sin instalación previa? En Activa Asesores gestionamos el alta de tu nuevo punto de suministro eléctrico ante la distribuidora de forma gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Proceso Técnico</div>
            <h2 className="section-title">El camino para conectar tu nuevo punto</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Dar de alta un suministro nuevo requiere de coordinación y expedientes ante la empresa distribuidora de tu zona geográfica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={s.title} className="bg-white border border-neutral-100 rounded-3xl p-6 relative hover:border-brand-200 transition-all shadow-soft">
                <span className="text-4xl font-extrabold text-neutral-100 absolute top-4 right-4 font-mono">0{idx + 1}</span>
                <h3 className="font-bold text-neutral-900 text-base mb-3 pt-4 relative z-10">{s.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Info */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Requisitos de documentación para el alta nueva</h2>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                Al tratarse de una primera ocupación, la distribuidora requiere validar que la instalación cumple con la normativa eléctrica nacional. Deberás preparar:
              </p>
              <ul className="space-y-4">
                {[
                  'Cédula de habitabilidad o Licencia de primera ocupación.',
                  'Certificado de Instalación Eléctrica (CIE) emitido por instalador certificado.',
                  'Escrituras de la propiedad o nota simple del Catastro.',
                  'DNI o escrituras de la sociedad (CIF) junto al IBAN de cobro.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                    <span className="text-brand-500 mt-0.5 shrink-0"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-4xl p-8 border border-neutral-100 text-center space-y-6">
              <h3 className="font-bold text-xl text-neutral-900">¿Hablamos con la distribuidora por ti?</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Los expedientes de acometida nueva pueden ser largos y complejos. En Activa Asesores nos encargamos de todo el proceso de seguimiento de forma gratuita para facilitarte el alta.
              </p>
              <div className="space-y-4">
                <Link href="/contacto" className="btn-primary w-full justify-center py-4">
                  <ZapIcon size={16} />
                  Solicitar alta nueva gratis
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
      <section className="py-16 px-4 md:px-8 bg-neutral-950 text-white border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Inicia tu expediente de acometida hoy mismo</h2>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
            De lunes a viernes de 8:00 a 20:00. Un asesor energético te asistirá para dar de alta tu suministro eléctrico nuevo sin sobrecostes ni retrasos innecesarios.
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
