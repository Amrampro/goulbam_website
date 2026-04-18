import { NextResponse } from "next/server";
import { saveUploadedFile } from "@/lib/upload";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { message: "Aucun fichier reçu." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { message: "Format invalide. Utilise JPG, PNG ou WEBP." },
        { status: 422 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { message: "Le fichier dépasse 5 MB." },
        { status: 422 }
      );
    }

    const saved = await saveUploadedFile(file, "blog");

    return NextResponse.json({
      message: "Image uploadée avec succès.",
      data: saved,
    });
  } catch (error) {
    console.error("POST /api/admin/upload/blog-cover error:", error);
    return NextResponse.json(
      { message: "Impossible d’uploader l’image." },
      { status: 500 }
    );
  }
}