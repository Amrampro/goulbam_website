import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BlogPostItem } from "@/types/blog";

type BlogDetailRelatedSectionProps = {
  currentSlug: string;
  posts: BlogPostItem[];
};

export default function BlogDetailRelatedSection({
  currentSlug,
  posts,
}: BlogDetailRelatedSectionProps) {
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  if (!relatedPosts.length) {
    return null;
  }

  return (
    <section className="bg-[#F5FAFF] py-24">
      <Container>
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
            À lire aussi
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#202B59] sm:text-4xl">
            D’autres contenus qui pourraient vous intéresser
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(32,43,89,0.12)]"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.coverImage || "/images/placeholders/blog-cover.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-[#05A2DA]">{post.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[#202B59]">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}