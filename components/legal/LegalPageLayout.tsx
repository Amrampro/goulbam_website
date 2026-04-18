import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type LegalPageLayoutProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  title,
  updatedAt,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="bg-[#FAF8F4]">
      <section className="py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-black tracking-tight text-[#202B59] sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Dernière mise à jour : {updatedAt}
            </p>

            <div className="mt-12 space-y-10 text-[15px] leading-8 text-slate-600">
              {children}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}