'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-red-50 text-red-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-3">Algo ha ido mal</h1>
        <p className="text-neutral-500 mb-8">
          Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo o contacta con nosotros si el problema persiste.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={reset} className="btn-primary">
            Intentar de nuevo
          </button>
          <Link href="/" className="btn-secondary">
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
