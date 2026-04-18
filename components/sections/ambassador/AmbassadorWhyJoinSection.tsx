import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const profiles = [
  "Entrepreneurs et freelances",
  "Responsables d’organisations",
  "Étudiants et jeunes professionnels",
  "Leaders communautaires ou associatifs",
  "Personnes disposant d’un bon réseau relationnel",
  "Toute personne capable de connecter un vrai besoin à une vraie solution",
];

export default function AmbassadorWhyJoinSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Pour qui ?
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Ce programme s’adresse aux personnes capables d’ouvrir des portes
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Si vous connaissez des personnes ou structures ayant des besoins en
            développement, consulting, marketing digital, design, conception ou
            formation, vous pouvez faire partie du programme.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {profiles.map((profile, index) => (
            <AnimatedSection key={profile} delay={index * 0.05}>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FBFF] px-5 py-4 text-sm font-medium text-[#202B59] shadow-sm">
                {profile}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}