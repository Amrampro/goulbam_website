import NexiumHeroSection from "@/components/sections/nexium/NexiumHeroSection";
import NexiumAboutSection from "@/components/sections/nexium/NexiumAboutSection";
import NexiumProgramsSection from "@/components/sections/nexium/NexiumProgramsSection";
import NexiumApproachSection from "@/components/sections/nexium/NexiumApproachSection";
import NexiumCtaSection from "@/components/sections/nexium/NexiumCtaSection";

export default function NexiumInstitutePage() {
  return (
    <main>
      <NexiumHeroSection />
      <NexiumAboutSection />
      <NexiumProgramsSection />
      <NexiumApproachSection />
      <NexiumCtaSection />
    </main>
  );
}