import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { PortfolioProject } from "@/types/portfolio";

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const role = /design|diseño/i.test(project.category) ? "Diseño de producto" : "Desarrollo web";

  return (
    <a
      data-reveal
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Ver proyecto ${project.title}`}
      className="project-card group relative flex min-w-0 flex-col gap-[26px] bg-project-card p-5 outline-offset-[-4px] focus-visible:z-10 focus-visible:outline-2 lg:p-8"
    >
      <span aria-hidden="true" className="project-card-atmosphere pointer-events-none absolute inset-0 opacity-0" />
      <div className="relative flex aspect-[584/352] items-center justify-center p-2.5">
        <div className="project-preview relative aspect-[496/332] w-full max-w-[496px] overflow-hidden rounded-[4px]">
          <Image
            src={project.image}
            alt={`Vista previa de la interfaz de ${project.title}`}
            fill
            sizes="(max-width: 639px) 85vw, (max-width: 1200px) 40vw, 496px"
            className="object-cover object-left-top"
          />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-3.5">
        <div className="flex items-center gap-3.5">
          <span className="shrink-0 font-code text-xs text-muted">{project.index}</span>
          <h3 className="min-w-0 flex-1 text-[clamp(1.25rem,2vw,1.625rem)] font-semibold leading-[1.2] tracking-[-0.5px] text-ink">
            {project.title}
          </h3>
          <ArrowUpRight aria-hidden="true" size={24} className="project-arrow shrink-0 text-ink" />
        </div>
        {project.summary && (
          <p className="text-[15px] leading-[1.6] text-muted">{project.summary}</p>
        )}
        <div className="mt-auto">
          <span className="inline-block border border-project-role-border bg-project-role px-2.5 py-[7px] font-code text-xs leading-[1.4] text-project-role-ink">
            {role}
          </span>
        </div>
      </div>
    </a>
  );
}
