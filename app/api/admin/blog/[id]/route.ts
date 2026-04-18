import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getBlogPostById } from "@/lib/blog.server";
import { validateBlogPayload, type BlogPayload } from "@/lib/blog-validation";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, context: Context) {
  try {
    const { id } = await context.params;
    const post = await getBlogPostById(Number(id));

    if (!post) {
      return NextResponse.json(
        { message: "Article introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: post });
  } catch (error) {
    console.error("GET /api/admin/blog/[id] error:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer cet article." },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: Context) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    const existing = await getBlogPostById(numericId);

    if (!existing) {
      return NextResponse.json(
        { message: "Article introuvable." },
        { status: 404 }
      );
    }

    const body = (await request.json()) as BlogPayload;
    validateBlogPayload(body);

    const [slugRows] = await db.query(
      `
        SELECT id
        FROM blog_posts
        WHERE slug = ?
          AND id <> ?
        LIMIT 1
      `,
      [body.slug, numericId]
    );

    if (Array.isArray(slugRows) && slugRows.length > 0) {
      return NextResponse.json(
        { message: "Un autre article utilise déjà ce slug." },
        { status: 422 }
      );
    }

    await db.query(
      `
        UPDATE blog_posts
        SET
          title = ?,
          slug = ?,
          excerpt = ?,
          content_json = ?,
          category = ?,
          author = ?,
          published_at = ?,
          read_time = ?,
          cover_image = ?,
          tags_json = ?,
          status = ?,
          is_featured = ?
        WHERE id = ?
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
        numericId,
      ]
    );

    return NextResponse.json({
      message: "Article mis à jour avec succès.",
    });
  } catch (error) {
    console.error("PUT /api/admin/blog/[id] error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de mettre à jour l’article.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: NextRequest, context: Context) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    const existing = await getBlogPostById(numericId);

    if (!existing) {
      return NextResponse.json(
        { message: "Article introuvable." },
        { status: 404 }
      );
    }

    await db.query(`DELETE FROM blog_posts WHERE id = ?`, [numericId]);

    return NextResponse.json({
      message: "Article supprimé avec succès.",
    });
  } catch (error) {
    console.error("DELETE /api/admin/blog/[id] error:", error);
    return NextResponse.json(
      { message: "Impossible de supprimer l’article." },
      { status: 500 }
    );
  }
}