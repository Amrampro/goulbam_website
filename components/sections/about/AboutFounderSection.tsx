import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutFounderSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Une trajectoire fondée sur l’excellence
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              Une entreprise portée par un parcours d’impact, de performance et de vision
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                GoulBAM Enterprises s’appuie sur le parcours d’un fondateur dont
                la trajectoire témoigne d’une recherche constante d’excellence,
                d’innovation et d’impact concret. En <strong>2019</strong>, il est
                à l’origine d’un projet technologique majeur : une
                <strong> application médicale développée pendant la période du Covid</strong>,
                reconnue comme le <strong>meilleur projet tech d’Afrique centrale</strong>.
              </p>

              <p>
                Son parcours l’a également conduit à collaborer avec
                <strong> Jacques Bonjawo</strong>, présenté ici comme le
                <strong> tout deuxième Africain à avoir collaboré avec Bill Gates</strong>.
                Au sein de <strong>Ocean Innovation Center</strong>, il a occupé
                la fonction de <strong>CTO de toute la structure</strong>, en
                pilotant la vision technique et les dynamiques d’innovation.
              </p>

              <p>
                Cette culture de l’excellence repose aussi sur des bases académiques
                solides. Dans sa promotion d’ingénieurs, il figurait
                <strong> parmi les majors</strong>. Dans l'école où il a achevé ses études, à l’issue de
                son parcours en Belgique, son <strong>TFE</strong> s’est classé
                <strong> parmi les 5 meilleurs de l’ensemble des campus combinés</strong>,
                incluant notamment la Belgique, la France et d’autres implantations.
              </p>

              <p>
                Aujourd’hui résident en <strong>Belgique</strong>, il porte une
                vision internationale et structurée de l’entreprise, avec la
                volonté de faire de GoulBAM Enterprises un acteur crédible,
                ambitieux et durable entre l’Europe et l’Afrique.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}