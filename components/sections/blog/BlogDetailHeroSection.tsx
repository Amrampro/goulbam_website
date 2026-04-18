"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { BlogPostItem } from "@/types/blog";
import { formatDisplayDate } from "@/lib/utils/format-display-date";

type BlogDetailHeroSectionProps = {
  post: BlogPostItem;
};

export default function BlogDetailHeroSection({
  post,
}: BlogDetailHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1026] pt-32 text-white">
      <div className="absolute inset-0">
        <Image
          src={post.coverImage || "/images/placeholders/blog-cover.jpg"}
          alt={post.title}
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
            {post.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-300"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300"
          >
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDisplayDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readTime} de lecture</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
