import { ctaLinks } from "../../../src/config/links";
import { Action } from "../ui/Action";

export function FinalCtaSection() {
  return (
    <section id="whatsapp" className="mouse-field cta-mouse-field bg-[var(--wine)] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.55fr] md:items-end md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-white/82 uppercase">
            Fale conosco
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-medium tracking-normal md:text-6xl">
            Agende sua avaliação com a equipe da Dra. Kelly Ferraz.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/86">
            A página mantém o contato direto, sem formulário, banco de dados, cookies,
            analytics, pagamento ou área administrativa.
          </p>
        </div>
        <div className="glass-panel liquid-card motion-surface reveal-surface p-5">
          <Action
            href={ctaLinks.primaryContact.href}
            variant="editorial"
            external={ctaLinks.primaryContact.external}
            ariaLabel="Chamar a equipe da Dra. Kelly Ferraz no WhatsApp"
            icon="messageCircle"
          >
            Chamar no WhatsApp
          </Action>
        </div>
      </div>
    </section>
  );
}
