import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ProjectItem } from "@/types/project";

type ProjectDetailGallerySectionProps = {
  project: ProjectItem;
};

export default function ProjectDetailGallerySection({
  project,
}: ProjectDetailGallerySectionProps) {
  if (!project.gallery.length) {
    return null;
  }

  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Aperçu visuel
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Quelques visuels du projet
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Découvrez une sélection d’images représentatives de ce projet.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.gallery.map((image, index) => (
            <AnimatedSection key={`${image}-${index}`} delay={index * 0.06}>
              <div className="relative h-72 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <Image
                  src={image || "/images/placeholders/project-cover.jpg"}
                  alt={`${project.title} - visuel ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}