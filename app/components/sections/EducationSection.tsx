import { ctaLinks } from "../../../src/config/links";
import { educationPillars } from "../../../src/content/home";
import { Action } from "../ui/Action";
import { FineIcon } from "../ui/FineIcon";

export function EducationSection() {
  return (
    <section id="ciencia-arte-educacao" className="bg-[var(--sand)] py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div className="grid gap-4 sm:grid-cols-3 md:order-1">
          {educationPillars.map((item, index) => (
            <article
              key={item.title}
              className={`premium-card motion-surface reveal-surface hover-lift p-6 ${
                index === 1 ? "md:mt-12" : ""
              }`}
            >
              <FineIcon icon={item.icon} className="mb-10 size-7 text-[var(--aged-gold)]" />
              <h3 className="text-2xl font-medium">{item.title}</h3>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="self-center md:order-2">
          <p className="eyebrow">Ciência, arte e educação</p>
          <h2 className="section-title mt-5">
            Conhecimento médico, olhar artístico e orientação para escolhas conscientes.
          </h2>
          <Action href={ctaLinks.books.href} variant="link" icon="chevronRight">
            {ctaLinks.books.label}
          </Action>
        </div>
      </div>
    </section>
  );
}
