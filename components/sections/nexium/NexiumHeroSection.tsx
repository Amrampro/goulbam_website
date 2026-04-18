"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionImageCard from "@/components/ui/SectionImageCard";

export default function NexiumHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1026] pt-32 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-[-10%] h-80 w-80 rounded-full bg-[#05A2DA]/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[12%] h-96 w-96 rounded-full bg-[#202B59]/70 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[25%] h-80 w-80 rounded-full bg-[#05A2DA]/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1fr_0.95fr] lg:py-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7DD3FC]"
            >
              Nexium Institute
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
            >
              Un institut pensé pour
              <span className="bg-gradient-to-r from-[#7DD3FC] via-[#05A2DA] to-white bg-clip-text text-transparent">
                {" "}
                former avec clarté, pratique et ambition
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Nexium Institute est l’institut de formation de GoulBAM
              Enterprises. Sa mission est de transmettre des compétences en
              informatique et en numérique à travers des parcours concrets,
              modernes et orientés pratique.
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
                Demander des informations
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir GoulBAM Enterprises
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <SectionImageCard
              src="/images/nexium/hero.jpg"
              alt="Nexium Institute - formation en informatique"
              className="min-h-[420px] w-full"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-[#0B1026]/70 p-5 backdrop-blur-md">
              <p className="text-sm font-medium text-[#7DD3FC]">
                Formation pratique • montée en compétences • numérique
              </p>
              <p className="mt-2 text-base text-white/90">
                Un cadre moderne pour apprendre, progresser et se professionnaliser.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}