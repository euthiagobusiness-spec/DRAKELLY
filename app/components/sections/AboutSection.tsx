import Image from "next/image";
import { doctorHighlights } from "../../../src/content/home";
import { FineIcon } from "../ui/FineIcon";

export function AboutSection() {
  return (
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
              <FineIcon icon="microscope" className="size-5 text-[var(--champagne)]" />
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
              <FineIcon icon="sparkles" className="size-5 text-[var(--champagne)]" />
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
  );
}
