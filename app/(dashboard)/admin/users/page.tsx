"use client";

import { useEffect, useState } from "react";
import { PageContainer } from "@/components/admin/shared/page-container";
import { userService } from "@/services/user.service";
import { UserItem } from "@/types/user";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de chargement.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleToggleAdmin = async (user: UserItem) => {
    try {
      const updated = await userService.updateUserRole(user.id, {
        isAdmin: !user.isAdmin,
      });

      setUsers((prev) =>
        prev.map((item) => (item.id === updated.id ? updated : item))
      );
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erreur.");
    }
  };

  const handleToggleStatus = async (user: UserItem) => {
    try {
      const updated = await userService.updateUserStatus(user.id, {
        isActive: !user.isActive,
      });

      setUsers((prev) =>
        prev.map((item) => (item.id === updated.id ? updated : item))
      );
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erreur.");
    }
  };

  return (
    <PageContainer
      title="Gestion des utilisateurs"
      description="Consultez les utilisateurs, activez ou désactivez les comptes et changez les rôles administrateurs."
    >
      {loading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          Chargement des utilisateurs...
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
          {error}
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-6 py-4 font-medium">Utilisateur</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Rôle</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium">Créé le</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          {user.fullName}
                        </p>
                        <p className="text-xs text-slate-500">ID #{user.id}</p>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-700">
                      {user.email}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
                          user.isAdmin
                            ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                            : "border-slate-200 bg-slate-50 text-slate-700"
                        }`}
                      >
                        {user.isAdmin ? "Administrateur" : "Utilisateur"}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
                          user.isActive
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-rose-200 bg-rose-50 text-rose-700"
                        }`}
                      >
                        {user.isActive ? "Actif" : "Inactif"}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-700">
                      {user.createdAt}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleToggleAdmin(user)}
                          className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                          {user.isAdmin ? "Retirer admin" : "Rendre admin"}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleToggleStatus(user)}
                          className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                            user.isActive
                              ? "border border-rose-200 text-rose-600 hover:bg-rose-50"
                              : "border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                          }`}
                        >
                          {user.isActive ? "Désactiver" : "Activer"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </PageContainer>
  );
}