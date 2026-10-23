import type { Metadata } from "next";

import { Navigation } from "@/components/Navigation";
import { NotFoundSection } from "@/components/sections/NotFoundSection";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "404 - No encontrado | Vilberto",
  description: "Esta página salió del guion. Vuelve al inicio o explora los proyectos de Vilberto.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  const { profile, projects } = portfolioData;
  const featuredProject = projects.find((project) => project.isFeatured) ?? projects[0];

  return (
    <>
      <Navigation profile={profile} featuredProject={featuredProject} variant="recovery" />
      <NotFoundSection copyright={profile.copyright} />
    </>
  );
}
