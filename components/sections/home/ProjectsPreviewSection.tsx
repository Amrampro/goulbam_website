import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getFeaturedProjects } from "@/lib/projects.public";

export default async function ProjectsPreviewSection() {
  const projects = await getFeaturedProjects(3);

  return (
    <section className="bg-[#0B1026] py-24 text-white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
              Nos projets
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Des réalisations qui traduisent notre exigence
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Link
              href="/projets"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explorer les projets
            </Link>
          </AnimatedSection>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.08}>
              <Link
                href={`/projets/${project.slug}`}
                className="group block overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div
                  className="h-56 bg-[radial-gradient(circle_at_top_left,rgba(5,162,218,0.35),transparent_35%),linear-gradient(135deg,#111936,#202B59)]"
                  style={
                    project.coverImage
                      ? {
                          backgroundImage: `
                            linear-gradient(rgba(11,16,38,0.35), rgba(11,16,38,0.55)),
                            url(${project.coverImage})
                          `,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                />
                <div className="p-6">
                  <p className="text-sm font-medium text-[#7DD3FC]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}