import AmbassadorHeroSection from "@/components/sections/ambassador/AmbassadorHeroSection";
import AmbassadorHowItWorksSection from "@/components/sections/ambassador/AmbassadorHowItWorksSection";
import AmbassadorBenefitsSection from "@/components/sections/ambassador/AmbassadorBenefitsSection";
import AmbassadorWhyJoinSection from "@/components/sections/ambassador/AmbassadorWhyJoinSection";
import AmbassadorBanner from "@/components/sections/ambassador/AmbassadorBanner";
import AmbassadorCtaSection from "@/components/sections/ambassador/AmbassadorCtaSection";

export default function AmbassadorPage() {
  return (
    <main>
      <AmbassadorHeroSection />
      <AmbassadorBanner />
      <AmbassadorHowItWorksSection />
      <AmbassadorBenefitsSection />
      <AmbassadorWhyJoinSection />
      <AmbassadorCtaSection />
    </main>
  );
}