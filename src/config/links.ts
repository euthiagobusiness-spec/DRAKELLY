import { externalLinks } from "../lib/env";

export const siteLinks = {
  home: "#inicio",
  manifesto: "#manifesto",
  about: "#sobre",
  renoova: "#renoova",
  specialties: "#especialidades",
  education: "#ciencia-arte-educacao",
  books: "#livros",
  contact: "#contato",
  whatsappSection: "#whatsapp",
  privacy: "/politica-de-privacidade",
  terms: "/termos-de-uso",
  whatsapp: externalLinks.whatsapp,
};

export const navLinks = [
  { label: "Manifesto", href: siteLinks.manifesto },
  { label: "Renoova", href: siteLinks.renoova },
  { label: "Especialidades", href: siteLinks.specialties },
  { label: "Contato", href: siteLinks.contact },
];

export const ctaLinks = {
  heroBooking: {
    label: "Chamar no WhatsApp",
    href: siteLinks.whatsapp,
    external: true,
  },
  primaryContact: {
    label: "Agendar pelo WhatsApp",
    href: siteLinks.whatsapp,
    external: true,
  },
  manifesto: {
    label: "Ler manifesto",
    href: siteLinks.manifesto,
  },
  specialties: {
    label: "Ver especialidades",
    href: siteLinks.specialties,
  },
  books: {
    label: "Conhecer conteúdos",
    href: siteLinks.books,
  },
};

export const developerLinks = {
  name: "Thiago Carvalho",
  role: "Desenvolvido por",
  image: "/assets/thiago-carvalho.webp",
  instagramHandle: "@thiagocarvalho.dev",
  instagramUrl: "https://www.instagram.com/thiagocarvalho.dev",
  email: "euthiagobusiness@gmail.com",
  emailUrl: "mailto:euthiagobusiness@gmail.com",
};
