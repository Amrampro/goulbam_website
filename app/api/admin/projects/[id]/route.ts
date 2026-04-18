import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getProjectById } from "@/lib/project.server";
import {
  validateProjectPayload,
  type ProjectPayload,
} from "@/lib/project-validation";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, context: Context) {
  try {
    const { id } = await context.params;
    const project = await getProjectById(Number(id));

    if (!project) {
      return NextResponse.json(
        { message: "Projet introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: project });
  } catch (error) {
    console.error("GET /api/admin/projects/[id] error:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer ce projet." },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: Context) {
  const connection = await db.getConnection();

  try {
    const { id } = await context.params;
    const projectId = Number(id);

    const existing = await getProjectById(projectId);

    if (!existing) {
      return NextResponse.json(
        { message: "Projet introuvable." },
        { status: 404 }
      );
    }

    const body = (await request.json()) as ProjectPayload;
    validateProjectPayload(body);

    const [slugRows] = await connection.query(
      `
        SELECT id
        FROM projects
        WHERE slug = ?
          AND id <> ?
        LIMIT 1
      `,
      [body.slug, projectId]
    );

    if (Array.isArray(slugRows) && slugRows.length > 0) {
      return NextResponse.json(
        { message: "Un autre projet utilise déjà ce slug." },
        { status: 422 }
      );
    }

    await connection.beginTransaction();

    await connection.query(
      `
        UPDATE projects
        SET
          title = ?,
          slug = ?,
          short_description = ?,
          full_description = ?,
          category = ?,
          client = ?,
          project_year = ?,
          technologies_json = ?,
          services_json = ?,
          cover_image = ?,
          challenge = ?,
          solution = ?,
          results_json = ?,
          status = ?,
          is_featured = ?
        WHERE id = ?
      `,
      [
        body.title,
        body.slug,
        body.shortDescription,
        body.fullDescription,
        body.category,
        body.client || null,
        body.year ? Number(body.year) : null,
        JSON.stringify(body.technologies),
        JSON.stringify(body.services),
        body.coverImage,
        body.challenge || null,
        body.solution || null,
        JSON.stringify(body.results),
        body.status,
        body.featured ? 1 : 0,
        projectId,
      ]
    );

    await connection.query(
      `
        DELETE FROM project_gallery_images
        WHERE project_id = ?
      `,
      [projectId]
    );

    if (body.gallery.length) {
      for (let index = 0; index < body.gallery.length; index += 1) {
        await connection.query(
          `
            INSERT INTO project_gallery_images (project_id, image_path, sort_order)
            VALUES (?, ?, ?)
          `,
          [projectId, body.gallery[index], index]
        );
      }
    }

    await connection.commit();

    return NextResponse.json({
      message: "Projet mis à jour avec succès.",
    });
  } catch (error) {
    await connection.rollback();
    console.error("PUT /api/admin/projects/[id] error:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de mettre à jour le projet.",
      },
      { status: 500 }
    );
  } finally {
    connection.release();
  }
}

export async function DELETE(_request: NextRequest, context: Context) {
  try {
    const { id } = await context.params;
    const projectId = Number(id);

    const existing = await getProjectById(projectId);

    if (!existing) {
      return NextResponse.json(
        { message: "Projet introuvable." },
        { status: 404 }
      );
    }

    await db.query(`DELETE FROM projects WHERE id = ?`, [projectId]);

    return NextResponse.json({
      message: "Projet supprimé avec succès.",
    });
  } catch (error) {
    console.error("DELETE /api/admin/projects/[id] error:", error);
    return NextResponse.json(
      { message: "Impossible de supprimer le projet." },
      { status: 500 }
    );
  }
}