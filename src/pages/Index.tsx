import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import VisionSection from "@/components/VisionSection";
import HobbiesSection from "@/components/HobbiesSection";
import FooterSection from "@/components/FooterSection";
import FloatingStickers from "@/components/FloatingStickers";
import FlyingCartoons from "@/components/FlyingCartoons";
import VineBorders from "@/components/VineBorders";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream bg-doodle-pattern overflow-x-hidden relative">
      <FlyingCartoons />
      <VineBorders />
      <FloatingStickers />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <VisionSection />
        <HobbiesSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
