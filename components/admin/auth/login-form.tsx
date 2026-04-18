"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { adminAuthService } from "@/services/admin-auth.service";
import { InputField } from "@/components/admin/shared/input-field";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await adminAuthService.login({ email, password });

      if (!user.isAdmin) {
        setError(
          "Votre compte a bien été créé, mais il n’a pas encore les droits administrateur."
        );
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField
        label="Adresse e-mail"
        type="email"
        placeholder="admin@goulbam.com"
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

      {error ? (
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Connexion..." : "Se connecter"}
      </button>

      <p className="text-center text-sm text-slate-300">
        Pas encore de compte ?{" "}
        <Link href="/admin/register" className="font-medium text-cyan-300 hover:text-cyan-200">
          Créer un compte
        </Link>
      </p>
    </form>
  );
}