import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ProjectItem } from "@/types/project";

type ProjectDetailContentSectionProps = {
  project: ProjectItem;
};

export default function ProjectDetailContentSection({
  project,
}: ProjectDetailContentSectionProps) {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection>
            <div className="space-y-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                  Le défi
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#202B59]">
                  Le contexte du projet
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {project.challenge}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                  Notre réponse
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#202B59]">
                  La solution apportée
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {project.solution}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="rounded-[32px] border border-slate-200 bg-[#F8FBFF] p-8 shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                  Technologies
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#202B59] shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                  Résultats
                </p>
                <div className="mt-5 space-y-3">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="rounded-2xl bg-white px-5 py-4 text-sm text-slate-700 shadow-sm"
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}