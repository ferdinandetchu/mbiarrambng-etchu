import ContactSection from "./components/ContactSection/ContactSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import MentorshipSection from "./components/MentorshipSection/MentorshipSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import StoriesSection from "./components/StoriesSection/StoriesSection";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col">
        <HeroSection />
        <ExperienceSection />
        <ProjectSection />
        <MentorshipSection />
        <StoriesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
