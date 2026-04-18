import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Smartphone,
  PenTool,
  GraduationCap,
  Megaphone,
  Handshake,
  FolderKanban,
  BrainCircuit,
  Users,
  Globe2,
  CheckCircle2,
  Mail,
  MonitorSmartphone,
  FileText,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const whyJoinItems = [
  {
    number: "01",
    title: "Des projets concrets et variés",
    description:
      "Travaillez sur des projets digitaux, techniques, créatifs et stratégiques qui répondent à de vrais besoins et produisent une vraie valeur.",
  },
  {
    number: "02",
    title: "Une évolution continue",
    description:
      "Nous valorisons l’apprentissage, la progression, la montée en compétences et la capacité à évoluer avec méthode et ambition.",
  },
  {
    number: "03",
    title: "Une entreprise sans frontières",
    description:
      "Peu importe où vous vous trouvez, vous pouvez postuler et collaborer avec nous si votre profil, votre sérieux et votre niveau correspondent à notre vision.",
  },
  {
    number: "04",
    title: "Une vision orientée impact",
    description:
      "Nous voulons construire une entreprise qui accompagne durablement ses clients, structure des projets utiles et crée des opportunités réelles.",
  },
];

const profiles = [
  {
    icon: Code2,
    title: "Développeurs web",
    description:
      "Frontend, backend, full stack, intégration, plateformes métier, sites corporate et applications web.",
  },
  {
    icon: Smartphone,
    title: "Développeurs mobile",
    description:
      "Profils capables de concevoir des applications mobiles robustes, utiles et bien pensées pour le terrain.",
  },
  {
    icon: PenTool,
    title: "Designers UI/UX & graphistes",
    description:
      "Création d’interfaces, identité visuelle, design de marque, supports visuels et expérience utilisateur.",
  },
  {
    icon: FolderKanban,
    title: "Chefs de projet",
    description:
      "Profils capables de structurer, coordonner, suivre et piloter l’avancement des projets avec rigueur.",
  },
  {
    icon: FileText,
    title: "Rédacteurs & créateurs de contenu",
    description:
      "Production de contenus professionnels pour le blog, les documents, les réseaux sociaux et les supports de communication.",
  },
  {
    icon: GraduationCap,
    title: "Formateurs",
    description:
      "Professionnels capables de transmettre des compétences concrètes dans le cadre des activités de formation de l’entreprise.",
  },
  {
    icon: Briefcase,
    title: "Consultants & analystes",
    description:
      "Profils capables d’accompagner les clients dans leur réflexion stratégique, technique ou organisationnelle.",
  },
  {
    icon: Megaphone,
    title: "Business Developers",
    description:
      "Profils capables d’identifier des opportunités, développer des partenariats, prospecter et attirer de nouveaux clients.",
  },
  {
    icon: Handshake,
    title: "Apporteurs d’affaires",
    description:
      "Professionnels disposant d’un réseau ou d’une capacité à connecter l’entreprise à de nouvelles opportunités commerciales.",
  },
  {
    icon: Users,
    title: "Support administratif & coordination",
    description:
      "Profils capables d’aider dans la structuration interne, le suivi administratif, la rédaction et l’organisation.",
  },
];

const values = [
  "Rigueur dans l’exécution",
  "Autonomie et sens des responsabilités",
  "Capacité à bien communiquer",
  "Esprit d’initiative",
  "Mentalité de croissance",
  "Volonté de produire de la valeur",
];

const processSteps = [
  {
    number: "01",
    title: "Candidature",
    description:
      "Envoyez-nous votre profil, votre CV, votre portfolio ou une présentation claire de votre parcours.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "Nous examinons votre candidature en fonction de vos compétences, de votre posture et de la pertinence de votre profil.",
  },
  {
    number: "03",
    title: "Échange",
    description:
      "Nous organisons un échange pour mieux comprendre votre parcours, votre vision et votre manière de travailler.",
  },
  {
    number: "04",
    title: "Évaluation",
    description:
      "Selon le poste, un test pratique, une étude de cas ou un exercice peut être proposé.",
  },
  {
    number: "05",
    title: "Collaboration",
    description:
      "Si le profil est validé, nous mettons en place l’intégration, la mission ou le cadre de collaboration adapté.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1026] pt-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/careers/careers-hero.jpg"
            alt="Talents et collaboration chez GoulBAM Enterprises"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0B1026]/85" />
          <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-[#05A2DA]/20 blur-3xl" />
          <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-[#202B59]/70 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="max-w-5xl py-24 sm:py-28">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7DD3FC]">
                Carrières
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Rejoignez une entreprise
                <span className="bg-gradient-to-r from-[#7DD3FC] via-[#05A2DA] to-white bg-clip-text text-transparent">
                  {" "}
                  ambitieuse, innovante et sans frontières
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Chez GoulBAM Enterprises, nous construisons des solutions
                digitales, techniques et stratégiques pour accompagner des
                entreprises, des organisations et des porteurs de projets. Nous
                croyons que les meilleurs talents peuvent se trouver partout.
                Peu importe votre pays ou votre localisation, vous pouvez
                postuler et travailler avec nous si votre profil est aligné avec
                notre vision.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#profils"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
                >
                  Voir les opportunités
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Postuler spontanément
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* WHY JOIN */}
      <section className="bg-[#FAFBFD] py-24">
        <Container>
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Pourquoi nous rejoindre
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-5xl">
              Plus qu’un poste, une opportunité de croissance
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyJoinItems.map((item, index) => (
              <AnimatedSection key={item.number} delay={index * 0.05}>
                <div className="h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(32,43,89,0.08)]">
                  <p className="text-3xl font-bold text-[#05A2DA]/80">
                    {item.number}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[#202B59]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* BORDERLESS */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                Notre fonctionnement
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
                Une entreprise ouverte aux talents du monde
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                GoulBAM Enterprises évolue dans une logique de collaboration
                moderne, agile et sans frontières. Nous sommes ouverts aux
                profils capables de travailler à distance, de collaborer
                efficacement, de communiquer clairement et de produire avec
                sérieux, autonomie et professionnalisme.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Nous croyons que la valeur d’un professionnel ne dépend pas
                uniquement de sa localisation, mais de sa capacité à comprendre
                les besoins, proposer des solutions, respecter les délais et
                contribuer à une dynamique d’équipe saine et ambitieuse.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="rounded-[32px] border border-slate-200 bg-[#F8FBFF] p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#05A2DA]/10 text-[#05A2DA]">
                    <Globe2 size={26} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#202B59]">
                      Le talent n’a pas de frontière
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      Où que vous soyez, si vous avez les compétences, la
                      mentalité et la capacité à produire de la valeur, votre
                      profil peut nous intéresser.
                    </p>

                    <div className="mt-6 space-y-4">
                      {[
                        "Ouverture aux collaborations à distance",
                        "Approche orientée résultats et qualité",
                        "Possibilité de contribuer depuis différents pays",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-[#05A2DA]"
                          />
                          <p className="text-sm leading-7 text-slate-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* PROFILES */}
      <section id="profils" className="bg-[#FAFBFD] py-24">
        <Container>
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Profils recherchés
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-5xl">
              Des talents techniques, créatifs, stratégiques et business
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Nous recherchons des profils capables d’apporter une vraie valeur
              à l’entreprise, que ce soit dans la production, la gestion, la
              relation client, la formation ou le développement commercial.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {profiles.map((profile, index) => {
              const Icon = profile.icon;

              return (
                <AnimatedSection key={profile.title} delay={index * 0.04}>
                  <div className="h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(32,43,89,0.08)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202B59]/5 text-[#202B59]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-[#202B59]">
                      {profile.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {profile.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                Ce que nous valorisons
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
                Au-delà des compétences, nous cherchons un état d’esprit
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Nous cherchons des personnes capables de travailler avec
                sérieux, clarté, autonomie et volonté de produire quelque chose
                d’utile. Les compétences comptent, mais la posture et la
                mentalité comptent tout autant.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value}
                    className="rounded-[24px] border border-slate-200 bg-[#F8FBFF] p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#05A2DA]/10 text-[#05A2DA]">
                        <BrainCircuit size={18} />
                      </div>
                      <p className="text-base font-medium text-[#202B59]">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-[#FAFBFD] py-24">
        <Container>
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
              Processus
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-5xl">
              Comment nous recrutons
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.05}>
                <div className="h-full rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#202B59] text-lg font-bold text-white">
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[#202B59]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#202B59] via-[#16214A] to-[#0B1026] py-24 text-white">
        <Container>
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
              Prêt(e) à construire avec nous ?
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Où que vous soyez, votre profil peut nous intéresser
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Peu importe votre profil, envoyez-nous votre candidature et CV si
              vous pensez pouvoir contribuer à notre vision. Vous pouvez le
              faire à l'addresse{" "}
              <i>
                <u>contact@goulbam.com</u>
              </i>{" "}
              ou{" "}
              <i>
                <u>goulbam8@gmail.com</u>
              </i>{" "}
              ou via le formulaire de contact sur notre site. Nous étudierons
              votre profil avec attention et vous recontacterons si nous pensons
              qu'il peut correspondre à nos besoins et à notre vision.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="mailto:contact@goulbam.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
              >
                <Mail size={18} />
                contact@goulbam.com
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Nous contacter via le formulaire
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
