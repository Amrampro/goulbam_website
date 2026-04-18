import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailHeroSection from "@/components/sections/projects/ProjectDetailHeroSection";
import ProjectDetailContentSection from "@/components/sections/projects/ProjectDetailContentSection";
import ProjectDetailGallerySection from "@/components/sections/projects/ProjectDetailGallerySection";
import ProjectDetailCtaSection from "@/components/sections/projects/ProjectDetailCtaSection";
import {
  getPublishedProjectBySlug,
  getPublishedProjects,
} from "@/lib/projects.public";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPublishedProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable | GoulBAM Enterprises",
    };
  }

  return {
    title: `${project.title} | GoulBAM Enterprises`,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  const projects = await getPublishedProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = await getPublishedProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetailHeroSection project={project} />
      <ProjectDetailContentSection project={project} />
      <ProjectDetailGallerySection project={project} />
      <ProjectDetailCtaSection />
    </main>
  );
}