import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "2018", label: "Début de l’aventure avec WebTech" },
  { value: "50+", label: "Projets réalisés" },
  { value: "Millions", label: "Chiffre d’affaires cumulé" },
  { value: "7+", label: "Partenaires" },
];

export default function AboutStatsSection() {
  return (
    <section className="bg-[#202B59] py-24 text-white">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
            Quelques repères
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Une croissance construite avec constance
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Notre évolution repose sur des résultats, des collaborations, des
            projets livrés et une capacité à avancer avec sérieux dans la durée.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.08}>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                <p className="text-2xl font-black text-[#7DD3FC]">{stat.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}