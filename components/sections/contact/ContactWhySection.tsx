import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const points = [
  {
    title: "Écoute du besoin",
    description:
      "Nous prenons le temps de comprendre votre demande avant de proposer une orientation.",
  },
  {
    title: "Réponse professionnelle",
    description:
      "Nos échanges s’inscrivent dans une logique claire, structurée et orientée solution.",
  },
  {
    title: "Approche multidisciplinaire",
    description:
      "Nous combinons technologie, stratégie, créativité et exécution selon le projet.",
  },
  {
    title: "Vision de long terme",
    description:
      "Nous cherchons à construire des solutions utiles, cohérentes et durables.",
  },
];

export default function ContactWhySection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Pourquoi nous contacter
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Un échange qui peut transformer une idée en projet structuré
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            GoulBAM Enterprises accompagne les projets avec une approche
            sérieuse, ambitieuse et adaptée à la réalité de chaque besoin.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {points.map((point, index) => (
            <AnimatedSection key={point.title} delay={index * 0.06}>
              <div className="h-full rounded-[28px] border border-slate-200 bg-[#F8FBFF] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#202B59]">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {point.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}