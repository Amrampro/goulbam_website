"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Sparkles, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1026] pt-32 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-[#05A2DA]/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[18%] h-80 w-80 rounded-full bg-[#202B59]/60 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-72 w-72 rounded-full bg-[#05A2DA]/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[88vh] items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#05A2DA]/25 bg-[#05A2DA]/10 px-4 py-2 text-sm text-[#8BDDFF]"
            >
              <Sparkles size={16} />
              Solutions numériques, logiciels et formation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
            >
              Nous aidons les entreprises à
              <span className="bg-gradient-to-r from-[#7DD3FC] via-[#05A2DA] to-white bg-clip-text text-transparent">
                {" "}
                construire, digitaliser et faire évoluer{" "}
              </span>
              leurs projets.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              GoulBAM Enterprises conçoit des solutions web, des plateformes
              métiers, des outils digitaux et des expériences de formation en
              informatique à travers <span className="font-semibold text-[#7DD3FC]">Nexium Institute</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
              >
                Démarrer un projet
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="/projets"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir nos réalisations
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {[
                { value: "Web & Mobile", label: "Produits digitaux modernes" },
                { value: "Solutions métiers", label: "Pour entreprises et organisations" },
                { value: "Nexium Institute", label: "Formations en informatique" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-base font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="relative mx-auto max-w-xl"
            >
              <div className="absolute -left-10 top-16 h-32 w-32 rounded-full bg-[#05A2DA]/20 blur-2xl" />
              <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-[#202B59]/70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#111936] to-[#18214A] p-5">
                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-[#05A2DA]/20 bg-[#0E1634] p-5">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-[#05A2DA]/15 p-3 text-[#7DD3FC]">
                          <Code2 size={22} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-300">Développement</p>
                          <h3 className="text-lg font-semibold text-white">
                            Applications & plateformes
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="rounded-2xl bg-[#05A2DA]/15 p-3 text-[#7DD3FC] w-fit">
                          <Layers3 size={20} />
                        </div>
                        <h4 className="mt-4 text-base font-semibold text-white">
                          Processus digitalisés
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Outils internes, systèmes de gestion, automatisation.
                        </p>
                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="rounded-2xl bg-[#05A2DA]/15 p-3 text-[#7DD3FC] w-fit">
                          <GraduationCap size={20} />
                        </div>
                        <h4 className="mt-4 text-base font-semibold text-white">
                          Formation pratique
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Parcours concrets en informatique via Nexium Institute.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-[#05A2DA]/20 bg-gradient-to-r from-[#05A2DA]/15 to-transparent p-5">
                      <p className="text-sm text-[#8BDDFF]">
                        Une entreprise pensée pour créer de la valeur avec la technologie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}