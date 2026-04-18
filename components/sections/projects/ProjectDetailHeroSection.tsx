"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ProjectItem } from "@/types/project";

type ProjectDetailHeroSectionProps = {
  project: ProjectItem;
};

export default function ProjectDetailHeroSection({
  project,
}: ProjectDetailHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1026] pt-32 text-white">
      <div className="absolute inset-0">
        <Image
          src={project.coverImage || "/images/placeholders/project-cover.jpg"}
          alt={project.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-[#0B1026]/85" />
      </div>

      <Container className="relative">
        <div className="max-w-5xl py-24 sm:py-28">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7DD3FC]"
          >
            {project.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-300"
          >
            {project.fullDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">Client</p>
              <p className="mt-2 text-base font-semibold text-white">
                {project.client || "Non précisé"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">Année</p>
              <p className="mt-2 text-base font-semibold text-white">
                {project.year || "Non précisée"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">Services</p>
              <p className="mt-2 text-base font-semibold text-white">
                {project.services.length
                  ? project.services.join(" • ")
                  : "Non précisés"}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}