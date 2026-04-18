import { NextResponse } from "next/server";
import {
  getUserByEmail,
  mapUserRow,
  requireAuthenticatedUser,
  updateOwnAccount,
  updateOwnPassword,
  verifyPassword,
} from "@/lib/auth.server";
import { validateAccountUpdatePayload } from "@/lib/account-validation";
import { UpdateAccountPayload } from "@/types/user";

export async function GET() {
  try {
    const user = await requireAuthenticatedUser();

    return NextResponse.json({
      data: mapUserRow(user),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de récupérer le compte.",
      },
      { status: 401 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const currentUser = await requireAuthenticatedUser();
    const body = (await request.json()) as UpdateAccountPayload;

    validateAccountUpdatePayload(body);

    const normalizedEmail = body.email.trim().toLowerCase();

    const existingEmailUser = await getUserByEmail(normalizedEmail);

    if (existingEmailUser && existingEmailUser.id !== currentUser.id) {
      return NextResponse.json(
        { message: "Cette adresse e-mail est déjà utilisée." },
        { status: 422 }
      );
    }

    const wantsPasswordChange =
      body.currentPassword ||
      body.newPassword ||
      body.confirmNewPassword;

    if (wantsPasswordChange) {
      const passwordMatches = await verifyPassword(
        body.currentPassword as string,
        currentUser.password
      );

      if (!passwordMatches) {
        return NextResponse.json(
          { message: "Le mot de passe actuel est incorrect." },
          { status: 422 }
        );
      }
    }

    const updatedUser = await updateOwnAccount({
      userId: currentUser.id,
      fullName: body.fullName.trim(),
      email: normalizedEmail,
      phone: body.phone?.trim() || null,
    });

    if (!updatedUser) {
      throw new Error("Impossible de mettre à jour le compte.");
    }

    if (wantsPasswordChange && body.newPassword) {
      await updateOwnPassword({
        userId: currentUser.id,
        newPassword: body.newPassword,
      });
    }

    return NextResponse.json({
      message: "Compte mis à jour avec succès.",
      data: mapUserRow(updatedUser),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de mettre à jour le compte.",
      },
      { status: 500 }
    );
  }
}