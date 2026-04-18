import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesOverviewSection from "@/components/sections/services/ServicesOverviewSection";
import ServicesCategoriesSection from "@/components/sections/services/ServicesCategoriesSection";
import ServicesProcessSection from "@/components/sections/services/ServicesProcessSection";
import ServicesCtaSection from "@/components/sections/services/ServicesCtaSection";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <ServicesCategoriesSection />
      <ServicesProcessSection />
      <ServicesCtaSection />
    </main>
  );
}