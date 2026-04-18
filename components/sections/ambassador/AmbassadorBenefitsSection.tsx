import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const benefits = [
  {
    title: "Une opportunité accessible",
    description:
      "Pas besoin d’être salarié ou partenaire officiel pour recommander un projet sérieux.",
  },
  {
    title: "Un gain motivant",
    description:
      "Chaque recommandation concrétisée peut générer un revenu intéressant selon la valeur du projet.",
  },
  {
    title: "Un principe gagnant-gagnant",
    description:
      "Le client bénéficie d’un service de qualité, l’entreprise grandit et vous êtes récompensé.",
  },
  {
    title: "Une dynamique de réseau",
    description:
      "Vous transformez votre carnet de contacts et votre crédibilité en opportunités concrètes.",
  },
];

export default function AmbassadorBenefitsSection() {
  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Pourquoi rejoindre ce programme
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              Recommander peut devenir une vraie source de valeur
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Si vous êtes souvent en contact avec des entrepreneurs,
              responsables, organisations, églises, marques ou porteurs de
              projets, ce programme vous permet de transformer cette proximité
              en opportunité rémunératrice.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.06}>
                <div className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#202B59]">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}