import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import HerroSection from "@/components/HerroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <div className=" dark:bg-black bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.1] relative">
        <div className="max-w-7xl mx-auto px-3 md:px-8 relative z-10">
          <Navbar />
          <HerroSection />
        </div>
        <div className="h-10 md:h-20 xl:h-20 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
      </div>
      <div className="max-w-7xl mx-auto px-3 md:px-8">
        <Skill />
        <Project />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
