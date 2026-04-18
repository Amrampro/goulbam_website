import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAllBlogPosts } from "@/lib/blog.server";
import { validateBlogPayload, type BlogPayload } from "@/lib/blog-validation";

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error("GET /api/admin/blog error:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer les articles." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BlogPayload;

    validateBlogPayload(body);

    const [existingRows] = await db.query(
      `
        SELECT id
        FROM blog_posts
        WHERE slug = ?
        LIMIT 1
      `,
      [body.slug]
    );

    if (Array.isArray(existingRows) && existingRows.length > 0) {
      return NextResponse.json(
        { message: "Un article avec ce slug existe déjà." },
        { status: 422 }
      );
    }

    const [result] = await db.query(
      `
        INSERT INTO blog_posts (
          title,
          slug,
          excerpt,
          content_json,
          category,
          author,
          published_at,
          read_time,
          cover_image,
          tags_json,
          status,
          is_featured
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        body.title,
        body.slug,
        body.excerpt,
        JSON.stringify(body.content),
        body.category,
        body.author,
        body.publishedAt,
        body.readTime,
        body.coverImage,
        JSON.stringify(body.tags),
        body.status,
        body.featured ? 1 : 0,
      ]
    );

    const insertId =
      typeof result === "object" && result && "insertId" in result
        ? Number(result.insertId)
        : null;

    return NextResponse.json(
      {
        message: "Article créé avec succès.",
        id: insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/admin/blog error:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de créer l’article.",
      },
      { status: 500 }
    );
  }
}