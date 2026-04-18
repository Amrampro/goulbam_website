import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionImageCard from "@/components/ui/SectionImageCard";

export default function NexiumCtaSection() {
  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[36px]">
            <SectionImageCard
              src="/images/nexium/cta.jpg"
              alt="Rejoindre Nexium Institute"
              className="min-h-[420px] w-full"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1026]/90 via-[#202B59]/75 to-[#05A2DA]/35" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-8 py-10 sm:px-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
                  Rejoindre Nexium Institute
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
                  Développez des compétences utiles pour votre avenir numérique
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-200">
                  Que vous soyez débutant, étudiant, professionnel ou structure,
                  Nexium Institute peut vous accompagner dans votre montée en
                  compétences.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
                  >
                    Nous contacter
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Voir nos autres services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}