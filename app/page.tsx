import { AboutSection } from "@/components/AboutSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { DigitalTwinSection } from "@/components/DigitalTwinSection";
import { Hero } from "@/components/Hero";
import { JourneySection } from "@/components/JourneySection";
import { PageShell } from "@/components/PageShell";
import { PortfolioSection } from "@/components/PortfolioSection";

export default function Home() {
  return (
    <PageShell showStickyBar>
      <main id="main">
        <Hero />
        <PortfolioSection />
        <AboutSection />
        <JourneySection />
        <CertificationsSection />
        <DigitalTwinSection />
        <ContactSection />
      </main>
    </PageShell>
  );
}
