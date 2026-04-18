type StatCardProps = {
  label: string;
  value: number | string;
  helper?: string;
};

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      {helper ? <p className="mt-2 text-sm text-cyan-700">{helper}</p> : null}
    </div>
  );
}