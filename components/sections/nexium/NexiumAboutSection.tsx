import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionImageCard from "@/components/ui/SectionImageCard";

export default function NexiumAboutSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedSection>
            <div className="relative">
              <SectionImageCard
                src="/images/nexium/about.jpg"
                alt="Apprenants de Nexium Institute"
                className="min-h-[420px] w-full"
                overlay={false}
              />

              <div className="absolute -bottom-6 right-6 max-w-xs rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#05A2DA]">
                  Vision
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Former des profils capables de comprendre, créer et évoluer dans
                  le numérique.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              À propos de l’institut
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              Un institut conçu pour transmettre des compétences concrètes
            </h2>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-600">
              <p>
                Nexium Institute a été pensé comme un espace de transmission,
                d’élévation et de professionnalisation dans le domaine de
                l’informatique et du numérique.
              </p>

              <p>
                L’institut s’adresse à différents profils : débutants,
                étudiants, jeunes professionnels, porteurs de projets,
                entreprises et toute personne souhaitant développer des
                compétences utiles dans un environnement technologique en
                constante évolution.
              </p>

              <p>
                Notre approche met l’accent sur la pratique, la clarté
                pédagogique, la progression structurée et la capacité à relier
                les connaissances à des usages concrets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}