import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MotionRuntime } from "./components/MotionRuntime";
import { AboutSection } from "./components/sections/AboutSection";
import { BooksSection } from "./components/sections/BooksSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { FinalCtaSection } from "./components/sections/FinalCtaSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ManifestoSection } from "./components/sections/ManifestoSection";
import { RenoovaSection } from "./components/sections/RenoovaSection";
import { SpecialtiesSection } from "./components/sections/SpecialtiesSection";

export default function Home() {
  return (
    <main className="ambient-shell min-h-screen overflow-x-hidden bg-[var(--ivory)] text-[var(--ink)]">
      <MotionRuntime />
      <Header />
      <HeroSection />
      <ManifestoSection />
      <AboutSection />
      <RenoovaSection />
      <SpecialtiesSection />
      <EducationSection />
      <BooksSection />
      <ContactSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
