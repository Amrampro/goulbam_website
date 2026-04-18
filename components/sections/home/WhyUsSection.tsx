import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const points = [
  "Une approche structurée et professionnelle",
  "Une attention forte à l’expérience utilisateur",
  "Des solutions adaptées au contexte réel du client",
  "Une vision long terme de la qualité logicielle",
];

export default function WhyUsSection() {
  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Pourquoi nous choisir
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              Nous ne faisons pas juste du code. Nous concevons des solutions cohérentes.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Notre force réside dans la combinaison entre compréhension métier,
              exigence technique, sens du détail et capacité à structurer un
              projet du début à la mise en production.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-[32px] bg-[#202B59] p-8 text-white shadow-[0_25px_70px_rgba(32,43,89,0.25)]">
              <div className="grid gap-4">
                {points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}