import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAllProjects } from "@/lib/project.server";
import {
  validateProjectPayload,
  type ProjectPayload,
} from "@/lib/project-validation";

export async function GET() {
  try {
    const projects = await getAllProjects();
    return NextResponse.json({ data: projects });
  } catch (error) {
    console.error("GET /api/admin/projects error:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer les projets." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const connection = await db.getConnection();

  try {
    const body = (await request.json()) as ProjectPayload;
    validateProjectPayload(body);

    const [slugRows] = await connection.query(
      `
        SELECT id
        FROM projects
        WHERE slug = ?
        LIMIT 1
      `,
      [body.slug]
    );

    if (Array.isArray(slugRows) && slugRows.length > 0) {
      return NextResponse.json(
        { message: "Un projet avec ce slug existe déjà." },
        { status: 422 }
      );
    }

    await connection.beginTransaction();

    const [result] = await connection.query(
      `
        INSERT INTO projects (
          title,
          slug,
          short_description,
          full_description,
          category,
          client,
          project_year,
          technologies_json,
          services_json,
          cover_image,
          challenge,
          solution,
          results_json,
          status,
          is_featured
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      ]
    );

    const projectId =
      typeof result === "object" && result && "insertId" in result
        ? Number(result.insertId)
        : null;

    if (projectId && body.gallery.length) {
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

    return NextResponse.json(
      {
        message: "Projet créé avec succès.",
        id: projectId,
      },
      { status: 201 }
    );
  } catch (error) {
    await connection.rollback();
    console.error("POST /api/admin/projects error:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de créer le projet.",
      },
      { status: 500 }
    );
  } finally {
    connection.release();
  }
}