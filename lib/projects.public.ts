import { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";
import { ProjectItem } from "@/types/project";

type ProjectRow = RowDataPacket & {
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
  created_at: Date | string;
  updated_at: Date | string;
};

type GalleryRow = RowDataPacket & {
  id: number;
  project_id: number;
  image_path: string;
  sort_order: number;
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

function formatDateTimeValue(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

async function mapProjectRow(row: ProjectRow): Promise<ProjectItem> {
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
    createdAt: formatDateTimeValue(row.created_at),
    updatedAt: formatDateTimeValue(row.updated_at),
  };
}

export async function getPublishedProjects(): Promise<ProjectItem[]> {
  const [rows] = await db.query<ProjectRow[]>(
    `
      SELECT *
      FROM projects
      WHERE status = 'published'
      ORDER BY id DESC
    `
  );

  return Promise.all(rows.map(mapProjectRow));
}

export async function getPublishedProjectBySlug(
  slug: string
): Promise<ProjectItem | null> {
  const [rows] = await db.query<ProjectRow[]>(
    `
      SELECT *
      FROM projects
      WHERE slug = ?
        AND status = 'published'
      LIMIT 1
    `,
    [slug]
  );

  if (!rows.length) {
    return null;
  }

  return mapProjectRow(rows[0]);
}

export async function getFeaturedProjects(limit = 3): Promise<ProjectItem[]> {
  const [rows] = await db.query<ProjectRow[]>(
    `
      SELECT *
      FROM projects
      WHERE status = 'published'
        AND is_featured = 1
      ORDER BY id DESC
      LIMIT ?
    `,
    [limit]
  );

  return Promise.all(rows.map(mapProjectRow));
}