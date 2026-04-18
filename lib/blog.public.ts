import { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";
import { BlogPostItem } from "@/types/blog";

type BlogRow = RowDataPacket & {
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
  status: "draft" | "published" | "archived";
  is_featured: number;
  created_at: Date | string;
  updated_at: Date | string;
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

function mapBlogRow(row: BlogRow): BlogPostItem {
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

export async function getPublishedBlogPosts(): Promise<BlogPostItem[]> {
  const [rows] = await db.query<BlogRow[]>(
    `
      SELECT *
      FROM blog_posts
      WHERE status = 'published'
      ORDER BY
        published_at DESC,
        id DESC
    `
  );

  return rows.map(mapBlogRow);
}

export async function getPublishedBlogPostBySlug(
  slug: string
): Promise<BlogPostItem | null> {
  const [rows] = await db.query<BlogRow[]>(
    `
      SELECT *
      FROM blog_posts
      WHERE slug = ?
        AND status = 'published'
      LIMIT 1
    `,
    [slug]
  );

  if (!rows.length) {
    return null;
  }

  return mapBlogRow(rows[0]);
}

export async function getFeaturedBlogPosts(limit = 3): Promise<BlogPostItem[]> {
  const [rows] = await db.query<BlogRow[]>(
    `
      SELECT *
      FROM blog_posts
      WHERE status = 'published'
        AND is_featured = 1
      ORDER BY
        published_at DESC,
        id DESC
      LIMIT ?
    `,
    [limit]
  );

  return rows.map(mapBlogRow);
}