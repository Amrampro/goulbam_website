import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  {
    title: "Vision",
    description:
      "Construire une entreprise capable de créer des solutions durables, utiles et ambitieuses pour l’Afrique et au-delà.",
  },
  {
    title: "Mission",
    description:
      "Accompagner les organisations et les porteurs de projets avec des solutions numériques, créatives et stratégiques à fort impact.",
  },
  {
    title: "Excellence",
    description:
      "Nous croyons dans le travail bien fait, la rigueur, la progression continue et l’attention au détail.",
  },
  {
    title: "Résilience",
    description:
      "Notre parcours nous a appris à transformer les défis en opportunités et à bâtir avec constance malgré les obstacles.",
  },
];

export default function AboutValuesSection() {
  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Ce qui nous définit
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Une entreprise fondée sur la vision, l’exigence et la constance
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.08}>
              <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#202B59]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}