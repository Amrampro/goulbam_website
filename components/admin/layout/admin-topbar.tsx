"use client";

import { useRouter } from "next/navigation";
import { adminAuthService } from "@/services/admin-auth.service";
import { useAdminSession } from "@/hooks/use-admin-session";

export function AdminTopbar() {
  const router = useRouter();
  const { user } = useAdminSession();

  const handleLogout = async () => {
    await adminAuthService.logout();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">Administration</h1>
        <p className="text-sm text-slate-500">
          Gérez les contenus et modules de GoulBAM Enterprises
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-slate-900">{user?.fullName ?? "Utilisateur"}</p>
          <p className="text-xs text-slate-500">{user?.email ?? ""}</p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Déconnexion
        </button>
      </div>
    </header>
  );
}