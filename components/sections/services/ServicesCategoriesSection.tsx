import {
  Globe,
  Code2,
  Smartphone,
  Lightbulb,
  Megaphone,
  Building2,
  Palette,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = [
  {
    title: "Développement web",
    description:
      "Nous concevons des sites vitrines, plateformes métiers, dashboards, espaces clients et systèmes web modernes adaptés à vos objectifs.",
    points: [
      "Sites web professionnels",
      "Plateformes métiers",
      "Dashboards & interfaces d’administration",
      "Systèmes sur mesure",
    ],
    icon: Globe,
  },
  {
    title: "Développement applicatif",
    description:
      "Nous développons des applications robustes pensées pour les besoins spécifiques des entreprises, structures et organisations.",
    points: [
      "Applications métiers",
      "Outils de gestion",
      "Systèmes internes",
      "Solutions sur mesure",
    ],
    icon: Code2,
  },
  {
    title: "Solutions mobiles",
    description:
      "Nous créons des applications mobiles pratiques, fluides et modernes pour améliorer l’expérience des utilisateurs sur le terrain.",
    points: [
      "Applications Android / iOS",
      "Solutions hybrides",
      "Interfaces mobiles optimisées",
      "Expérience utilisateur mobile",
    ],
    icon: Smartphone,
  },
  {
    title: "Consulting & conseil",
    description:
      "Nous accompagnons les projets dans leur structuration, leur cadrage et leur orientation stratégique afin de poser des bases solides.",
    points: [
      "Cadrage de projet",
      "Transformation digitale",
      "Assistance technique",
      "Orientation stratégique",
    ],
    icon: Lightbulb,
  },
  {
    title: "Marketing digital",
    description:
      "Nous aidons les marques et entreprises à renforcer leur visibilité, leur communication et leur impact sur les canaux numériques.",
    points: [
      "Présence en ligne",
      "Stratégie de communication digitale",
      "Contenus marketing",
      "Accompagnement de marque",
    ],
    icon: Megaphone,
  },
  {
    title: "Conception architecturale",
    description:
      "Nous accompagnons les projets architecturaux avec une approche de conception, de visualisation et de présentation professionnelle.",
    points: [
      "Études de conception",
      "Visualisation de projets",
      "Structuration des idées",
      "Présentation architecturale",
    ],
    icon: Building2,
  },
  {
    title: "Design graphique",
    description:
      "Nous développons des univers visuels cohérents et professionnels pour renforcer l’identité, l’image et la perception de votre projet.",
    points: [
      "Chartes graphiques",
      "Identités visuelles",
      "Maquettes UI/UX",
      "Logos et supports visuels",
    ],
    icon: Palette,
  },
  {
    title: "Accompagnement digital",
    description:
      "Nous vous aidons à mieux organiser, structurer et piloter votre évolution digitale avec une approche pratique et progressive.",
    points: [
      "Structuration fonctionnelle",
      "Amélioration de processus",
      "Suivi de mise en œuvre",
      "Appui opérationnel",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Nexium Institute",
    description:
      "Notre pôle formation propose des parcours pratiques en informatique pour développer des compétences concrètes et utiles.",
    points: [
      "Formations en informatique",
      "Apprentissage pratique",
      "Montée en compétences",
      "Parcours adaptés aux besoins",
    ],
    icon: GraduationCap,
  },
];

export default function ServicesCategoriesSection() {
  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Nos expertises en détail
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Des pôles complémentaires pour répondre à des besoins variés
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Chaque service de GoulBAM Enterprises s’inscrit dans une logique de
            qualité, de cohérence et d’impact durable.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <AnimatedSection key={category.title} delay={index * 0.05}>
                <div className="group h-full rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#05A2DA]/30 hover:shadow-[0_18px_45px_rgba(32,43,89,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#202B59]/5 text-[#05A2DA] transition group-hover:bg-[#05A2DA]/10">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#202B59]">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {category.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-xl bg-[#F8FBFF] px-4 py-3 text-sm text-slate-700"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}