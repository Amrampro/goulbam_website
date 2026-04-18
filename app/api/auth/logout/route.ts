import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/lib/auth.server";

export async function POST() {
  try {
    await clearAuthCookie();

    return NextResponse.json({
      message: "Déconnexion réussie.",
    });
  } catch {
    return NextResponse.json(
      { message: "Impossible de se déconnecter." },
      { status: 500 }
    );
  }
}