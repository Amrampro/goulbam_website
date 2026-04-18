import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailHeroSection from "@/components/sections/blog/BlogDetailHeroSection";
import BlogDetailContentSection from "@/components/sections/blog/BlogDetailContentSection";
import BlogDetailRelatedSection from "@/components/sections/blog/BlogDetailRelatedSection";
import BlogDetailCtaSection from "@/components/sections/blog/BlogDetailCtaSection";
import {
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
} from "@/lib/blog.public";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article introuvable | GoulBAM Enterprises",
    };
  }

  return {
    title: `${post.title} | GoulBAM Enterprises`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  const post = await getPublishedBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = await getPublishedBlogPosts();

  return (
    <main>
      <BlogDetailHeroSection post={post} />
      <BlogDetailContentSection post={post} />
      <BlogDetailRelatedSection currentSlug={post.slug} posts={posts} />
      <BlogDetailCtaSection />
    </main>
  );
}