import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutStorySection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Notre histoire
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              De WebTech à GoulBAM Enterprises
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                L’histoire de GoulBAM Enterprises commence en <strong>2018</strong>,
                lorsque <strong>trois étudiants</strong> décident de lancer une
                initiative sous le nom de <strong>WebTech</strong>. À cette époque,
                l’ambition était déjà claire : utiliser la technologie pour créer
                des solutions concrètes, utiles et porteuses de valeur.
              </p>

              <p>
                Malgré les vents contraires, les défis du terrain, les périodes
                d’incertitude et les réalités d’un écosystème exigeant, cette
                vision n’a jamais cessé d’évoluer. Ce qui a commencé comme une
                aventure étudiante s’est progressivement structuré pour devenir
                une entreprise plus mature, plus ambitieuse et plus solide.
              </p>

              <p>
                Aujourd’hui, cette évolution porte un nom : <strong>GoulBAM Enterprises</strong>.
                Une entreprise qui s’appuie sur l’expérience, la rigueur,
                la créativité et une culture d’exécution forte pour accompagner
                ses clients dans leurs projets numériques et stratégiques.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}