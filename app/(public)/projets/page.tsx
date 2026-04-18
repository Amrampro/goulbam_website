import ProjectsHeroSection from "@/components/sections/projects/ProjectsHeroSection";
import ProjectsGridSection from "@/components/sections/projects/ProjectsGridSection";
import { getPublishedProjects } from "@/lib/projects.public";

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <main>
      <ProjectsHeroSection />
      <ProjectsGridSection projects={projects} />
    </main>
  );
}