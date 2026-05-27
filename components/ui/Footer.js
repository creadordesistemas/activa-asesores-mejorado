import Link from 'next/link';

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
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-electric-500 rounded-xl flex items-center justify-center">
                <ZapIcon />
              </div>
              <span className="font-bold text-white text-[17px]">
                <span className="text-brand-400">Activa</span> Asesores
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-500">
              Gestoría especializada en energía. Optimizamos tus facturas, gestionamos tus suministros y te ahorramos tiempo y dinero.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Optimización de facturas', '/servicios'],
                ['Cambio de titular', '/servicios'],
                ['Alta de luz y gas', '/servicios'],
                ['Revisión de potencia', '/servicios'],
                ['Estudio de ahorro energético', '/servicios'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Quiénes somos', '/quienes-somos'],
                ['Contacto', '/contacto'],
                ['Aviso legal', '/aviso-legal'],
                ['Política de privacidad', '/politica-de-privacidad'],
                ['Política de cookies', '/politica-de-cookies'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <PhoneIcon />
                <a href="tel:+34900000000" className="hover:text-brand-400 transition-colors">
                  900 000 000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon />
                <a href="mailto:info@activaasesores.com" className="hover:text-brand-400 transition-colors">
                  info@activaasesores.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon />
                <span>España</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-neutral-600 mb-2">Horario de atención</p>
              <p className="text-sm text-neutral-400">Lun–Vie: 9:00–18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
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
