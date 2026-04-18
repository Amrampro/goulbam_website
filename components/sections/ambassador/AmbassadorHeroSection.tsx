"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AmbassadorHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1026] pt-32 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-[#05A2DA]/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-[#202B59]/70 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[25%] h-80 w-80 rounded-full bg-[#05A2DA]/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7DD3FC]"
            >
              Programme Ambassadeur
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
            >
              Recommandez un projet.
              <span className="bg-gradient-to-r from-[#7DD3FC] via-[#05A2DA] to-white bg-clip-text text-transparent">
                {" "}
                Gagnez 10%
              </span>{" "}
              sur les montants versés.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Chez GoulBAM Enterprises, nous valorisons les personnes qui nous
              recommandent. Si vous nous amenez un client avec un projet et que
              ce projet aboutit à un paiement, vous recevez automatiquement
              <span className="font-semibold text-[#7DD3FC]"> 10% du montant versé</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
              >
                Devenir ambassadeur
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir nos services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#111936] to-[#18214A] p-8">
                <div className="grid gap-4">
                  <div className="rounded-3xl border border-[#05A2DA]/20 bg-[#05A2DA]/10 p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#8BDDFF]">
                      Exemple
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-white">
                      Un client paie 1 000 000 FCFA
                    </h3>
                    <p className="mt-3 text-base text-slate-300">
                      Votre commission : <span className="font-semibold text-[#7DD3FC]">100 000 FCFA</span>
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-slate-300">Principe</p>
                      <p className="mt-2 text-base font-semibold text-white">
                        Simple et direct
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-slate-300">Récompense</p>
                      <p className="mt-2 text-base font-semibold text-white">
                        10% du montant versé
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm leading-7 text-slate-300">
                      Vous recommandez. Le client signe. Le client paie.
                      <span className="text-white font-medium"> Vous êtes récompensé.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}