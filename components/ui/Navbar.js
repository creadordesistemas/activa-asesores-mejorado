'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// ─── Iconos SVG inline ────────────────────────────────────────────────────────

const ZapIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.91-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.004 2C6.477 2 2 6.478 2 12.004c0 1.773.464 3.469 1.348 4.963L2 22l5.233-1.327A9.944 9.944 0 0012.004 22C17.523 22 22 17.522 22 12.004 22 6.478 17.523 2 12.004 2zm0 18.214a8.192 8.192 0 01-4.195-1.153l-.3-.179-3.106.787.814-2.967-.197-.31A8.19 8.19 0 013.786 12c0-4.532 3.686-8.214 8.218-8.214 4.532 0 8.214 3.682 8.214 8.214 0 4.532-3.682 8.214-8.214 8.214z"/>
  </svg>
);

const WA_URL = 'https://wa.me/34656414908?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20de%20luz%20y%20gas.';

const ChevronDownIcon = ({ open = false }) => (
  <svg
    width="11" height="11"
    viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.8"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="17" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Datos de navegación ──────────────────────────────────────────────────────

const MEGAMENU_COLS = [
  {
    heading: 'Compañías de Luz',
    links: [
      { label: 'Endesa',        href: '/energia/companias/endesa-luz' },
      { label: 'Naturgy',       href: '/energia/companias/naturgy-luz' },
      { label: 'Iberdrola',     href: '/energia/companias/iberdrola-luz' },
      { label: 'Repsol',        href: '/energia/companias/repsol-luz' },
      { label: 'TotalEnergies', href: '/energia/companias/totalenergies-luz' },
    ],
  },
  {
    heading: 'Luz',
    links: [
      { label: 'Tarifas de luz baratas',   href: '/energia/tarifas-luz-baratas' },
      { label: 'Factura de la luz',        href: '/energia/factura-luz' },
      { label: 'Calculadora de potencia',  href: '/energia/calculadora-potencia-luz' },
      { label: 'Calculadora de consumo',   href: '/energia/calculadora-consumo-luz' },
    ],
  },
  {
    heading: 'Gestiones',
    links: [
      { label: 'Cambio de titular',       href: '/gestiones/cambio-titular-luz' },
      { label: 'Alta de suministro',      href: '/gestiones/alta-suministro-luz' },
      { label: 'Mejora de condiciones',   href: '/gestiones/mejora-condiciones-luz' },
      { label: 'Subida de potencia',      href: '/gestiones/subida-potencia-luz' },
      { label: 'Alta nuevo punto',        href: '/gestiones/alta-nuevo-punto-suministro-luz' },
    ],
  },
];

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled]               = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [dropdownOpen, setDropdownOpen]       = useState(false);
  const [mobileEnergia, setMobileEnergia]     = useState(false);
  const [mounted, setMounted]                 = useState(false);
  const pathname                              = usePathname();
  const dropdownTimer                         = useRef(null);

  // Marcar como montado (cliente) — evita hydration mismatch en spans condicionales
  useEffect(() => { setMounted(true); }, []);

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileEnergia(false);
  }, [pathname]);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Helpers para el megamenu con delay (evita que se cierre accidentalmente)
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  // Helpers de estado activo
  const isEnergiaActive = pathname.startsWith('/energia') || pathname.startsWith('/gestiones');
  const isSolucionesActive = pathname === '/soluciones';
  const isContactoActive   = pathname === '/contacto';

  const navLinkBase   = 'relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 select-none';
  const navLinkActive = 'text-brand-600';
  const navLinkIdle   = 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/80';

  return (
    <>
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
          scrolled || mobileOpen
            ? 'border-b border-neutral-100 shadow-[0_4px_20px_-4px_rgba(28,37,53,0.06)]'
            : 'border-b border-neutral-100/60 shadow-none'
        }`}
        style={{ height: '72px' }}
      >
        <nav className="max-w-[1280px] mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 shrink-0 group"
            aria-label="Activa Asesores — inicio"
          >
            {/* Logo imagen */}
            <div className="w-[34px] h-[34px] relative transition-transform duration-200 group-hover:scale-105 shrink-0">
              <Image
                src="/activa-logo-orange.webp"
                alt="Activa Asesores"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Wordmark */}
            <span className="text-[18px] font-bold tracking-tight leading-none">
              <span className="text-brand-600">Activa</span>
              <span className="text-neutral-800 font-normal"> Asesores</span>
            </span>
          </Link>

          {/* ── Nav desktop ─────────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-0.5">

            {/* Dropdown Energía */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-energia-btn"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className={`${navLinkBase} ${isEnergiaActive ? navLinkActive : navLinkIdle}`}
                onClick={() => setDropdownOpen(prev => !prev)}
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
              >
                Energía
                <ChevronDownIcon open={dropdownOpen} />
                {/* Dot indicador activo */}
                {isEnergiaActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-400" />
                )}
              </button>

              {/* Megamenu */}
              <div
                role="menu"
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px]
                            transition-all duration-200 ease-out ${
                              dropdownOpen
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-2 pointer-events-none'
                            }`}
              >
                <div className="bg-white rounded-3xl border border-neutral-100 p-7 grid grid-cols-3 gap-7"
                     style={{ boxShadow: '0 12px 40px rgba(28,37,53,0.08)' }}>
                  {MEGAMENU_COLS.map((col) => (
                    <div key={col.heading}>
                      <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3.5">
                        {col.heading}
                      </h4>
                      <ul className="space-y-1">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              role="menuitem"
                              className={`block text-sm font-medium py-1 transition-colors duration-150 ${
                                pathname === link.href
                                  ? 'text-brand-600'
                                  : 'text-neutral-500 hover:text-brand-600'
                              }`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soluciones */}
            <Link
              href="/soluciones"
              className={`${navLinkBase} ${isSolucionesActive ? navLinkActive : navLinkIdle}`}
            >
              Soluciones
              {mounted && isSolucionesActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-400" />
              )}
            </Link>

            {/* Contacto */}
            <Link
              href="/contacto"
              className={`${navLinkBase} ${isContactoActive ? navLinkActive : navLinkIdle}`}
            >
              Contacto
              {mounted && isContactoActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-400" />
              )}
            </Link>
          </div>

          {/* ── CTA desktop ─────────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Botón Llamar — naranja */}
            <a
              href="tel:+34854615199"
              id="nav-cta-llamar"
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl select-none"
              style={{
                background: 'linear-gradient(135deg, #f4a261 0%, #e06020 100%)',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease',
                willChange: 'transform',
              }}
              aria-label="Llamar al 854 615 199"
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(224,96,32,0.35)'; e.currentTarget.style.filter = 'brightness(1.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.filter = ''; }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translateY(0px)'; }}
            >
              <PhoneIcon size={13} />
              Llamar
            </a>

            {/* Botón WhatsApp — verde */}
            <a
              href={WA_URL}
              id="nav-cta-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl select-none"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease',
                willChange: 'transform',
              }}
              aria-label="Contactar por WhatsApp"
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.30)'; e.currentTarget.style.filter = 'brightness(1.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.filter = ''; }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translateY(0px)'; }}
            >
              <WhatsAppIcon size={15} />
              WhatsApp
            </a>
          </div>

          {/* ── Hamburger móvil ──────────────────────────────────────────────── */}
          <button
            id="nav-mobile-toggle"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-neutral-600
                       hover:bg-neutral-100 active:scale-95 transition-all duration-150"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mounted ? (mobileOpen ? <CloseIcon /> : <MenuIcon />) : <MenuIcon />}
          </button>
        </nav>
      </header>

      {/* ── Menú móvil ──────────────────────────────────────────────────────── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        style={{ background: 'rgba(15,22,34,0.25)', backdropFilter: 'blur(4px)' }}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed left-0 right-0 z-[45] md:hidden transition-all duration-300 ease-out
                    bg-white border-b border-neutral-100 overflow-y-auto
                    ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0 pointer-events-none'}`}
        style={{
          top: '72px',
          maxHeight: 'calc(100dvh - 72px)',
          boxShadow: '0 12px 40px rgba(28,37,53,0.10)',
        }}
      >
        <div className="px-5 py-5 flex flex-col">

          {/* Energía colapsable */}
          <div className="border-b border-neutral-50">
            <button
              id="nav-mobile-energia"
              onClick={() => setMobileEnergia(!mobileEnergia)}
              className="w-full flex items-center justify-between px-3 py-3.5 text-base font-semibold text-neutral-800 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              Energía
              <ChevronDownIcon open={mobileEnergia} />
            </button>

            {/* Submenú Energía */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                mobileEnergia ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pb-4 space-y-5 pl-4 pr-3 pt-1">
                {MEGAMENU_COLS.map((col) => (
                  <div key={col.heading}>
                    <h5 className="text-[10.5px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      {col.heading}
                    </h5>
                    <div className={`grid gap-y-0.5 ${col.links.length > 3 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {col.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`text-sm font-medium py-1.5 block transition-colors ${
                            pathname === link.href ? 'text-brand-600' : 'text-neutral-600'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <Link
            href="/soluciones"
            className={`px-3 py-3.5 text-base font-semibold rounded-xl transition-colors border-b border-neutral-50 ${
              isSolucionesActive ? 'text-brand-600 bg-brand-50/60' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            Soluciones
          </Link>

          {/* Contacto */}
          <Link
            href="/contacto"
            className={`px-3 py-3.5 text-base font-semibold rounded-xl transition-colors ${
              isContactoActive ? 'text-brand-600 bg-brand-50/60' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            Contacto
          </Link>

          {/* CTA móvil */}
          <div className="mt-5 pt-5 border-t border-neutral-100 flex flex-col gap-3">
            <a
              href="tel:+34854615199"
              id="nav-mobile-llamar"
              className="flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-2xl
                         transition-all duration-200 active:scale-[0.98] hover:shadow-lg hover:shadow-orange-500/25"
              style={{ background: 'linear-gradient(135deg, #f4a261 0%, #e06020 100%)' }}
              aria-label="Llamar al 854 615 199"
            >
              <PhoneIcon size={15} />
              Llamar
            </a>
            <a
              href={WA_URL}
              id="nav-mobile-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-2xl
                         transition-all duration-200 active:scale-[0.98] hover:shadow-lg hover:shadow-green-500/25"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon size={17} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
