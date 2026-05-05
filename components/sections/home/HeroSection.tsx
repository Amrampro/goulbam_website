"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import Container from "@/components/ui/Container";

const slides = [
  {
    eyebrow: "GoulBAM Enterprises",
    title: "Le monde Numérique",
    highlight: "à une autre dimension",
    description:
      "Nous concevons des solutions web, mobiles et métiers pour aider les entreprises à évoluer avec des outils modernes.",
    image: "/images/transform_the_world.jpg",
    icon: Code2,
    primaryHref: "/contact",
    primaryLabel: "Démarrer un projet",
    secondaryHref: "/projets",
    secondaryLabel: "Voir nos réalisations",
  },
  {
    eyebrow: "Solutions digitales",
    title: "Structurez vos activités",
    highlight: "avec des outils modernes",
    description:
      "Plateformes métiers, systèmes de gestion, automatisation et interfaces adaptées aux besoins réels de votre organisation.",
    image: "/images/nexium/about.jpg",
    icon: BriefcaseBusiness,
    primaryHref: "/services",
    primaryLabel: "Découvrir nos services",
    secondaryHref: "/contact",
    secondaryLabel: "Demander un devis",
  },
  {
    eyebrow: "Nexium Institute",
    title: "Formez-vous au numérique",
    highlight: "par la pratique",
    description:
      "Nexium Institute transmet des compétences concrètes en informatique, développement et outils numériques.",
    image: "/images/nexium/nexium.jpg",
    icon: GraduationCap,
    primaryHref: "/nexium-institute",
    primaryLabel: "Découvrir Nexium",
    secondaryHref: "/contact",
    secondaryLabel: "Nous contacter",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];
  const Icon = activeSlide.icon;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1026] pt-28 text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#0B1026]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/60 via-[#0B1026]/30 to-[#0B1026]/70" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center py-20">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#05A2DA]/30 bg-[#05A2DA]/15 px-4 py-2 text-sm text-[#8BDDFF] backdrop-blur-sm">
                  <Sparkles size={16} />
                  {activeSlide.eyebrow}
                </div>

                {/* <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-[#7DD3FC] backdrop-blur-sm">
                  <Icon size={26} />
                </div> */}

                <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  {activeSlide.title}
                  <span className="block bg-gradient-to-r from-[#7DD3FC] via-[#05A2DA] to-white bg-clip-text text-transparent">
                    {activeSlide.highlight}
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                  {activeSlide.description}
                </p>

                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href={activeSlide.primaryHref}
                    className="inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
                  >
                    {activeSlide.primaryLabel}
                    <ArrowRight className="ml-2" size={18} />
                  </Link>

                  <Link
                    href={activeSlide.secondaryHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    {activeSlide.secondaryLabel}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-10 bg-[#05A2DA]"
                        : "w-2.5 bg-white/45 hover:bg-white/70"
                    }`}
                    aria-label={`Afficher le slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/15"
                  aria-label="Slide précédent"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/15"
                  aria-label="Slide suivant"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}