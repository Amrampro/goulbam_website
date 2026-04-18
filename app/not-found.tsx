import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1026] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
          Page introuvable
        </p>
        <h1 className="mt-4 text-4xl font-bold">Cette page n’existe pas.</h1>
        <p className="mt-6 text-base leading-8 text-slate-300">
          Le projet demandé est introuvable ou le lien n’est plus valide.
        </p>

        <div className="mt-8">
          <Link
            href="/projets"
            className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0294c8]"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    </main>
  );
}