import { NextResponse } from "next/server";
import {
  getUserByEmail,
  mapUserRow,
  setAuthCookie,
  verifyPassword,
} from "@/lib/auth.server";
import { validateLoginPayload } from "@/lib/auth-validation";
import { LoginPayload } from "@/types/auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginPayload;

    validateLoginPayload(body);

    const user = await getUserByEmail(body.email.trim().toLowerCase());

    if (!user) {
      return NextResponse.json(
        { message: "Identifiants invalides." },
        { status: 401 }
      );
    }

    if (!user.is_active) {
      return NextResponse.json(
        { message: "Ce compte est désactivé." },
        { status: 403 }
      );
    }

    const passwordMatches = await verifyPassword(body.password, user.password);

    if (!passwordMatches) {
      return NextResponse.json(
        { message: "Identifiants invalides." },
        { status: 401 }
      );
    }

    await setAuthCookie(user.id);

    return NextResponse.json({
      message: "Connexion réussie.",
      data: mapUserRow(user),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de se connecter.",
      },
      { status: 500 }
    );
  }
}