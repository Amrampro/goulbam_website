import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BrandStripSection() {
  return (
    <section className="bg-white py-8">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-[#F8FBFF] px-6 py-8 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                GoulBAM Enterprises
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#202B59]">
                Une vision structurée du digital, de la conception à l’impact.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["Innovation", "Performance", "Structure", "Exécution"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-[#202B59] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}