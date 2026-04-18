import { LoginPayload, RegisterPayload } from "@/types/auth";

export function validateLoginPayload(payload: LoginPayload) {
  if (!payload.email.trim()) {
    throw new Error("L’adresse e-mail est obligatoire.");
  }

  if (!payload.password.trim()) {
    throw new Error("Le mot de passe est obligatoire.");
  }
}

export function validateRegisterPayload(payload: RegisterPayload) {
  if (!payload.fullName.trim()) {
    throw new Error("Le nom complet est obligatoire.");
  }

  if (!payload.email.trim()) {
    throw new Error("L’adresse e-mail est obligatoire.");
  }

  if (!payload.password.trim()) {
    throw new Error("Le mot de passe est obligatoire.");
  }

  if (payload.password.length < 6) {
    throw new Error("Le mot de passe doit contenir au moins 6 caractères.");
  }

  if (payload.password !== payload.confirmPassword) {
    throw new Error("Les mots de passe ne correspondent pas.");
  }
}