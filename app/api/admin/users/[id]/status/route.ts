import { NextResponse } from "next/server";
import {
  mapUserRow,
  requireAdminUser,
  updateUserActiveStatus,
} from "@/lib/auth.server";
import { validateUpdateUserStatusPayload } from "@/lib/users-validation";
import { UpdateUserStatusPayload } from "@/types/user";

type Context = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: Context) {
  try {
    const currentAdmin = await requireAdminUser();
    const { id } = await context.params;
    const userId = Number(id);

    if (!userId) {
      return NextResponse.json(
        { message: "Identifiant utilisateur invalide." },
        { status: 422 }
      );
    }

    const body = (await request.json()) as UpdateUserStatusPayload;
    validateUpdateUserStatusPayload(body);

    if (currentAdmin.id === userId && !body.isActive) {
      return NextResponse.json(
        { message: "Vous ne pouvez pas désactiver votre propre compte." },
        { status: 422 }
      );
    }

    const updatedUser = await updateUserActiveStatus({
      userId,
      isActive: body.isActive,
    });

    if (!updatedUser) {
      return NextResponse.json(
        { message: "Utilisateur introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Statut mis à jour avec succès.",
      data: mapUserRow(updatedUser),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de mettre à jour le statut.",
      },
      { status: 500 }
    );
  }
}