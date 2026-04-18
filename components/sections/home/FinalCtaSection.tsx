import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-br from-[#202B59] via-[#16214A] to-[#0B1026] py-24 text-white">
      <Container>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
            Construisons quelque chose de solide
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Vous avez un projet ? Donnons-lui une vraie dimension.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Nous accompagnons les entreprises, porteurs de projets et organisations
            qui veulent concevoir des solutions numériques modernes, cohérentes et durables.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
            >
              Nous contacter
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Voir nos services
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}