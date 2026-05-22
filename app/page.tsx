import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  AtSign,
  BookOpen,
  CalendarCheck,
  ChevronRight,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Palette,
  Phone,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { MotionRuntime } from "./components/MotionRuntime";
import { ctaLinks, developerLinks, navLinks, siteLinks } from "../src/config/links";

type ActionProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "editorial" | "link" | "liquid";
  external?: boolean;
  ariaLabel?: string;
  icon?: LucideIcon;
};

type IconCard = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const iconStroke = 1.45;

const heroPillars = ["Autoridade médica", "Naturalidade", "Ciência aplicada"];

const manifestoLines = [
  "Beleza consciente não nasce do excesso. Nasce da leitura precisa do rosto, da pele, do tempo e da identidade.",
  "A estética médica premium respeita proporções, valoriza expressão e busca resultados que parecem pertencer à pessoa.",
  "Entre ciência e arte, o cuidado se torna assinatura: refinado, seguro, discreto e profundamente humano.",
];

const doctorHighlights = [
  "Trajetória construída em medicina estética com critério clínico, escuta individualizada e repertório internacional.",
  "Visão estética orientada por naturalidade, proporção facial, textura da pele e longevidade.",
  "Atuação conectada a tendências globais de beleza elegante, madura e consciente.",
];

const renoovaValues: IconCard[] = [
  {
    title: "Diagnóstico",
    icon: Stethoscope,
    copy: "Avaliação médica como ponto de partida para decisões precisas, seguras e proporcionais.",
  },
  {
    title: "Protocolo",
    icon: Microscope,
    copy: "Combinação de recursos com lógica científica, indicação criteriosa e acompanhamento.",
  },
  {
    title: "Experiência",
    icon: Sparkles,
    copy: "Ambiente, linguagem e jornada desenhados para uma percepção premium de cuidado.",
  },
];

const specialties = [
  {
    title: "Harmonização facial",
    tag: "Proporção",
    copy: "Planejamento de volumes, contornos e expressão com resultado sutil e fiel à identidade.",
  },
  {
    title: "Bioestimulação",
    tag: "Pele",
    copy: "Estratégias progressivas para firmeza, viço, textura e qualidade global da pele.",
  },
  {
    title: "Injetáveis e tecnologias",
    tag: "Precisão",
    copy: "Recursos combinados com indicação médica, previsibilidade e acabamento natural.",
  },
  {
    title: "Longevidade estética",
    tag: "Tempo",
    copy: "Cuidado contínuo para envelhecer com saúde, expressão e sofisticação.",
  },
];

const educationPillars: IconCard[] = [
  {
    title: "Ciência",
    icon: Microscope,
    copy: "Condutas orientadas por anatomia, evidência, segurança e leitura clínica.",
  },
  {
    title: "Arte",
    icon: Palette,
    copy: "Atenção a luz, sombra, volume, textura e harmonia sem apagar singularidades.",
  },
  {
    title: "Educação",
    icon: GraduationCap,
    copy: "Conteúdo autoral para formar consciência estética e apoiar escolhas melhores.",
  },
];

const books = [
  "Naturalidade como assinatura",
  "Beleza consciente na prática",
  "Pele, ciência e longevidade",
];

const contactItems: IconCard[] = [
  {
    title: "Clínica",
    icon: Landmark,
    copy: "Renoova Medicina Estética como espaço de cuidado médico e experiência premium.",
  },
  {
    title: "Localização",
    icon: MapPin,
    copy: "Endereço institucional da clínica preparado para comunicação oficial.",
  },
  {
    title: "Contato",
    icon: Phone,
    copy: "WhatsApp e canais oficiais organizados para agendamento direto.",
  },
];

function Action({
  href,
  children,
  variant = "primary",
  external = false,
  ariaLabel,
  icon: Icon = ArrowRight,
}: ActionProps) {
  const className = `action action-${variant}`;
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} className={className} aria-label={ariaLabel} {...externalProps}>
      <span>{children}</span>
      <Icon className="size-4" strokeWidth={iconStroke} aria-hidden="true" />
    </a>
  );
}

function FineIcon({ icon: Icon, className = "" }: { icon: LucideIcon; className?: string }) {
  return <Icon className={className || "size-6"} strokeWidth={iconStroke} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="ambient-shell min-h-screen overflow-x-hidden bg-[var(--ivory)] text-[var(--ink)]">
      <MotionRuntime />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(14,11,10,0.68)] text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8">
          <a href={siteLinks.home} className="group flex items-center gap-3" aria-label="Início">
            <span className="grid size-12 place-items-center">
              <Image
                src="/assets/dra-kelly-emblem.webp"
                alt="Dra. Kelly Ferraz Medicina Estética"
                width={240}
                height={190}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                priority
              />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-medium tracking-[0.18em] uppercase">
                Dra. Kelly Ferraz
              </span>
              <span className="block text-xs text-white/66">Medicina Estética</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-medium tracking-[0.14em] text-white/72 uppercase md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <Action href={siteLinks.whatsappSection} variant="ghost" icon={CalendarCheck}>
            WhatsApp
          </Action>
        </nav>
      </header>

      <section id="inicio" className="mouse-field hero-mouse-field relative min-h-[100svh] text-white md:min-h-[96vh]">
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
              <Action href={ctaLinks.manifesto.href} variant="liquid" icon={Sparkles}>
                {ctaLinks.manifesto.label}
              </Action>
            </div>
            <aside className="hero-appointment-card glass-panel liquid-card motion-surface reveal-surface mt-6 p-5 md:hidden">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--champagne)] uppercase">
                Agenda premium
              </p>
              <h2 className="mt-3 text-2xl leading-tight font-serif text-white">
                Agende sua avaliação com a equipe da Dra. Kelly Ferraz.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/78">
                Atendimento direto pelos canais oficiais, sem formulário nesta página.
              </p>
              <div className="mt-5">
                <Action
                  href={ctaLinks.heroBooking.href}
                  variant="editorial"
                  external={ctaLinks.heroBooking.external}
                  ariaLabel="Chamar a equipe da Dra. Kelly Ferraz no WhatsApp"
                  icon={MessageCircle}
                >
                  {ctaLinks.heroBooking.label}
                </Action>
              </div>
            </aside>
          </div>

          <div className="hidden self-start md:flex md:flex-col md:gap-4">
            <aside className="hero-appointment-card glass-panel liquid-card motion-surface reveal-surface hover-lift p-5 lg:p-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--champagne)] uppercase">
                Agenda premium
              </p>
              <h2 className="mt-3 max-w-xl text-3xl leading-[1.05] font-serif text-white lg:text-[2.45rem]">
                Agende sua avaliação com a equipe da Dra. Kelly Ferraz.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/78">
                Atendimento direto pelos canais oficiais, sem formulário e sem coleta de dados nesta página.
              </p>
              <div className="mt-5 max-w-xs">
                <Action
                  href={ctaLinks.heroBooking.href}
                  variant="editorial"
                  external={ctaLinks.heroBooking.external}
                  ariaLabel="Chamar a equipe da Dra. Kelly Ferraz no WhatsApp"
                  icon={MessageCircle}
                >
                  {ctaLinks.heroBooking.label}
                </Action>
              </div>
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
                Uma composição visual editorial para comunicar confiança, maturidade e presença internacional.
              </p>
            </aside>
          </div>
        </div>
      </section>

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

      <section id="sobre" className="bg-[var(--paper)] py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.92fr_1.08fr] md:px-8">
          <div className="about-visual-card soft-rounded motion-surface reveal-surface hover-lift relative flex min-h-[32rem] flex-col items-center justify-start overflow-hidden border border-[var(--line)] bg-[var(--coffee)] px-8 pt-14 pb-8 text-center text-white md:min-h-[34rem] md:px-10 md:pt-16 md:pb-10">
            <Image
              src="/assets/dra-kelly-logo.webp"
              alt="Dra. Kelly Ferraz Medicina Estética"
              width={720}
              height={457}
              className="h-auto w-64 object-contain md:w-80"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(14,11,10,0.66))]" />
            <div className="brand-statement mt-12 w-full max-w-md md:mt-16">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[rgba(217,195,154,0.42)] bg-[rgba(217,195,154,0.1)]">
                <FineIcon icon={Microscope} className="size-5 text-[var(--champagne)]" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-[var(--champagne)] uppercase">
                  Assinatura médica
                </p>
                <p className="mt-2 text-xl leading-snug font-serif text-white md:text-2xl">
                  Precisão clínica, sensibilidade estética e naturalidade em cada detalhe.
                </p>
              </div>
            </div>
            <div className="brand-seal mt-auto w-full max-w-md">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[rgba(217,195,154,0.34)] bg-white/8">
                <FineIcon icon={Sparkles} className="size-5 text-[var(--champagne)]" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold tracking-[0.22em] text-[var(--champagne)] uppercase">
                  Renoova
                </p>
                <p className="mt-1 text-sm leading-5 text-white/72">
                  Ciência, arte e naturalidade em assinatura médica.
                </p>
              </div>
            </div>
          </div>
          <div className="self-center">
            <p className="eyebrow">Sobre Dra. Kelly Ferraz</p>
            <h2 className="section-title mt-5">
              Autoridade médica traduzida em cuidado sutil, preciso e humano.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              A narrativa posiciona a Dra. Kelly como uma referência em medicina
              estética premium: técnica, sensibilidade artística, escuta clínica e
              compromisso com resultados naturais.
            </p>
            <div className="mt-10 grid gap-4">
              {doctorHighlights.map((item, index) => (
                <article key={item} className="horizontal-note motion-surface reveal-surface hover-lift">
                  <span className="font-serif text-3xl text-[var(--aged-gold)]">
                    0{index + 1}
                  </span>
                  <p className="text-base leading-7 text-[var(--muted)]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="renoova" className="mouse-field renoova-mouse-field relative overflow-hidden bg-[var(--ink)] py-24 text-white md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div>
            <p className="eyebrow text-[var(--champagne)]">Renoova Medicina Estética</p>
            <h2 className="mt-5 max-w-xl text-4xl leading-tight font-medium tracking-normal md:text-6xl">
              Um ecossistema de renovação estética com método, acolhimento e refinamento.
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-white/76">
              A Renoova aparece como extensão da autoridade médica: experiência, cuidado e clareza em cada ponto da jornada.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:pt-24">
            {renoovaValues.map((item) => (
              <article key={item.title} className="glass-panel liquid-card motion-surface reveal-surface hover-lift p-6">
                <FineIcon icon={item.icon} className="mb-9 size-6 text-[var(--champagne)]" />
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/74">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              <Action href={ctaLinks.primaryContact.href} external={ctaLinks.primaryContact.external} variant="editorial">
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
                  <FineIcon icon={Syringe} className="size-5 text-[var(--wine)]" />
                </div>
                <h3 className="mt-10 text-3xl leading-tight font-medium">{item.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ciencia-arte-educacao" className="bg-[var(--sand)] py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8">
          <div className="grid gap-4 sm:grid-cols-3 md:order-1">
            {educationPillars.map((item, index) => (
              <article
                key={item.title}
                className={`premium-card motion-surface reveal-surface hover-lift p-6 ${index === 1 ? "md:mt-12" : ""}`}
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
            <Action href={ctaLinks.books.href} variant="link" icon={ChevronRight}>
              {ctaLinks.books.label}
            </Action>
          </div>
        </div>
      </section>

      <section id="livros" className="bg-[var(--ivory)] py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="eyebrow">Livros e conteúdos digitais</p>
            <h2 className="section-title mt-5">
              Conteúdo autoral para educar o olhar e sustentar uma estética mais madura.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
              A linha editorial amplia a presença da Dra. Kelly para além do consultório:
              curadoria, educação e construção de repertório para pacientes e audiência premium.
            </p>
          </div>
          <div className="space-y-4 md:pt-16">
            {books.map((book, index) => (
              <article key={book} className="book-row motion-surface reveal-surface hover-lift">
                <span className="grid size-12 shrink-0 place-items-center border border-[var(--line)] text-[var(--aged-gold)]">
                  <BookOpen className="size-5" strokeWidth={iconStroke} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl leading-tight font-serif font-medium">{book}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Volume {index + 1} da biblioteca editorial para reforçar autoridade, educação e marca pessoal.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              icon={MessageCircle}
            >
              Chamar no WhatsApp
            </Action>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[var(--ink)] px-5 py-8 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/64 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-20 items-center">
              <Image
                src="/assets/dra-kelly-logo.webp"
                alt="Dra. Kelly Ferraz Medicina Estética"
                width={720}
                height={457}
                className="h-16 w-auto object-contain"
              />
            </span>
            <p>Dra. Kelly Ferraz / Renoova Medicina Estética</p>
          </div>
          <div className="developer-card motion-surface reveal-surface">
            <p className="text-xs font-semibold tracking-[0.28em] text-[var(--champagne)] uppercase">
              {developerLinks.role}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="developer-avatar" aria-hidden="true">
                TC
              </div>
              <div>
                <p className="text-2xl leading-tight font-serif text-white">
                  {developerLinks.name}
                </p>
                <div className="mt-4 grid gap-3">
                  <a
                    href={developerLinks.instagramUrl}
                    className="developer-pill"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir Instagram ${developerLinks.instagramHandle}`}
                  >
                    <AtSign className="size-4" strokeWidth={iconStroke} aria-hidden="true" />
                    <span>{developerLinks.instagramHandle}</span>
                  </a>
                  <a
                    href={developerLinks.emailUrl}
                    className="developer-pill"
                    aria-label={`Enviar email para ${developerLinks.email}`}
                  >
                    <Mail className="size-4" strokeWidth={iconStroke} aria-hidden="true" />
                    <span>{developerLinks.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-5 lg:col-span-2" aria-label="Links legais">
            <Link href={siteLinks.privacy} className="nav-link">
              Política de Privacidade
            </Link>
            <Link href={siteLinks.terms} className="nav-link">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
