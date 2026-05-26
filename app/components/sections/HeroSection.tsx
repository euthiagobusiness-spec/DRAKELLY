import Image from "next/image";
import { ctaLinks } from "../../../src/config/links";
import { heroPillars } from "../../../src/content/home";
import { Action } from "../ui/Action";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="mouse-field hero-mouse-field relative min-h-[100svh] text-white md:min-h-[96vh]"
    >
      <Image
        src="/assets/renoova-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center blur-[1.6px] scale-[1.015]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,11,10,0.97)_0%,rgba(42,24,18,0.74)_42%,rgba(75,21,32,0.24)_76%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,10,0.08)_0%,rgba(14,11,10,0.16)_70%,rgba(247,242,234,0.98)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-7xl items-start gap-7 px-5 pt-[5.5rem] pb-14 md:min-h-[96vh] md:grid-cols-[1.08fr_0.72fr] md:items-start md:gap-10 md:px-8 md:pt-24 md:pb-24">
        <div className="max-w-3xl">
          <Image
            src="/assets/dra-kelly-emblem.webp"
            alt=""
            width={240}
            height={190}
            className="mb-6 h-14 w-auto object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.34)] md:mb-7 md:h-16"
            aria-hidden="true"
          />
          <div className="mb-6 flex flex-wrap gap-2 md:mb-8">
            {heroPillars.map((item) => (
              <span key={item} className="surface-chip">
                {item}
              </span>
            ))}
          </div>
          <p className="eyebrow text-[var(--champagne)]">
            Medicina estética com ciência, arte e naturalidade
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl leading-[0.94] font-medium tracking-normal text-balance md:mt-5 md:text-7xl lg:text-8xl">
            Dra. Kelly Ferraz
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 md:mt-8 md:text-xl">
            Uma presença institucional premium para apresentar trajetória médica,
            Renoova, especialidades, livros digitais e canais de agendamento com
            elegância, autoridade e beleza consciente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Action
              href={ctaLinks.primaryContact.href}
              external={ctaLinks.primaryContact.external}
              ariaLabel="Agendar avaliação pelo WhatsApp"
            >
              {ctaLinks.primaryContact.label}
            </Action>
            <Action href={ctaLinks.manifesto.href} variant="liquid" icon="sparkles">
              {ctaLinks.manifesto.label}
            </Action>
          </div>
          <aside className="hero-appointment-card glass-panel liquid-card motion-surface reveal-surface mt-6 p-5 md:hidden">
            <HeroAppointment compact />
          </aside>
        </div>

        <div className="hidden self-start md:flex md:flex-col md:gap-4">
          <aside className="hero-appointment-card glass-panel liquid-card motion-surface reveal-surface hover-lift p-5 lg:p-6">
            <HeroAppointment />
          </aside>

          <aside className="signature-card glass-panel liquid-card motion-surface reveal-surface hover-lift p-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--champagne)] uppercase">
              Assinatura estética
            </p>
            <p className="mt-4 text-[1.7rem] leading-snug font-serif text-white">
              Técnica médica, leitura artística e resultados que preservam identidade.
            </p>
            <div className="mt-5 h-px bg-white/18" />
            <p className="mt-4 text-sm leading-6 text-white/80">
              Uma composição visual editorial para comunicar confiança, maturidade e
              presença internacional.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HeroAppointment({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <p
        className={
          compact
            ? "text-xs font-semibold tracking-[0.2em] text-[var(--champagne)] uppercase"
            : "text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--champagne)] uppercase"
        }
      >
        Agenda premium
      </p>
      <h2
        className={
          compact
            ? "mt-3 text-2xl leading-tight font-serif text-white"
            : "mt-3 max-w-xl text-3xl leading-[1.05] font-serif text-white lg:text-[2.45rem]"
        }
      >
        Agende sua avaliação com a equipe da Dra. Kelly Ferraz.
      </h2>
      <p className={compact ? "mt-4 text-sm leading-6 text-white/78" : "mt-4 max-w-lg text-sm leading-6 text-white/78"}>
        {compact
          ? "Atendimento direto pelos canais oficiais, sem formulário nesta página."
          : "Atendimento direto pelos canais oficiais, sem formulário e sem coleta de dados nesta página."}
      </p>
      <div className={compact ? "mt-5" : "mt-5 max-w-xs"}>
        <Action
          href={ctaLinks.heroBooking.href}
          variant="editorial"
          external={ctaLinks.heroBooking.external}
          ariaLabel="Chamar a equipe da Dra. Kelly Ferraz no WhatsApp"
          icon="messageCircle"
        >
          {ctaLinks.heroBooking.label}
        </Action>
      </div>
    </>
  );
}
