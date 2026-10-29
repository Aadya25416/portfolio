import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 4.1 Hero Section with Character Canvas */}
      <HeroSection />

      {/* 4.2 About Section */}
      <AboutSection />

      {/* 4.3 Featured Projects */}
      <ProjectsSection />

      {/* 4.4 Technical Skills */}
      <SkillsSection />

      {/* 4.5 Achievements */}
      <AchievementsSection />

      {/* 4.6 Open-Source Contributions */}
      <OpenSourceSection />

      {/* 4.7 Contact Section */}
      <ContactSection />
    </div>
  );
}
