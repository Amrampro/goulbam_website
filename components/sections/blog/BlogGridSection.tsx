"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BlogPostItem } from "@/types/blog";
import { formatDisplayDate } from "@/lib/utils/format-display-date";

type BlogGridSectionProps = {
  posts: BlogPostItem[];
};

export default function BlogGridSection({ posts }: BlogGridSectionProps) {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            Articles
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            Un espace de contenu pensé pour partager de la valeur
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Découvrez nos articles autour du numérique, du design, du consulting
            et de l’évolution des projets.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(32,43,89,0.12)]"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={
                      post.coverImage || "/images/placeholders/blog-cover.jpg"
                    }
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026]/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#202B59]">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-[#202B59]">
                      {post.title}
                    </h3>
                    <ArrowUpRight
                      className="shrink-0 text-[#05A2DA] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={20}
                    />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F0F9FF] px-3 py-1 text-xs font-medium text-[#0F5E7A]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                    <span>{formatDisplayDate(post.publishedAt)}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
