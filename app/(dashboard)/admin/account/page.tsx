"use client";

import { useEffect, useState } from "react";
import { PageContainer } from "@/components/admin/shared/page-container";
import { InputField } from "@/components/admin/shared/input-field";
import { userService } from "@/services/user.service";
import { UpdateAccountPayload } from "@/types/user";

export default function AdminAccountPage() {
  const [form, setForm] = useState<UpdateAccountPayload>({
    fullName: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const account = await userService.getMyAccount();
        setForm((prev) => ({
          ...prev,
          fullName: account.fullName,
          email: account.email,
          phone: "",
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur de chargement.");
      } finally {
        setLoading(false);
      }
    };

    loadAccount();
  }, []);

  const updateField = (key: keyof UpdateAccountPayload, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      await userService.updateMyAccount(form);

      setSuccess("Compte mis à jour avec succès.");

      setForm((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <PageContainer
        title="Mon compte"
        description="Chargement des informations du compte..."
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Chargement...
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="Mon compte"
      description="Modifiez vos informations personnelles et votre mot de passe."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">
              Informations générales
            </h2>

            <InputField
              label="Nom complet"
              value={form.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
            />

            <InputField
              label="Adresse e-mail"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />

            <InputField
              label="Téléphone"
              type="text"
              value={form.phone ?? ""}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">
              Changer le mot de passe
            </h2>

            <InputField
              label="Mot de passe actuel"
              type="password"
              value={form.currentPassword ?? ""}
              onChange={(e) => updateField("currentPassword", e.target.value)}
            />

            <InputField
              label="Nouveau mot de passe"
              type="password"
              value={form.newPassword ?? ""}
              onChange={(e) => updateField("newPassword", e.target.value)}
            />

            <InputField
              label="Confirmer le nouveau mot de passe"
              type="password"
              value={form.confirmNewPassword ?? ""}
              onChange={(e) =>
                updateField("confirmNewPassword", e.target.value)
              }
            />
          </div>
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
            {error}
          </div>
        ) : null}

        {success ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {success}
          </div>
        ) : null}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="rounded-2xl bg-[#202B59] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Enregistrement..." : "Mettre à jour"}
          </button>
        </div>
      </form>
    </PageContainer>
  );
}