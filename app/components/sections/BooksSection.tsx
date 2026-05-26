import { books } from "../../../src/content/home";
import { FineIcon } from "../ui/FineIcon";

export function BooksSection() {
  return (
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
                <FineIcon icon="bookOpen" className="size-5" />
              </span>
              <div>
                <p className="text-2xl leading-tight font-serif font-medium">{book}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Volume {index + 1} da biblioteca editorial para reforçar autoridade, educação
                  e marca pessoal.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
