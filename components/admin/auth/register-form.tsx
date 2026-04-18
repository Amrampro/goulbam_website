"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { adminAuthService } from "@/services/admin-auth.service";
import { InputField } from "@/components/admin/shared/input-field";

export function RegisterForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await adminAuthService.register({
        fullName,
        email,
        password,
        confirmPassword,
      });

      setSuccess(
        "Compte créé avec succès. Votre compte est enregistré comme utilisateur standard. Un administrateur devra vous accorder les droits admin."
      );

      setTimeout(() => {
        router.push("/admin/login");
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField
        label="Nom complet"
        type="text"
        placeholder="Votre nom complet"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <InputField
        label="Adresse e-mail"
        type="email"
        placeholder="nom@exemple.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label="Mot de passe"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <InputField
        label="Confirmer le mot de passe"
        type="password"
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {error ? (
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          {success}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Création..." : "Créer un compte"}
      </button>

      <p className="text-center text-sm text-slate-300">
        Vous avez déjà un compte ?{" "}
        <Link href="/admin/login" className="font-medium text-cyan-300 hover:text-cyan-200">
          Se connecter
        </Link>
      </p>
    </form>
  );
}