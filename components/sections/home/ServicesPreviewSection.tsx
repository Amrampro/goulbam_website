import {
  Code2,
  Globe,
  Smartphone,
  BriefcaseBusiness,
  Megaphone,
  Building2,
  Palette,
  Lightbulb,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "Développement web",
    description:
      "Sites vitrines, plateformes métiers, tableaux de bord et solutions web modernes adaptées à vos objectifs.",
    icon: Globe,
  },
  {
    title: "Développement applicatif",
    description:
      "Applications et systèmes sur mesure conçus pour répondre aux besoins réels des entreprises et organisations.",
    icon: Code2,
  },
  {
    title: "Solutions mobiles",
    description:
      "Applications mobiles fluides, pratiques et modernes pour améliorer l’expérience de vos utilisateurs.",
    icon: Smartphone,
  },
  {
    title: "Consulting & conseil",
    description:
      "Cadrage de projet, transformation digitale, assistance technique, orientation stratégique et accompagnement professionnel.",
    icon: Lightbulb,
  },
  {
    title: "Marketing digital",
    description:
      "Stratégies de communication digitale, présence en ligne, contenus, visibilité et accompagnement marketing.",
    icon: Megaphone,
  },
  {
    title: "Conception architecturale",
    description:
      "Conception de projets architecturaux, visualisation, structuration des idées et accompagnement de présentation.",
    icon: Building2,
  },
  {
    title: "Design graphique",
    description:
      "Chartes graphiques, identités visuelles, maquettes UI/UX, logos et supports visuels professionnels.",
    icon: Palette,
  },
  {
    title: "Accompagnement digital",
    description:
      "Conseil opérationnel, structuration fonctionnelle, amélioration de processus et suivi de mise en œuvre.",
    icon: BriefcaseBusiness,
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Nos expertises
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Des solutions pensées pour construire, valoriser et faire évoluer votre activité
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            GoulBAM Enterprises accompagne ses clients à travers plusieurs pôles
            complémentaires, allant du développement logiciel au consulting, en
            passant par la stratégie digitale, le design et la conception.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <div className="group h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#05A2DA]/30 hover:shadow-[0_18px_40px_rgba(32,43,89,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#202B59]/5 text-[#05A2DA] transition group-hover:bg-[#05A2DA]/10">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#202B59]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}