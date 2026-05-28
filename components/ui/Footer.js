import Link from 'next/link';
import Image from 'next/image';

const ZapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.91-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.004 2C6.477 2 2 6.478 2 12.004c0 1.773.464 3.469 1.348 4.963L2 22l5.233-1.327A9.944 9.944 0 0012.004 22C17.523 22 22 17.522 22 12.004 22 6.478 17.523 2 12.004 2zm0 18.214a8.192 8.192 0 01-4.195-1.153l-.3-.179-3.106.787.814-2.967-.197-.31A8.19 8.19 0 013.786 12c0-4.532 3.686-8.214 8.218-8.214 4.532 0 8.214 3.682 8.214 8.214 0 4.532-3.682 8.214-8.214 8.214z"/>
  </svg>
);

const WA_URL = 'https://wa.me/34656414908?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20de%20luz%20y%20gas.';

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-[36px] h-[36px] relative shrink-0">
                <Image
                  src="/activa-logo-orange.webp"
                  alt="Activa Asesores"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-white text-[17px]">
                <span className="text-brand-400">Activa</span> Asesores
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-500 mb-6">
              Gestoría especializada en energía para hogares y negocios. Analizamos tu factura, optimizamos tus potencias y tramitamos tus altas y cambios de titular de forma 100% gratuita.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/activa.asesores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-orange-400 hover:text-neutral-950 hover:bg-gradient-to-br hover:from-[#f4a261] hover:to-[#e06020] hover:border-transparent hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@activaasesores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-orange-400 hover:text-neutral-950 hover:bg-gradient-to-br hover:from-[#f4a261] hover:to-[#e06020] hover:border-transparent hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Luz y Energía */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Luz y Energía</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Tarifas de luz baratas', '/energia/tarifas-luz-baratas'],
                ['Factura de la luz', '/energia/factura-luz'],
                ['Calculadora de potencia', '/energia/calculadora-potencia-luz'],
                ['Calculadora de consumo', '/energia/calculadora-consumo-luz'],
                ['Todas las soluciones', '/soluciones'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gestiones comunes */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Gestiones de Luz</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Cambio de titular', '/gestiones/cambio-titular-luz'],
                ['Alta de Suministro', '/gestiones/alta-suministro-luz'],
                ['Mejora de condiciones', '/gestiones/mejora-condiciones-luz'],
                ['Subida de potencia', '/gestiones/subida-potencia-luz'],
                ['Alta nuevo punto', '/gestiones/alta-nuevo-punto-suministro-luz'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 text-brand-400"><PhoneIcon /></span>
                <a href="tel:+34854615199" className="hover:text-brand-400 transition-colors">
                  854 615 199
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1" style={{ color: '#25D366' }}><WhatsAppIcon /></span>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                  aria-label="Contactar por WhatsApp"
                >
                  656 414 908
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 text-brand-400"><MailIcon /></span>
                <a href="mailto:info@activaasesores.com" className="hover:text-brand-400 transition-colors">
                  info@activaasesores.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 text-brand-400"><MapPinIcon /></span>
                <span className="leading-relaxed">
                  Av. San Francisco Javier, 9 STN 7<br />
                  41018 Sevilla, España
                </span>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-xs text-neutral-600 mb-1">Horario de atención</p>
              <p className="text-sm text-neutral-400">Lunes–Viernes: 8:00–20:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Activa Asesores. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/aviso-legal" className="hover:text-neutral-400 transition-colors">Aviso legal</Link>
            <Link href="/politica-de-privacidad" className="hover:text-neutral-400 transition-colors">Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-neutral-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
