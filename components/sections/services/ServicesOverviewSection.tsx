import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const items = [
  "Développement web et applicatif",
  "Applications mobiles",
  "Consulting & conseil",
  "Marketing digital",
  "Conception architecturale",
  "Design graphique & identité visuelle",
  "Accompagnement digital",
  "Formation via Nexium Institute",
];

export default function ServicesOverviewSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Nos domaines d’intervention
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Une entreprise multidisciplinaire au service de votre croissance
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Nous intervenons sur plusieurs dimensions du projet : stratégie,
            conception, design, développement, communication et accompagnement.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <AnimatedSection key={item} delay={index * 0.05}>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FBFF] px-5 py-4 text-sm font-semibold text-[#202B59] shadow-sm">
                {item}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}