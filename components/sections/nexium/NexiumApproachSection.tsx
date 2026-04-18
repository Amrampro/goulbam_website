import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionImageCard from "@/components/ui/SectionImageCard";

const points = [
  "Une pédagogie claire et progressive",
  "Une approche orientée pratique",
  "Des contenus pensés pour les réalités actuelles",
  "Une volonté de former avec exigence et impact",
];

export default function NexiumApproachSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Notre approche
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              Une formation pensée pour être comprise, appliquée et valorisée
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Nous croyons qu’une bonne formation ne doit pas seulement informer.
              Elle doit permettre de comprendre, d’expérimenter, de pratiquer et
              de progresser avec confiance.
            </p>

            <div className="mt-8 grid gap-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-[#F8FBFF] px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionImageCard
              src="/images/nexium/approach.jpg"
              alt="Approche pédagogique de Nexium Institute"
              className="min-h-[520px] w-full"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}