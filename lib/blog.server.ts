import { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";

export type BlogStatus = "draft" | "published" | "archived";

export type BlogRow = RowDataPacket & {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content_json: string;
  category: string;
  author: string;
  published_at: Date | string | null;
  read_time: string | null;
  cover_image: string | null;
  tags_json: string | null;
  status: BlogStatus;
  is_featured: number;
  created_at: Date | string;
  updated_at: Date | string;
};

export type BlogPostDto = {
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
  featured: boolean;
  status: BlogStatus;
  createdAt: string;
  updatedAt: string;
};

function safeJsonParseArray(value: string | null): string[] {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}

function formatDateValue(value: Date | string | null): string | null {
  if (!value) return null;

  if (value instanceof Date) {
    return value.toISOString().split("T")[0];
  }

  return value;
}

function formatDateTimeValue(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

export function mapBlogRow(row: BlogRow): BlogPostDto {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: safeJsonParseArray(row.content_json),
    category: row.category,
    author: row.author,
    publishedAt: formatDateValue(row.published_at),
    readTime: row.read_time ?? "",
    coverImage: row.cover_image ?? "",
    tags: safeJsonParseArray(row.tags_json),
    featured: Boolean(row.is_featured),
    status: row.status,
    createdAt: formatDateTimeValue(row.created_at),
    updatedAt: formatDateTimeValue(row.updated_at),
  };
}

export async function getAllBlogPosts(): Promise<BlogPostDto[]> {
  const [rows] = await db.query<BlogRow[]>(
    `
      SELECT *
      FROM blog_posts
      ORDER BY id DESC
    `
  );

  return rows.map(mapBlogRow);
}

export async function getBlogPostById(id: number): Promise<BlogPostDto | null> {
  const [rows] = await db.query<BlogRow[]>(
    `
      SELECT *
      FROM blog_posts
      WHERE id = ?
      LIMIT 1
    `,
    [id]
  );

  if (!rows.length) {
    return null;
  }

  return mapBlogRow(rows[0]);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostDto | null> {
  const [rows] = await db.query<BlogRow[]>(
    `
      SELECT *
      FROM blog_posts
      WHERE slug = ?
      LIMIT 1
    `,
    [slug]
  );

  if (!rows.length) {
    return null;
  }

  return mapBlogRow(rows[0]);
}