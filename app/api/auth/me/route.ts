import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth.server";

export async function GET() {
  try {
    const user = await getCurrentUser();

    return NextResponse.json({
      data: user,
    });
  } catch {
    return NextResponse.json(
      { message: "Impossible de récupérer la session." },
      { status: 500 }
    );
  }
}