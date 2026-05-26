import { contactItems } from "../../../src/content/home";
import { FineIcon } from "../ui/FineIcon";

export function ContactSection() {
  return (
    <section id="contato" className="bg-[var(--paper)] py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.75fr_1.25fr] md:px-8">
        <div>
          <p className="eyebrow">Localização e contato</p>
          <h2 className="section-title mt-5">
            Canais claros para conhecer a Renoova e agendar atendimento.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactItems.map((item) => (
            <article key={item.title} className="premium-card motion-surface reveal-surface hover-lift p-6">
              <FineIcon icon={item.icon} className="mb-9 size-6 text-[var(--wine)]" />
              <h3 className="text-2xl font-medium">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
