import { BlogFormValues, BlogPostItem } from "@/types/blog";

type BlogApiResponse<T> = {
  data?: T;
  message?: string;
  id?: number;
};

function mapFormToPayload(values: BlogFormValues) {
  return {
    title: values.title.trim(),
    slug: values.slug.trim(),
    excerpt: values.excerpt.trim(),
    content: values.content
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean),
    category: values.category.trim(),
    author: values.author.trim(),
    publishedAt: values.publishedAt || null,
    readTime: values.readTime.trim(),
    coverImage: values.coverImage.trim() || null,
    tags: values.tags
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    featured: values.featured,
    status: values.status,
  };
}

async function parseJson<T>(response: Response): Promise<T> {
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message || "Une erreur est survenue.");
  }
  return json;
}

export const blogService = {
  async getAll(): Promise<BlogPostItem[]> {
    const response = await fetch("/api/admin/blog", {
      method: "GET",
      cache: "no-store",
    });

    const json = await parseJson<BlogApiResponse<BlogPostItem[]>>(response);
    return json.data ?? [];
  },

  async getById(id: number): Promise<BlogPostItem | null> {
    const response = await fetch(`/api/admin/blog/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (response.status === 404) {
      return null;
    }

    const json = await parseJson<BlogApiResponse<BlogPostItem>>(response);
    return json.data ?? null;
  },

  async create(values: BlogFormValues): Promise<void> {
    const response = await fetch("/api/admin/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapFormToPayload(values)),
    });

    await parseJson<BlogApiResponse<null>>(response);
  },

  async update(id: number, values: BlogFormValues): Promise<void> {
    const response = await fetch(`/api/admin/blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapFormToPayload(values)),
    });

    await parseJson<BlogApiResponse<null>>(response);
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`/api/admin/blog/${id}`, {
      method: "DELETE",
    });

    await parseJson<BlogApiResponse<null>>(response);
  },

  async uploadCoverImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/admin/upload/blog-cover", {
      method: "POST",
      body: formData,
    });

    const json = await parseJson<
      BlogApiResponse<{
        publicPath: string;
        originalName: string;
        mimeType: string;
        size: number;
      }>
    >(response);

    return json.data?.publicPath ?? "";
  },
};