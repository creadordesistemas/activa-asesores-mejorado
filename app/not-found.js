import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-3">Página no encontrada</h1>
        <p className="text-neutral-500 mb-8">
          La página que buscas no existe o ha sido movida. ¿Quizás querías ir a alguno de estos lugares?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            Ir al inicio
          </Link>
          <Link href="/servicios" className="btn-secondary">
            Ver servicios
          </Link>
          <Link href="/contacto" className="btn-ghost">
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
