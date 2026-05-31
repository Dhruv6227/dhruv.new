import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";

function App() {
  return (
    <div className="w-full min-h-screen bg-dark text-white overflow-x-clip selection:bg-white selection:text-black">
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection />

      {/* 4. SkillsSection */}
      <SkillsSection />

      {/* 5. ServicesSection */}
      <ServicesSection />

      {/* 6. ProjectsSection */}
      <ProjectsSection />

      {/* 7. ContactSection */}
      <ContactSection />
    </div>
  );
}

export default App;
