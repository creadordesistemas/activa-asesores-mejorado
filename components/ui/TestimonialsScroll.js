'use client';

export default function TestimonialsArrows() {
  const scroll = (dir) => {
    const el = document.getElementById('testimonials-scroll');
    if (el) el.scrollBy({ left: dir * 370, behavior: 'smooth' });
  };

  return (
    <>
      {/* Flecha izquierda */}
      <button
        id="testimonials-prev"
        onClick={() => scroll(-1)}
        className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:border-accent-400 text-neutral-400 hover:text-accent-400 transition-all duration-200 items-center justify-center"
        aria-label="Anterior"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Flecha derecha */}
      <button
        id="testimonials-next"
        onClick={() => scroll(1)}
        className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:border-accent-400 text-neutral-400 hover:text-accent-400 transition-all duration-200 items-center justify-center"
        aria-label="Siguiente"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </>
  );
}
