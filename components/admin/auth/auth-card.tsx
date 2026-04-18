import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
      <div className="mb-8">
        <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          GoulBAM Admin
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-300">{subtitle}</p>
      </div>

      {children}
    </div>
  );
}