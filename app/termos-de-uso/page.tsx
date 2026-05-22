import Link from "next/link";

export const metadata = {
  title: "Termos de Uso | Dra. Kelly Ferraz",
  description:
    "Termos de Uso da página institucional Dra. Kelly Ferraz / Renoova Medicina Estética.",
};

const terms = [
  {
    title: "1. Natureza informativa",
    body: "Este site possui finalidade institucional e informativa. O conteúdo não substitui consulta, diagnóstico, prescrição, avaliação médica individualizada ou acompanhamento profissional.",
  },
  {
    title: "2. Agendamento e canais externos",
    body: "Links para WhatsApp, redes sociais, plataformas de conteúdo ou venda direcionam o usuário para ambientes de terceiros, sujeitos a termos, políticas e disponibilidade próprios.",
  },
  {
    title: "3. Conteúdo médico e resultados",
    body: "Informações sobre especialidades e tratamentos são gerais. Resultados variam conforme avaliação médica, indicação, histórico, anatomia, hábitos e resposta individual.",
  },
  {
    title: "4. Propriedade intelectual",
    body: "Textos, identidade visual, composição editorial e materiais apresentados pertencem aos respectivos titulares e não devem ser copiados ou reutilizados sem autorização.",
  },
  {
    title: "5. Uso adequado",
    body: "É proibido utilizar o site para finalidade ilícita, tentar interferir em sua segurança, explorar vulnerabilidades, automatizar abusivamente acessos ou deturpar suas informações.",
  },
  {
    title: "6. Revisão jurídica",
    body: "Este documento é uma base técnica e deve ser validado juridicamente antes da publicação oficial.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <Link href="/" className="eyebrow inline-block">
          Voltar ao site
        </Link>
        <h1 className="section-title mt-5">Termos de Uso</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          Página institucional Dra. Kelly Ferraz / Renoova Medicina Estética.
          Última revisão técnica: maio de 2026.
        </p>
        <div className="mt-12 space-y-8">
          {terms.map((section) => (
            <article key={section.title} className="border-t border-[var(--line)] pt-6">
              <h2 className="text-3xl font-medium">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
