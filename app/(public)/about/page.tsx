import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutStorySection from "@/components/sections/about/AboutStorySection";
import AboutValuesSection from "@/components/sections/about/AboutValuesSection";
import AboutFounderSection from "@/components/sections/about/AboutFounderSection";
import AboutStatsSection from "@/components/sections/about/AboutStatsSection";
import AboutCtaSection from "@/components/sections/about/AboutCtaSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutFounderSection />
      <AboutStatsSection />
      <AboutCtaSection />
    </main>
  );
}