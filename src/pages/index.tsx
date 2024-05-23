import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-col lg:gap-5">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
