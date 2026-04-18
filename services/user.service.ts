import { AdminUser } from "@/types/auth";
import {
  UpdateAccountPayload,
  UpdateUserRolePayload,
  UpdateUserStatusPayload,
  UserItem,
} from "@/types/user";

type ApiResponse<T> = {
  data?: T;
  message?: string;
};

async function parseJson<T>(response: Response): Promise<T> {
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || "Une erreur est survenue.");
  }

  return json;
}

export const userService = {
  async getMyAccount(): Promise<AdminUser> {
    const response = await fetch("/api/account/me", {
      method: "GET",
      cache: "no-store",
    });

    const json = await parseJson<ApiResponse<AdminUser>>(response);

    if (!json.data) {
      throw new Error("Impossible de récupérer le compte.");
    }

    return json.data;
  },

  async updateMyAccount(payload: UpdateAccountPayload): Promise<AdminUser> {
    const response = await fetch("/api/account/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await parseJson<ApiResponse<AdminUser>>(response);

    if (!json.data) {
      throw new Error("Impossible de mettre à jour le compte.");
    }

    return json.data;
  },

  async getUsers(): Promise<UserItem[]> {
    const response = await fetch("/api/admin/users", {
      method: "GET",
      cache: "no-store",
    });

    const json = await parseJson<ApiResponse<UserItem[]>>(response);
    return json.data ?? [];
  },

  async updateUserRole(
    userId: number,
    payload: UpdateUserRolePayload
  ): Promise<UserItem> {
    const response = await fetch(`/api/admin/users/${userId}/role`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await parseJson<ApiResponse<UserItem>>(response);

    if (!json.data) {
      throw new Error("Impossible de mettre à jour le rôle.");
    }

    return json.data;
  },

  async updateUserStatus(
    userId: number,
    payload: UpdateUserStatusPayload
  ): Promise<UserItem> {
    const response = await fetch(`/api/admin/users/${userId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await parseJson<ApiResponse<UserItem>>(response);

    if (!json.data) {
      throw new Error("Impossible de mettre à jour le statut.");
    }

    return json.data;
  },
};