import { NextResponse } from "next/server";
import { saveUploadedFile } from "@/lib/upload";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files");

    if (!files.length) {
      return NextResponse.json(
        { message: "Aucun fichier reçu." },
        { status: 400 }
      );
    }

    const uploadedPaths: string[] = [];

    for (const item of files) {
      if (!(item instanceof File)) {
        return NextResponse.json(
          { message: "Fichier invalide dans la galerie." },
          { status: 422 }
        );
      }

      if (!ALLOWED_TYPES.includes(item.type)) {
        return NextResponse.json(
          { message: "Un des fichiers a un format invalide." },
          { status: 422 }
        );
      }

      if (item.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { message: "Un des fichiers dépasse 5 MB." },
          { status: 422 }
        );
      }

      const saved = await saveUploadedFile(item, "projects/gallery");
      uploadedPaths.push(saved.publicPath);
    }

    return NextResponse.json({
      message: "Galerie uploadée avec succès.",
      data: uploadedPaths,
    });
  } catch (error) {
    console.error("POST /api/admin/upload/project-gallery error:", error);
    return NextResponse.json(
      { message: "Impossible d’uploader la galerie." },
      { status: 500 }
    );
  }
}