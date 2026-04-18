import { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";

export type ProjectRow = RowDataPacket & {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  category: string;
  client: string | null;
  project_year: number | null;
  technologies_json: string | null;
  services_json: string | null;
  cover_image: string | null;
  challenge: string | null;
  solution: string | null;
  results_json: string | null;
  status: "draft" | "published" | "archived";
  is_featured: number;
  created_at: string;
  updated_at: string;
};

export type GalleryRow = RowDataPacket & {
  id: number;
  project_id: number;
  image_path: string;
  sort_order: number;
};

export type ProjectDto = {
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
  featured: boolean;
  status: "draft" | "published" | "archived";
  createdAt: string;
  updatedAt: string;
};

function parseJsonArray(value: string | null): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}

export async function mapProjectRow(row: ProjectRow): Promise<ProjectDto> {
  const [galleryRows] = await db.query<GalleryRow[]>(
    `
      SELECT image_path
      FROM project_gallery_images
      WHERE project_id = ?
      ORDER BY sort_order ASC, id ASC
    `,
    [row.id]
  );

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    shortDescription: row.short_description,
    fullDescription: row.full_description,
    category: row.category,
    client: row.client ?? "",
    year: row.project_year ? String(row.project_year) : "",
    technologies: parseJsonArray(row.technologies_json),
    services: parseJsonArray(row.services_json),
    coverImage: row.cover_image ?? "",
    gallery: galleryRows.map((item) => item.image_path),
    challenge: row.challenge ?? "",
    solution: row.solution ?? "",
    results: parseJsonArray(row.results_json),
    featured: Boolean(row.is_featured),
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getAllProjects() {
  const [rows] = await db.query<ProjectRow[]>(
    `
      SELECT *
      FROM projects
      ORDER BY id DESC
    `
  );

  return Promise.all(rows.map(mapProjectRow));
}

export async function getProjectById(id: number) {
  const [rows] = await db.query<ProjectRow[]>(
    `
      SELECT *
      FROM projects
      WHERE id = ?
      LIMIT 1
    `,
    [id]
  );

  if (!rows.length) return null;
  return mapProjectRow(rows[0]);
}