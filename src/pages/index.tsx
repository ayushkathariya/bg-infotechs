import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-col lg:gap-5">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <div className="h-48"></div>
    </div>
  );
}
