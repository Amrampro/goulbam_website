export type ProjectPayload = {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  client: string;
  year: string | null;
  technologies: string[];
  services: string[];
  coverImage: string | null;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string[];
  featured: boolean;
  status: "draft" | "published" | "archived";
};

export function validateProjectPayload(payload: ProjectPayload) {
  if (!payload.title.trim()) {
    throw new Error("Le titre est obligatoire.");
  }

  if (!payload.slug.trim()) {
    throw new Error("Le slug est obligatoire.");
  }

  if (!payload.shortDescription.trim()) {
    throw new Error("La description courte est obligatoire.");
  }

  if (!payload.fullDescription.trim()) {
    throw new Error("La description complète est obligatoire.");
  }

  if (!payload.category.trim()) {
    throw new Error("La catégorie est obligatoire.");
  }
}