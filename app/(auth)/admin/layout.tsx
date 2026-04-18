import type { ReactNode } from "react";

export default function AdminAuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(5,162,218,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(32,43,89,0.35),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
        {children}
      </div>
    </div>
  );
}