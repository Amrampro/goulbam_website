import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  GraduationCap,
  Code,
  Smartphone,
  Laptop,
  Brain,
} from "lucide-react";

const formations = [
  {
    title: "Développement web",
    icon: Code,
  },
  {
    title: "Développement mobile",
    icon: Smartphone,
  },
  {
    title: "Bureautique & outils numériques",
    icon: Laptop,
  },
  {
    title: "Initiation à l’informatique",
    icon: Brain,
  },
];

export default function NexiumInstitutePreviewSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          
          {/* LEFT */}
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Nexium Institute
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
              Notre institut de formation en informatique
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Nexium Institute est le pôle de formation de GoulBAM Enterprises.
              Il a pour vocation de transmettre des compétences concrètes,
              utiles et orientées pratique à celles et ceux qui veulent évoluer
              dans le numérique.
            </p>

            <Link
              href="/nexium-institute"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#202B59] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#172042]"
            >
              <GraduationCap size={18} />
              Découvrir Nexium Institute
            </Link>
          </AnimatedSection>

          {/* RIGHT */}
          <AnimatedSection delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {formations.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 bg-[#F8FBFF] p-6 transition hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05A2DA]/10 text-[#05A2DA]">
                        <Icon size={20} />
                      </div>

                      <h3 className="text-lg font-semibold text-[#202B59]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Un apprentissage structuré, progressif et orienté pratique.
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

        </div>
      </Container>
    </section>
  );
}