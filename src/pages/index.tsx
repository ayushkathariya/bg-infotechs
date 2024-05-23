import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceSection from "@/components/ServiceSection";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-col lg:gap-5">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TrustSection />
      <PortfolioSection />
      <div className="h-48"></div>
    </div>
  );
}
