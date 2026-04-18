import { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { AdminUser } from "@/types/auth";

const AUTH_COOKIE_NAME = "goulbam_session";

type UserRow = RowDataPacket & {
  id: number;
  full_name: string;
  email: string;
  password: string;
  phone: string | null;
  avatar_path: string | null;
  is_admin: number;
  is_active: number;
  created_at: Date | string;
};

function formatDateTimeValue(value: Date | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

export function mapUserRow(row: UserRow): AdminUser {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    isAdmin: Boolean(row.is_admin),
    isActive: Boolean(row.is_active),
    avatar: row.avatar_path,
    createdAt: formatDateTimeValue(row.created_at),
  };
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}

export async function getUserByEmail(email: string) {
  const [rows] = await db.query<UserRow[]>(
    `
      SELECT *
      FROM users
      WHERE email = ?
      LIMIT 1
    `,
    [email]
  );

  if (!rows.length) return null;
  return rows[0];
}

export async function getUserById(id: number) {
  const [rows] = await db.query<UserRow[]>(
    `
      SELECT *
      FROM users
      WHERE id = ?
      LIMIT 1
    `,
    [id]
  );

  if (!rows.length) return null;
  return rows[0];
}

export async function createUser(payload: {
  fullName: string;
  email: string;
  password: string;
}) {
  const hashedPassword = await hashPassword(payload.password);

  const [result] = await db.query(
    `
      INSERT INTO users (
        full_name,
        email,
        password,
        is_admin,
        is_active
      )
      VALUES (?, ?, ?, 0, 1)
    `,
    [payload.fullName, payload.email, hashedPassword]
  );

  const insertId =
    typeof result === "object" && result && "insertId" in result
      ? Number(result.insertId)
      : null;

  if (!insertId) {
    throw new Error("Impossible de créer l'utilisateur.");
  }

  const createdUser = await getUserById(insertId);

  if (!createdUser) {
    throw new Error("Utilisateur créé mais introuvable.");
  }

  return createdUser;
}

export async function setAuthCookie(userId: number) {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE_NAME, String(userId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(AUTH_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return null;
  }

  const userId = Number(sessionCookie.value);

  if (!userId) {
    return null;
  }

  const user = await getUserById(userId);

  if (!user || !user.is_active) {
    return null;
  }

  return mapUserRow(user);
}

export async function requireAuthenticatedUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(AUTH_COOKIE_NAME);

  if (!sessionCookie?.value) {
    throw new Error("Non authentifié.");
  }

  const userId = Number(sessionCookie.value);

  if (!userId) {
    throw new Error("Session invalide.");
  }

  const user = await getUserById(userId);

  if (!user || !user.is_active) {
    throw new Error("Utilisateur introuvable ou inactif.");
  }

  return user;
}

export async function requireAdminUser() {
  const user = await requireAuthenticatedUser();

  if (!user.is_admin) {
    throw new Error("Accès administrateur requis.");
  }

  return user;
}

export async function updateOwnAccount(params: {
  userId: number;
  fullName: string;
  email: string;
  phone: string | null;
}) {
  await db.query(
    `
      UPDATE users
      SET
        full_name = ?,
        email = ?,
        phone = ?
      WHERE id = ?
    `,
    [params.fullName, params.email, params.phone, params.userId]
  );

  return getUserById(params.userId);
}

export async function updateOwnPassword(params: {
  userId: number;
  newPassword: string;
}) {
  const hashedPassword = await hashPassword(params.newPassword);

  await db.query(
    `
      UPDATE users
      SET password = ?
      WHERE id = ?
    `,
    [hashedPassword, params.userId]
  );
}

export async function getAllUsers() {
  const [rows] = await db.query<UserRow[]>(
    `
      SELECT *
      FROM users
      ORDER BY id DESC
    `
  );

  return rows;
}

export async function updateUserAdminRole(params: {
  userId: number;
  isAdmin: boolean;
}) {
  await db.query(
    `
      UPDATE users
      SET is_admin = ?
      WHERE id = ?
    `,
    [params.isAdmin ? 1 : 0, params.userId]
  );

  return getUserById(params.userId);
}

export async function updateUserActiveStatus(params: {
  userId: number;
  isActive: boolean;
}) {
  await db.query(
    `
      UPDATE users
      SET is_active = ?
      WHERE id = ?
    `,
    [params.isActive ? 1 : 0, params.userId]
  );

  return getUserById(params.userId);
}