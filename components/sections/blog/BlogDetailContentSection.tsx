import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BlogPostItem } from "@/types/blog";

type BlogDetailContentSectionProps = {
  post: BlogPostItem;
};

export default function BlogDetailContentSection({
  post,
}: BlogDetailContentSectionProps) {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <AnimatedSection>
            <article className="max-w-4xl">
              <div className="space-y-8 text-base leading-8 text-slate-700">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <aside className="rounded-[32px] border border-slate-200 bg-[#F8FBFF] p-8 shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                  Tags
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#202B59] shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#05A2DA]">
                  À propos
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Cet article fait partie du blog de GoulBAM Enterprises,
                  conçu pour partager des idées, des analyses et des réflexions
                  autour du numérique, du design, du consulting et de l’innovation.
                </p>
              </div>
            </aside>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}