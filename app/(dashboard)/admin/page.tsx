import { StatCard } from "@/components/admin/dashboard/stat-card";
import { dashboardStats, recentActivities } from "@/mocks/dashboard.mock";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="rounded-[28px] bg-gradient-to-r from-[#202B59] to-[#05A2DA] p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/80">
            GoulBAM Enterprises
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Tableau de bord administrateur
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-cyan-50/90">
            Gérez vos contenus, suivez les éléments importants du site et préparez
            les futures intégrations backend depuis une interface propre et premium.
          </p>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            helper={stat.helper}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Vue d’ensemble</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Cette zone servira plus tard à afficher des graphiques, les dernières
            publications, les performances des contenus et les nouveaux leads.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">Contenus publiés</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">8</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">Éléments featured</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">3</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">Activité récente</h3>
          <div className="mt-5 space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}