import { NextResponse } from "next/server";
import { getAllUsers, mapUserRow, requireAdminUser } from "@/lib/auth.server";

export async function GET() {
  try {
    await requireAdminUser();

    const users = await getAllUsers();

    return NextResponse.json({
      data: users.map(mapUserRow),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Impossible de récupérer les utilisateurs.",
      },
      { status: 403 }
    );
  }
}