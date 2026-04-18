import { ProjectFormValues, ProjectItem } from "@/types/project";

type ApiResponse<T> = {
  data?: T;
  message?: string;
  id?: number;
};

function mapFormToPayload(values: ProjectFormValues) {
  return {
    title: values.title.trim(),
    slug: values.slug.trim(),
    shortDescription: values.shortDescription.trim(),
    fullDescription: values.fullDescription.trim(),
    category: values.category.trim(),
    client: values.client.trim(),
    year: values.year.trim() || null,
    technologies: values.technologies
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    services: values.services
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    coverImage: values.coverImage.trim() || null,
    gallery: values.gallery,
    challenge: values.challenge.trim(),
    solution: values.solution.trim(),
    results: values.results
      .split("\n")
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

export const projectService = {
  async getAll(): Promise<ProjectItem[]> {
    const response = await fetch("/api/admin/projects", {
      method: "GET",
      cache: "no-store",
    });

    const json = await parseJson<ApiResponse<ProjectItem[]>>(response);
    return json.data ?? [];
  },

  async getById(id: number): Promise<ProjectItem | null> {
    const response = await fetch(`/api/admin/projects/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (response.status === 404) return null;

    const json = await parseJson<ApiResponse<ProjectItem>>(response);
    return json.data ?? null;
  },

  async create(values: ProjectFormValues): Promise<void> {
    const response = await fetch("/api/admin/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapFormToPayload(values)),
    });

    await parseJson<ApiResponse<null>>(response);
  },

  async update(id: number, values: ProjectFormValues): Promise<void> {
    const response = await fetch(`/api/admin/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapFormToPayload(values)),
    });

    await parseJson<ApiResponse<null>>(response);
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`/api/admin/projects/${id}`, {
      method: "DELETE",
    });

    await parseJson<ApiResponse<null>>(response);
  },

  async uploadCoverImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/admin/upload/project-cover", {
      method: "POST",
      body: formData,
    });

    const json = await parseJson<
      ApiResponse<{ publicPath: string }>
    >(response);

    return json.data?.publicPath ?? "";
  },

  async uploadGalleryImages(files: File[]): Promise<string[]> {
    const formData = new FormData();

    for (const file of files) {
      formData.append("files", file);
    }

    const response = await fetch("/api/admin/upload/project-gallery", {
      method: "POST",
      body: formData,
    });

    const json = await parseJson<ApiResponse<string[]>>(response);
    return json.data ?? [];
  },
};