import { NextResponse } from "next/server";
import {
  mapUserRow,
  requireAdminUser,
  updateUserAdminRole,
} from "@/lib/auth.server";
import { validateUpdateUserRolePayload } from "@/lib/users-validation";
import { UpdateUserRolePayload } from "@/types/user";

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

    const body = (await request.json()) as UpdateUserRolePayload;
    validateUpdateUserRolePayload(body);

    if (currentAdmin.id === userId && !body.isAdmin) {
      return NextResponse.json(
        { message: "Vous ne pouvez pas retirer votre propre rôle admin." },
        { status: 422 }
      );
    }

    const updatedUser = await updateUserAdminRole({
      userId,
      isAdmin: body.isAdmin,
    });

    if (!updatedUser) {
      return NextResponse.json(
        { message: "Utilisateur introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Rôle mis à jour avec succès.",
      data: mapUserRow(updatedUser),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de mettre à jour le rôle.",
      },
      { status: 500 }
    );
  }
}