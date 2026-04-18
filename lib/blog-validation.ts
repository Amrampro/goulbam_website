export type BlogPayload = {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  publishedAt: string | null;
  readTime: string;
  coverImage: string | null;
  tags: string[];
  featured: boolean;
  status: "draft" | "published" | "archived";
};

export function validateBlogPayload(payload: BlogPayload) {
  if (!payload.title.trim()) {
    throw new Error("Le titre est obligatoire.");
  }

  if (!payload.slug.trim()) {
    throw new Error("Le slug est obligatoire.");
  }

  if (!payload.excerpt.trim()) {
    throw new Error("L’extrait est obligatoire.");
  }

  if (!payload.content.length) {
    throw new Error("Le contenu est obligatoire.");
  }

  if (!payload.category.trim()) {
    throw new Error("La catégorie est obligatoire.");
  }

  if (!payload.author.trim()) {
    throw new Error("L’auteur est obligatoire.");
  }
}