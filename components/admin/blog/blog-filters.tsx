"use client";

type BlogFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
};

export function BlogFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: BlogFiltersProps) {
  return (
    <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_220px]">
      <input
        type="text"
        placeholder="Rechercher par titre, catégorie ou auteur..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
      />

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
      >
        <option value="all">Tous les statuts</option>
        <option value="draft">Brouillon</option>
        <option value="published">Publié</option>
        <option value="archived">Archivé</option>
      </select>
    </div>
  );
}