import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | Dra. Kelly Ferraz",
  description:
    "Política de Privacidade da página institucional Dra. Kelly Ferraz / Renoova Medicina Estética.",
};

const sections = [
  {
    title: "1. Controlador",
    body: "Para fins desta página institucional, o controlador indicado é Dra. Kelly Ferraz / Renoova Medicina Estética. Os dados oficiais de identificação, endereço e canal jurídico devem ser revisados e completados antes da publicação oficial.",
  },
  {
    title: "2. Dados tratados nesta versão",
    body: "Nesta versão, o site não possui formulário, login, área administrativa, checkout, upload, analytics, pixel ou cookies não essenciais. A página não coleta diretamente dados pessoais por formulário.",
  },
  {
    title: "3. Links externos",
    body: "Ao clicar em WhatsApp, Instagram, TikTok, Facebook, Hotmart ou outros canais externos, o usuário passa a interagir com plataformas de terceiros. Essas plataformas podem tratar dados pessoais conforme suas próprias políticas, termos e configurações.",
  },
  {
    title: "4. Finalidades",
    body: "As finalidades da página são institucionais: apresentar trajetória profissional, Renoova Medicina Estética, especialidades, conteúdos digitais e canais oficiais de contato ou agendamento.",
  },
  {
    title: "5. Cookies",
    body: "O MVP não utiliza cookies não essenciais nem ferramentas de rastreamento. Caso analytics, pixels ou recursos similares sejam adicionados futuramente, será necessária nova avaliação de base legal, transparência e, quando aplicável, consentimento.",
  },
  {
    title: "6. Retenção",
    body: "Como não há coleta direta de dados pessoais pelo site nesta versão, não há retenção local pelo projeto. Dados enviados voluntariamente em plataformas externas seguem as políticas e prazos dessas plataformas e da operação da clínica.",
  },
  {
    title: "7. Direitos do titular",
    body: "O titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revogação de consentimento, conforme aplicável na LGPD.",
  },
  {
    title: "8. Segurança da informação",
    body: "O projeto adota medidas proporcionais ao escopo, incluindo HTTPS em produção, headers de segurança, CSP, ausência de coleta desnecessária e validação de URLs configuradas por ambiente.",
  },
  {
    title: "9. Transferência internacional",
    body: "O site pode direcionar o usuário para plataformas globais de terceiros. Eventuais transferências internacionais decorrentes dessas interações seguem as políticas das respectivas plataformas e devem ser avaliadas juridicamente.",
  },
  {
    title: "10. Revisão jurídica",
    body: "Este texto é uma base técnica de transparência e deve ser revisado por assessoria jurídica antes do uso oficial em produção.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <Link href="/" className="eyebrow inline-block">
          Voltar ao site
        </Link>
        <h1 className="section-title mt-5">Política de Privacidade</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          Página institucional Dra. Kelly Ferraz / Renoova Medicina Estética.
          Última revisão técnica: maio de 2026.
        </p>
        <div className="mt-12 space-y-8">
          {sections.map((section) => (
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
