'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LegalLayout({ title, lastUpdated, children }) {
  const pathname = usePathname();

  const links = [
    { name: 'Aviso Legal', href: '/aviso-legal' },
    { name: 'Política de Privacidad', href: '/politica-de-privacidad' },
    { name: 'Política de Cookies', href: '/politica-de-cookies' },
  ];

  return (
    <>
      {/* Cabecera legal con orbs de marca */}
      <section className="relative overflow-hidden gradient-bg pt-36 pb-14 md:pb-16 px-6 md:px-8 border-b border-neutral-100">
        {/* Orbs de fondo - branding de la home */}
        <div className="absolute top-[-80px] left-[-120px] w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-80px] w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200/50 px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-[0.08em]">
            Información legal y corporativa
          </div>
          <h1 className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-3">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-neutral-400 font-medium">Última actualización: {lastUpdated}</p>
          )}
        </div>
      </section>

      {/* Navegación horizontal en móvil */}
      <div className="lg:hidden bg-white border-b border-neutral-100 sticky top-[72px] z-30">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-1 py-3 w-max min-w-full">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-[13px] font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-50 text-[#1A5FAD] border border-brand-200/60'
                      : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contenido principal en dos columnas */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Navegación lateral pegajosa en desktop */}
            <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 space-y-2">
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-3 px-4">
                Documentación
              </div>
              <nav className="space-y-1">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-2xl text-[14px] font-bold transition-all duration-200 border-l-4 ${
                        isActive
                          ? 'bg-brand-50 text-[#1A5FAD] border-[#1A5FAD] pl-3'
                          : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50 border-transparent'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Tarjeta de ayuda corporativa */}
              <div className="mt-8 p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wide mb-2">¿Necesitas ayuda?</h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Si tienes cualquier duda legal o quieres más información sobre tus derechos de privacidad.
                </p>
                <a
                  href="mailto:privacidad@activaasesores.com"
                  className="text-xs font-bold text-[#1A5FAD] hover:text-[#f4a261] transition-colors break-words"
                >
                  privacidad@activaasesores.com
                </a>
              </div>
            </aside>

            {/* Área de contenido del documento */}
            <div className="lg:col-span-9 prose prose-neutral max-w-none
              prose-headings:font-extrabold prose-headings:text-neutral-900 prose-headings:tracking-tight
              prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-neutral-100 prose-h2:pb-2
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-[15px] prose-p:text-neutral-500 prose-p:leading-[1.75] prose-p:mb-5
              prose-ul:my-5 prose-li:text-[15px] prose-li:text-neutral-500 prose-li:leading-[1.7] prose-li:my-1
              prose-a:text-[#1A5FAD] prose-a:font-semibold hover:prose-a:text-[#f4a261] prose-a:underline hover:prose-a:no-underline prose-a:underline-offset-4
              prose-strong:text-neutral-800 prose-strong:font-bold
            ">
              {children}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
