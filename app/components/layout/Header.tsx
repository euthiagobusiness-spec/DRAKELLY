import Image from "next/image";
import { navLinks, siteLinks } from "../../../src/config/links";
import { Action } from "../ui/Action";

export function Header() {
  return (
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
        <Action href={siteLinks.whatsappSection} variant="ghost" icon="calendarCheck">
          WhatsApp
        </Action>
      </nav>
    </header>
  );
}
