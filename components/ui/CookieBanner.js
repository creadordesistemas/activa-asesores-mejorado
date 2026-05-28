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
      <div className="bg-neutral-900/95 dark:bg-neutral-950/95 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-6 shadow-2xl text-white">
        <div className="flex items-start gap-4">
          {/* Icono decorativo de cookie */}
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/25">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-900"
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
            <h3 className="font-bold text-base text-neutral-100 tracking-tight mb-1.5">
              Valoramos tu privacidad
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed mb-4">
              Utilizamos cookies propias y de terceros para analizar nuestros servicios, personalizar el contenido y optimizar tu experiencia de navegación en nuestra web. Puedes aceptar todas las cookies o configurar tus preferencias. Lee nuestra{' '}
              <Link
                href="/politica-de-cookies"
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors"
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
            className="flex-1 md:flex-initial inline-flex items-center justify-center font-bold px-5 py-2.5 rounded-xl text-xs text-neutral-900 transition-all duration-200 hover:shadow-lg active:scale-95 select-none"
            style={{ background: 'linear-gradient(135deg, #f4a261 0%, #e06020 100%)' }}
          >
            Aceptar todo
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-initial inline-flex items-center justify-center font-bold bg-neutral-800 hover:bg-neutral-700/80 text-neutral-300 hover:text-white px-5 py-2.5 rounded-xl border border-neutral-700/50 transition-all duration-200 text-xs active:scale-95 select-none"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
