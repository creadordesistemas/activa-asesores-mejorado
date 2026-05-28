import Link from 'next/link';

export const metadata = {
  title: 'Cómo Dar de Alta la Luz en Casa Gratis | Activa Asesores',
  description:
    '¿Necesitas activar la luz en tu hogar o negocio? Nos encargamos de todo el trámite con la distribuidora de tu zona de forma 100% gratuita e inmediata.',
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

const requirements = [
  { title: 'Código CUPS', desc: 'Identificador único de 20 o 22 dígitos que localiza el punto eléctrico del inmueble.' },
  { title: 'Certificado de Instalación Eléctrica (CIE)', desc: 'También conocido como Boletín Eléctrico. Es obligatorio y debe tener menos de 20 años de antigüedad.' },
  { title: 'Datos del titular', desc: 'Nombre completo, DNI/NIE/CIF y datos de contacto de la persona que asume el contrato.' },
  { title: 'Dirección del inmueble', desc: 'Dirección exacta y referencia catastral para localizar la acometida.' },
  { title: 'Cuenta bancaria', desc: 'Código IBAN para realizar la domiciliación obligatoria del suministro.' },
];

export default function AltaSuministroLuzPage() {
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
              Alta de{' '}<span className="text-gradient">Suministro de Luz</span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
              ¿Vas a mudarte a una vivienda nueva o a reactivar la electricidad dada de baja? En Activa Asesores te asesoramos con la potencia recomendada y tramitamos el alta ante la distribuidora de forma gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag">Documentación</div>
            <h2 className="section-title">Requisitos indispensables para dar de alta la luz</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              La distribuidora exige la validación técnica de la instalación antes de autorizar la conexión del contador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map(r => (
              <div key={r.title} className="card-base hover:border-brand-200">
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-neutral-900 text-base mb-2">{r.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulated costs information */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">¿Cuánto cuesta dar de alta la luz en 2025?</h2>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
                Aunque la gestión de Activa Asesores es 100% gratuita, dar de alta la luz conlleva unos **costes regulados por el Estado** que cobra la distribuidora a través de tu primera factura de electricidad.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex justify-between items-center text-sm">
                  <div>
                    <span className="font-bold text-neutral-800">Derechos de Extensión</span>
                    <p className="text-[11px] text-neutral-400">Por la infraestructura de la red eléctrica</p>
                  </div>
                  <span className="font-mono font-bold text-neutral-900">17,37 € por kW</span>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex justify-between items-center text-sm">
                  <div>
                    <span className="font-bold text-neutral-800">Derechos de Acceso</span>
                    <p className="text-[11px] text-neutral-400">Por la incorporación a la red de distribución</p>
                  </div>
                  <span className="font-mono font-bold text-neutral-900">19,70 € por kW</span>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex justify-between items-center text-sm">
                  <div>
                    <span className="font-bold text-neutral-800">Derechos de Enganche</span>
                    <p className="text-[11px] text-neutral-400">Por la acoplación del contador inteligente</p>
                  </div>
                  <span className="font-mono font-bold text-neutral-900">9,04 € (pago único)</span>
                </div>
              </div>
              <p className="text-[10px] text-neutral-400 mt-4 leading-relaxed">
                * Por ejemplo, dar de alta una potencia básica de 3,45 kW supone un coste regulado total de unos 136,97 € + IVA cargados en tu primer recibo.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-4xl p-8 border border-neutral-100 space-y-6">
              <h3 className="font-bold text-xl text-neutral-900">Plazos y activación</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Una vez presentada y validada la documentación por nuestros asesores ante la distribuidora, el contador físico se instala y activa en un plazo medio de **3 a 7 días hábiles**.
              </p>
              <ul className="space-y-3">
                {[
                  'Revisión del Certificado de Instalación (Boletín).',
                  'Solicitud de acometida y derechos de enganche.',
                  'Selección de la tarifa de luz más barata.',
                  'Instalación del contador digital telegestionado.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                    <span className="text-brand-500 mt-0.5 shrink-0"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-neutral-200">
                <Link href="/contacto" className="btn-primary w-full justify-center py-4">
                  <ZapIcon size={16} />
                  Tramitar alta de luz gratis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">¿Preparando tu mudanza? Tramitamos tu alta hoy mismo</h2>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
            De lunes a viernes de 8:00 a 20:00. Llámanos gratis para resolver tus dudas sobre el Boletín Eléctrico y los costes regulados de la distribuidora.
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
