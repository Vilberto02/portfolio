
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/About";
import { HomeSection } from "@/components/sections/Home";
import { ProjectSection } from "@/components/sections/Project";
import { SkillSection } from "@/components/sections/Skill";




export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <Navbar></Navbar>
        <main className="">
          <HomeSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
