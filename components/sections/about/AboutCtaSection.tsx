import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutCtaSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Continuons l’histoire
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-5xl">
            Parlons de votre projet et construisons quelque chose de solide
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Nous mettons notre expérience, notre vision et notre exigence au
            service des projets qui veulent grandir avec cohérence et impact.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.25)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
            >
              Nous contacter
            </Link>

            <Link
              href="/projets"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-[#202B59] transition hover:bg-slate-50"
            >
              Voir nos projets
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}