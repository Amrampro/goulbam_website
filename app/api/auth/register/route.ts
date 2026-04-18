import { NextResponse } from "next/server";
import { createUser, getUserByEmail, mapUserRow } from "@/lib/auth.server";
import { validateRegisterPayload } from "@/lib/auth-validation";
import { RegisterPayload } from "@/types/auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegisterPayload;

    validateRegisterPayload(body);

    const existingUser = await getUserByEmail(body.email.trim().toLowerCase());

    if (existingUser) {
      return NextResponse.json(
        { message: "Un compte existe déjà avec cette adresse e-mail." },
        { status: 422 }
      );
    }

    const createdUser = await createUser({
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      password: body.password,
    });

    return NextResponse.json({
      message: "Compte créé avec succès.",
      data: mapUserRow(createdUser),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de créer le compte.",
      },
      { status: 500 }
    );
  }
}