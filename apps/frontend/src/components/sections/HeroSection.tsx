import { ArrowDown, ArrowDownRight } from "lucide-react";
import type { PortfolioProfile } from "@/types/portfolio";

type HeroSectionProps = {
  profile: PortfolioProfile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const headlineWords = profile.heroHeadline.trim().split(/\s+/);
  const headlineLines = profile.heroHeadline.includes("\n")
    ? profile.heroHeadline.split("\n")
    : [headlineWords.slice(0, -1).join(" "), headlineWords.at(-1) ?? ""];

  return (
    <section
      id="intro"
      aria-labelledby="hero-heading"
      className="hero-scene relative min-h-211 overflow-hidden md:min-h-240"
    >
      <div className="relative z-10 mx-auto min-h-211 max-w-360 px-6 md:min-h-240 md:px-18">
        <div className="relative pt-33 md:pt-52.25">
          <p className="hero-copy-enter whitespace-pre-line font-code text-xs leading-[1.6] tracking-[0.5px] text-ink md:font-medium md:leading-[1.45] md:text-ink-soft">
            <span className="md:hidden">
              {profile.roleEyebrow.replace(" / ", "\n")}
            </span>
            <span className="hidden md:inline">
              {profile.roleEyebrow.replace(" / ", "  /  ")}
            </span>
          </p>
          <h1
            id="hero-heading"
            className="hero-copy-enter mt-6.25 max-w-262.5 whitespace-pre-line text-[clamp(3rem,16.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.039em] text-ink md:mt-6.5 md:text-[clamp(5.5rem,8.9vw,8rem)]"
          >
            {headlineLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>

        <div className="relative mt-14 max-w-78.75 pb-36.25 md:mt-16 md:max-w-96.25 md:pb-56.75">
          <p className="hero-copy-enter text-[15px] leading-[1.7] text-ink-soft md:text-[17px] md:leading-[1.65]">
            {profile.heroIntro}
          </p>
          <a
            href="#work"
            className="group mt-6 inline-flex h-12 items-center gap-6 rounded-full bg-accent px-5.25 text-[13px] font-semibold text-accent-ink transition-colors duration-300 hover:bg-accent-hover focus-visible:outline-2 md:mt-7 md:h-12.5 md:gap-7 md:px-5.75 md:text-sm"
          >
            {profile.heroCtaLabel}
            <ArrowDownRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>
        </div>

        <div className="absolute bottom-28.75 left-20 hidden gap-7.5 md:flex">
          {profile.principles.map((principle) => (
            <div key={principle.index} className="min-w-25">
              <p className="font-code text-lg font-medium leading-[1.45] text-muted-strong">
                {principle.index}
              </p>
              <p className="mt-1.75 text-sm leading-[1.4] text-ink-soft">
                {principle.label}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-3 font-code text-xs tracking-[0.5px] text-muted md:inset-x-18 md:bottom-8.25 md:font-medium md:leading-[1.45]">
          <span className="flex items-center gap-2">
            <ArrowDown size={11} /> EXPLORA EL PORTAFOLIO
          </span>
          <span className="hidden md:block">
            {profile.sceneDescription}
          </span>
          <span className="tracking-normal md:text-xs">01 — 04</span>
        </div>
      </div>
    </section>
  );
}
