export type BlogStatus = "draft" | "published" | "archived";

export type BlogPostItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  publishedAt: string | null;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
  status: BlogStatus;
  createdAt: string;
  updatedAt: string;
};

export type BlogFormValues = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string;
  featured: boolean;
  status: BlogStatus;
};