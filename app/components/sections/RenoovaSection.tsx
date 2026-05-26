import { renoovaValues } from "../../../src/content/home";
import { FineIcon } from "../ui/FineIcon";

export function RenoovaSection() {
  return (
    <section
      id="renoova"
      className="mouse-field renoova-mouse-field relative overflow-hidden bg-[var(--ink)] py-24 text-white md:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="eyebrow text-[var(--champagne)]">Renoova Medicina Estética</p>
          <h2 className="mt-5 max-w-xl text-4xl leading-tight font-medium tracking-normal md:text-6xl">
            Um ecossistema de renovação estética com método, acolhimento e refinamento.
          </h2>
          <p className="mt-8 max-w-md text-base leading-7 text-white/76">
            A Renoova aparece como extensão da autoridade médica: experiência, cuidado e
            clareza em cada ponto da jornada.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 md:pt-24">
          {renoovaValues.map((item) => (
            <article
              key={item.title}
              className="glass-panel liquid-card motion-surface reveal-surface hover-lift p-6"
            >
              <FineIcon icon={item.icon} className="mb-9 size-6 text-[var(--champagne)]" />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/74">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
