import { AdminUser, LoginPayload, RegisterPayload } from "@/types/auth";

type ApiResponse<T> = {
  data?: T | null;
  message?: string;
};

async function parseJson<T>(response: Response): Promise<T> {
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || "Une erreur est survenue.");
  }

  return json;
}

export const adminAuthService = {
  async login(payload: LoginPayload): Promise<AdminUser> {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await parseJson<ApiResponse<AdminUser>>(response);

    if (!json.data) {
      throw new Error("Utilisateur introuvable.");
    }

    return json.data;
  },

  async register(payload: RegisterPayload): Promise<AdminUser> {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await parseJson<ApiResponse<AdminUser>>(response);

    if (!json.data) {
      throw new Error("Utilisateur introuvable.");
    }

    return json.data;
  },

  async getSession(): Promise<AdminUser | null> {
    const response = await fetch("/api/auth/me", {
      method: "GET",
      cache: "no-store",
    });

    const json = await parseJson<ApiResponse<AdminUser | null>>(response);
    return json.data ?? null;
  },

  async logout(): Promise<void> {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    await parseJson<ApiResponse<null>>(response);
  },
};