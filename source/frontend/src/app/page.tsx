
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/About";
import { HomeSection } from "@/components/sections/Home";
import { ProjectSection } from "@/components/sections/Project";
import { SkillSection } from "@/components/sections/Skill";
import { CTASection } from "@/components/sections/CTA";




export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <Navbar></Navbar>
        <main className="overflow-x-hidden">
          <HomeSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <CTASection />
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
