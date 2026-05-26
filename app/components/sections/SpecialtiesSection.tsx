import { ctaLinks } from "../../../src/config/links";
import { specialties } from "../../../src/content/home";
import { Action } from "../ui/Action";
import { FineIcon } from "../ui/FineIcon";

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="bg-[var(--paper)] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <p className="eyebrow">Especialidades</p>
            <h2 className="section-title mt-5 max-w-3xl">
              Protocolos para beleza natural, saúde da pele e longevidade estética.
            </h2>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <Action
              href={ctaLinks.primaryContact.href}
              external={ctaLinks.primaryContact.external}
              variant="editorial"
            >
              Agendar avaliação
            </Action>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-12">
          {specialties.map((item, index) => (
            <article
              key={item.title}
              className={`premium-card motion-surface reveal-surface hover-lift p-7 ${
                index === 0 || index === 3 ? "md:col-span-5" : "md:col-span-7"
              }`}
            >
              <div className="flex items-center justify-between gap-6">
                <span className="text-xs font-semibold tracking-[0.18em] text-[var(--aged-gold)] uppercase">
                  {item.tag}
                </span>
                <FineIcon icon="syringe" className="size-5 text-[var(--wine)]" />
              </div>
              <h3 className="mt-10 text-3xl leading-tight font-medium">{item.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
