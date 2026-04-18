import { UpdateAccountPayload } from "@/types/user";

export function validateAccountUpdatePayload(payload: UpdateAccountPayload) {
  if (!payload.fullName.trim()) {
    throw new Error("Le nom complet est obligatoire.");
  }

  if (!payload.email.trim()) {
    throw new Error("L’adresse e-mail est obligatoire.");
  }

  const wantsPasswordChange =
    payload.currentPassword ||
    payload.newPassword ||
    payload.confirmNewPassword;

  if (wantsPasswordChange) {
    if (!payload.currentPassword?.trim()) {
      throw new Error("Le mot de passe actuel est obligatoire.");
    }

    if (!payload.newPassword?.trim()) {
      throw new Error("Le nouveau mot de passe est obligatoire.");
    }

    if (payload.newPassword.length < 6) {
      throw new Error("Le nouveau mot de passe doit contenir au moins 6 caractères.");
    }

    if (payload.newPassword !== payload.confirmNewPassword) {
      throw new Error("La confirmation du nouveau mot de passe ne correspond pas.");
    }
  }
}