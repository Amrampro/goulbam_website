"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1026] pt-32 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-[-10%] h-80 w-80 rounded-full bg-[#05A2DA]/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-[#202B59]/70 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[30%] h-80 w-80 rounded-full bg-[#05A2DA]/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl py-24 sm:py-28">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7DD3FC]"
          >
            Nos services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
          >
            Des expertises pensées pour
            <span className="bg-gradient-to-r from-[#7DD3FC] via-[#05A2DA] to-white bg-clip-text text-transparent">
              {" "}
              concevoir, développer et valoriser
            </span>{" "}
            vos projets.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-300"
          >
            GoulBAM Enterprises accompagne les entreprises, organisations,
            institutions et porteurs de projets avec des services à la fois
            techniques, créatifs et stratégiques.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}