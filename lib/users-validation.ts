import { UpdateUserRolePayload, UpdateUserStatusPayload } from "@/types/user";

export function validateUpdateUserRolePayload(payload: UpdateUserRolePayload) {
  if (typeof payload.isAdmin !== "boolean") {
    throw new Error("La valeur isAdmin est invalide.");
  }
}

export function validateUpdateUserStatusPayload(payload: UpdateUserStatusPayload) {
  if (typeof payload.isActive !== "boolean") {
    throw new Error("La valeur isActive est invalide.");
  }
}