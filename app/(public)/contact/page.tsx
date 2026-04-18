import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
import ContactDetailsSection from "@/components/sections/contact/ContactDetailsSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactWhySection from "@/components/sections/contact/ContactWhySection";
import ContactCtaSection from "@/components/sections/contact/ContactCtaSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactDetailsSection />
      <ContactFormSection />
      <ContactWhySection />
      <ContactCtaSection />
    </main>
  );
}