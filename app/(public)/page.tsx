import HeroSection from "@/components/sections/home/HeroSection";
import BrandStripSection from "@/components/sections/home/BrandStripSection";
import ServicesPreviewSection from "@/components/sections/home/ServicesPreviewSection";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import ProjectsPreviewSection from "@/components/sections/home/ProjectsPreviewSection";
import NexiumInstitutePreviewSection from "@/components/sections/home/NexiumInstitutePreviewSection";
import FinalCtaSection from "@/components/sections/home/FinalCtaSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandStripSection />
      <ServicesPreviewSection />
      <WhyUsSection />
      <ProjectsPreviewSection />
      <NexiumInstitutePreviewSection />
      <FinalCtaSection />
    </main>
  );
}