import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    title: "01. Écoute & compréhension",
    description:
      "Nous analysons votre besoin, votre contexte, vos objectifs et les enjeux réels du projet.",
  },
  {
    title: "02. Structuration & cadrage",
    description:
      "Nous définissons une orientation claire, les priorités, les fonctionnalités et la vision d’exécution.",
  },
  {
    title: "03. Conception & réalisation",
    description:
      "Nous passons à la création, au design, au développement ou à l’accompagnement selon le service concerné.",
  },
  {
    title: "04. Livraison & accompagnement",
    description:
      "Nous livrons une solution exploitable et nous restons présents pour le suivi, l’ajustement et l’évolution.",
  },
];

export default function ServicesProcessSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Notre méthode
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Une manière de travailler claire, structurée et orientée résultat
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Nous avançons avec méthode afin de transformer une idée ou un besoin
            en solution concrète, cohérente et bien exécutée.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.08}>
              <div className="h-full rounded-[28px] border border-slate-200 bg-[#F8FBFF] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#202B59]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}