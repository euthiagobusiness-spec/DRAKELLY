import { manifestoLines } from "../../../src/content/home";

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative bg-[var(--ivory)] py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[0.72fr_1.28fr] md:px-8">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="eyebrow">Manifesto de beleza</p>
          <h2 className="section-title mt-5">
            Naturalidade é a forma mais sofisticada de presença.
          </h2>
        </div>
        <div className="space-y-6">
          {manifestoLines.map((line, index) => (
            <article key={line} className="editorial-line motion-surface reveal-surface hover-lift">
              <span className="font-serif text-4xl text-[var(--aged-gold)]">
                0{index + 1}
              </span>
              <p className="text-xl leading-9 text-[var(--muted)]">{line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
