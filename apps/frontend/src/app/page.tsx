import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { OpeningScene } from "@/components/ui/OpeningScene";
import { SectionReveals } from "@/components/ui/SectionReveals";
import { portfolioData } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export default function Home() {
  const { profile, projects, skills } = portfolioData;
  const featuredProject = projects.find((project) => project.isFeatured) ?? projects[0];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vilberto Patricio Julca",
    url: siteUrl,
    jobTitle: "Ingeniero de software",
    sameAs: profile.socialLinks
      .map((link) => link.url)
      .filter((url) => url.startsWith("http")),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
        }}
      />
      <Navigation profile={profile} featuredProject={featuredProject} />
      <main className="portfolio-page">
        <SectionReveals />
        <OpeningScene>
          <HeroSection profile={profile} />
          <WorkSection profile={profile} projects={projects} />
        </OpeningScene>
        <AboutSection profile={profile} skills={skills} />
        <ContactSection profile={profile} />
      </main>
    </>
  );
}
