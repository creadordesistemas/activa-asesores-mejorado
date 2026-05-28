export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <>
      <section className="gradient-bg pt-32 pb-10 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full mb-4">
            Información legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-neutral-400">Última actualización: {lastUpdated}</p>
          )}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-neutral prose-sm md:prose-base max-w-none
          prose-headings:font-bold prose-headings:text-neutral-900
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
          prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-neutral-500 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-neutral-500 prose-li:leading-relaxed
          prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-neutral-700
        ">
          {children}
        </div>
      </section>
    </>
  );
}
