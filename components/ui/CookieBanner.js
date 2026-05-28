'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Evitar problemas de hidratación en Next.js
    const consent = localStorage.getItem('activa-cookie-consent');
    if (!consent) {
      setIsRendered(true);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // Retraso sutil para mejor experiencia de usuario
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('activa-cookie-consent', 'accepted');
    setIsVisible(false);
    setTimeout(() => setIsRendered(false), 500); // Esperar a que termine la transición
  };

  const handleDecline = () => {
    localStorage.setItem('activa-cookie-consent', 'declined');
    setIsVisible(false);
    setTimeout(() => setIsRendered(false), 500);
  };

  if (!isRendered) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 transition-all duration-500 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(26,95,173,0.15)] text-neutral-800 dark:text-neutral-200">
        <div className="flex items-start gap-4">
          {/* Icono decorativo de cookie con gradiente corporativo */}
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1A5FAD] to-[#f4a261] flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" />
              <path d="M16 15.5v.01" />
              <path d="M12 12v.01" />
              <path d="M11 17v.01" />
              <path d="M7 14v.01" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 tracking-tight mb-1.5">
              Valoramos tu privacidad
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
              Utilizamos cookies propias y de terceros para analizar nuestros servicios, personalizar el contenido y optimizar tu experiencia de navegación en nuestra web. Puedes aceptar todas las cookies o configurar tus preferencias. Lee nuestra{' '}
              <Link
                href="/politica-de-cookies"
                className="text-[#1A5FAD] hover:text-[#f4a261] dark:text-[#f4a261] dark:hover:text-[#ec9450] font-semibold underline underline-offset-2 transition-colors"
              >
                Política de cookies
              </Link>{' '}
              para más detalles.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-end gap-3 mt-2">
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-initial inline-flex items-center justify-center font-bold text-white px-5 py-3 rounded-xl text-xs transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95 select-none"
            style={{ background: 'linear-gradient(135deg, #f4a261 0%, #e06020 100%)' }}
          >
            Aceptar todo
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-initial inline-flex items-center justify-center font-bold bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 transition-all duration-200 text-xs hover:scale-[1.02] active:scale-95 select-none"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
