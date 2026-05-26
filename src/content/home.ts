import type { IconName } from "../config/icons";

export type IconCardContent = {
  title: string;
  copy: string;
  icon: IconName;
};

export const heroPillars = ["Autoridade médica", "Naturalidade", "Ciência aplicada"];

export const manifestoLines = [
  "Beleza consciente não nasce do excesso. Nasce da leitura precisa do rosto, da pele, do tempo e da identidade.",
  "A estética médica premium respeita proporções, valoriza expressão e busca resultados que parecem pertencer à pessoa.",
  "Entre ciência e arte, o cuidado se torna assinatura: refinado, seguro, discreto e profundamente humano.",
];

export const doctorHighlights = [
  "Trajetória construída em medicina estética com critério clínico, escuta individualizada e repertório internacional.",
  "Visão estética orientada por naturalidade, proporção facial, textura da pele e longevidade.",
  "Atuação conectada a tendências globais de beleza elegante, madura e consciente.",
];

export const renoovaValues: IconCardContent[] = [
  {
    title: "Diagnóstico",
    icon: "stethoscope",
    copy: "Avaliação médica como ponto de partida para decisões precisas, seguras e proporcionais.",
  },
  {
    title: "Protocolo",
    icon: "microscope",
    copy: "Combinação de recursos com lógica científica, indicação criteriosa e acompanhamento.",
  },
  {
    title: "Experiência",
    icon: "sparkles",
    copy: "Ambiente, linguagem e jornada desenhados para uma percepção premium de cuidado.",
  },
];

export const specialties = [
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

export const educationPillars: IconCardContent[] = [
  {
    title: "Ciência",
    icon: "microscope",
    copy: "Condutas orientadas por anatomia, evidência, segurança e leitura clínica.",
  },
  {
    title: "Arte",
    icon: "palette",
    copy: "Atenção a luz, sombra, volume, textura e harmonia sem apagar singularidades.",
  },
  {
    title: "Educação",
    icon: "graduationCap",
    copy: "Conteúdo autoral para formar consciência estética e apoiar escolhas melhores.",
  },
];

export const books = [
  "Naturalidade como assinatura",
  "Beleza consciente na prática",
  "Pele, ciência e longevidade",
];

export const contactItems: IconCardContent[] = [
  {
    title: "Clínica",
    icon: "landmark",
    copy: "Renoova Medicina Estética como espaço de cuidado médico e experiência premium.",
  },
  {
    title: "Localização",
    icon: "mapPin",
    copy: "Endereço institucional da clínica preparado para comunicação oficial.",
  },
  {
    title: "Contato",
    icon: "phone",
    copy: "WhatsApp e canais oficiais organizados para agendamento direto.",
  },
];
