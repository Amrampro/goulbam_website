import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    title: "1. Vous nous recommandez",
    description:
      "Vous mettez GoulBAM Enterprises en relation avec une personne, une entreprise ou une organisation ayant un projet.",
  },
  {
    title: "2. Le client précise son besoin",
    description:
      "Nous échangeons avec le client, analysons son besoin et proposons une solution adaptée.",
  },
  {
    title: "3. Le projet est validé",
    description:
      "Si le client décide d’avancer avec nous et effectue un paiement, votre recommandation est prise en compte.",
  },
  {
    title: "4. Vous recevez 10%",
    description:
      "Vous bénéficiez automatiquement de 10% du montant versé par le client que vous avez amené.",
  },
];

export default function AmbassadorHowItWorksSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Comment ça marche
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Un système simple, transparent et motivant
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Notre programme a été pensé pour récompenser concrètement les
            personnes qui contribuent à nous connecter à de vrais projets.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.06}>
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