import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { developerLinks, siteLinks } from "../../../src/config/links";
import { FineIcon } from "../ui/FineIcon";

export function Footer() {
  return (
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
        <div
          className="developer-card motion-surface reveal-surface"
          style={{ "--developer-image": `url(${developerLinks.image})` } as CSSProperties}
        >
          <p className="text-[0.68rem] font-semibold tracking-[0.24em] text-[var(--champagne)] uppercase">
            {developerLinks.role}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="developer-avatar" aria-hidden="true" />
            <div>
              <p className="text-xl leading-tight font-serif text-white">
                {developerLinks.name}
              </p>
              <div className="mt-3 grid gap-2">
                <a
                  href={developerLinks.instagramUrl}
                  className="developer-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir Instagram ${developerLinks.instagramHandle}`}
                >
                  <span className="developer-instagram-icon" aria-hidden="true" />
                  <span>{developerLinks.instagramHandle}</span>
                </a>
                <a
                  href={developerLinks.emailUrl}
                  className="developer-pill"
                  aria-label={`Enviar email para ${developerLinks.email}`}
                >
                  <FineIcon icon="mail" className="size-4" />
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
  );
}
