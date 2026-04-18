import BlogHeroSection from "@/components/sections/blog/BlogHeroSection";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";
import { getPublishedBlogPosts } from "@/lib/blog.public";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <main>
      <BlogHeroSection />
      <BlogGridSection posts={posts} />
    </main>
  );
}