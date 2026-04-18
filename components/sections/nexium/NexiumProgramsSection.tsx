import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const programs = [
  {
    title: "Développement web",
    description:
      "Apprendre à concevoir des sites web, interfaces modernes et solutions web structurées.",
    image: "/images/nexium/web.jpg",
  },
  {
    title: "Développement mobile",
    description:
      "Découvrir la création d’applications mobiles et les logiques de conception adaptées au mobile.",
    image: "/images/nexium/mobile.jpg",
  },
  {
    title: "Initiation à l’informatique",
    description:
      "Comprendre les bases essentielles de l’environnement numérique et des usages informatiques.",
    image: "/images/nexium/initiation-informatique.jpg",
  },
  {
    title: "Bureautique & outils numériques",
    description:
      "Maîtriser les outils utiles à la productivité, à l’organisation et au travail professionnel.",
    image: "/images/nexium/bureautique.jpg",
  },
  {
    title: "Culture digitale",
    description:
      "Développer une compréhension des enjeux, usages et opportunités du numérique aujourd’hui.",
    image: "/images/nexium/culture-digitale.jpg",
  },
  {
    title: "Parcours adaptés",
    description:
      "Concevoir des contenus de formation ajustés selon les profils, les besoins et les objectifs visés.",
    image: "/images/nexium/formation-parcours.jpg",
  },
];

export default function NexiumProgramsSection() {
  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Nos formations
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Des parcours pensés pour transmettre des compétences utiles
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Nexium Institute propose des formations orientées pratique et
            construites pour favoriser une progression réelle.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <AnimatedSection key={program.title} delay={index * 0.06}>
              <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(32,43,89,0.10)]">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026]/55 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#202B59]">
                    {program.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}