import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewSection from "@/components/ReviewSection";
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
      <ReviewSection />
      <FAQSection />
    </div>
  );
}
