export type ProjectStatus = "draft" | "published" | "archived";

export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  client: string;
  year: string;
  technologies: string[];
  services: string[];
  coverImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string[];
  featured?: boolean;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
};

export type ProjectFormValues = {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  client: string;
  year: string;
  technologies: string;
  services: string;
  coverImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string;
  featured: boolean;
  status: ProjectStatus;
};