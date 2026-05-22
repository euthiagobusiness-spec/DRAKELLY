import type { Metadata } from "next";
import { env } from "../src/lib/env";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: env.NEXT_PUBLIC_SITE_URL
    ? new URL(env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: "Dra. Kelly Ferraz | Renoova",
  description:
    "Página institucional premium para Dra. Kelly Ferraz, Renoova, tratamentos estéticos, livros digitais e canais de agendamento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
