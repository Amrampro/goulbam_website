import { BlogStatus } from "@/types/blog";

type BlogStatusBadgeProps = {
  status: BlogStatus;
};

const statusMap: Record<
  BlogStatus,
  { label: string; className: string }
> = {
  draft: {
    label: "Brouillon",
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  published: {
    label: "Publié",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  archived: {
    label: "Archivé",
    className: "bg-slate-100 text-slate-700 border-slate-200",
  },
};

export function BlogStatusBadge({ status }: BlogStatusBadgeProps) {
  const config = statusMap[status];

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}