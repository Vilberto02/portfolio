import { ProjectCard } from "@/components/ui/ProjectCard";
import type { PortfolioProfile, PortfolioProject } from "@/types/portfolio";

type WorkSectionProps = {
  profile: PortfolioProfile;
  projects: PortfolioProject[];
};

export function WorkSection({ profile, projects }: WorkSectionProps) {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative px-6 py-24 md:px-18 md:pt-28 md:pb-[126px]">
      <div className="mx-auto max-w-324">
        <div data-reveal className="mb-12 flex flex-col gap-8 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-code text-[11px] font-medium leading-[1.45] tracking-[0.5px] text-muted">{profile.workChapterLabel}</p>
            <h2 id="work-heading" className="mt-5.5 text-[clamp(3rem,5vw,4rem)] font-semibold leading-[1.12] tracking-[-0.034em] text-ink">
              {profile.workHeadline}
            </h2>
          </div>
          <p className="max-w-[31ch] whitespace-pre-line text-[15px] leading-[1.65] text-muted">
            {profile.workIntro}
          </p>
        </div>

        <div className="project-gallery grid grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
