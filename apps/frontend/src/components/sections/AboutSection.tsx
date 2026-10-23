import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

import type { PortfolioProfile, SkillCategory } from "@/types/portfolio";

type AboutSectionProps = {
  profile: PortfolioProfile;
  skills: SkillCategory[];
};

function formatSkillValues(values: string[]): string[] {
  const lines: string[] = [];
  let currentLine = "";

  for (const value of values) {
    const serializedValue = JSON.stringify(value);
    if (currentLine && currentLine.length + serializedValue.length + 2 > 32) {
      lines.push(`${currentLine},`);
      currentLine = serializedValue;
    } else {
      currentLine += `${currentLine ? ", " : ""}${serializedValue}`;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}

export function AboutSection({ profile, skills }: AboutSectionProps) {
  const skillEntries = skills.map((skill) => ({
    key: skill.title.toLowerCase(),
    lines: formatSkillValues(skill.summary.split("·").map((value) => value.trim()).filter(Boolean)),
  }));

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-panel px-6 py-24 md:px-18 md:pb-28">
      <div className="mx-auto max-w-324">
        <p data-reveal className="font-code text-[11px] font-medium leading-[1.45] tracking-[0.5px] text-muted">
          {profile.aboutChapterLabel}
        </p>
        <div className="mt-16 grid gap-20 lg:grid-cols-2 lg:gap-27.5">
          <div data-reveal>
            <h2
              id="about-heading"
              className="max-w-148.25 whitespace-pre-line text-[clamp(3.25rem,4.3vw,3.8125rem)] font-semibold leading-[1.12] tracking-[-0.033em] text-ink"
            >
              {profile.manifestoHeading}
            </h2>
            <p className="mt-6 font-editorial text-[clamp(3.5rem,4.75vw,4.25rem)] leading-[1.15] tracking-[-0.01em] text-accent italic">
              {profile.manifestoEmphasis}
            </p>
          </div>
          <div>
            <p data-reveal className="max-w-[42ch] text-[23px] leading-normal tracking-[-0.013em] text-ink">
              {profile.aboutLead}
            </p>
            <p data-reveal className="mt-8.5 max-w-[65ch] text-[15px] leading-[1.75] text-muted">
              {profile.aboutDescription}
            </p>
            <figure data-reveal className="mt-8.5 min-w-0 rounded-lg border border-line bg-surface/75 p-5 sm:p-6">
              <figcaption className="mb-4.5 font-code text-xs font-medium tracking-[0.2px] text-muted">
                skills.json
              </figcaption>
              <pre aria-label="Habilidades en formato JSON" className="whitespace-pre-wrap wrap-break-word font-code text-[13px] leading-[1.65] text-ink sm:text-[15px]">
                <code className="font-code">
                  <span className="text-muted-strong">{"{"}</span>
                  {"\n"}
                  {skillEntries.map((entry, index) => (
                    <span key={`${index}-${entry.key}`}>
                      <span className="text-accent">{`  ${JSON.stringify(entry.key)}: [`}</span>
                      {entry.lines.length > 0 ? "\n" : ""}
                      {entry.lines.map((line, lineIndex) => (
                        <span key={lineIndex}>{`    ${line}\n`}</span>
                      ))}
                      <span className="text-muted-strong">{`${entry.lines.length > 0 ? "  " : ""}]${index < skillEntries.length - 1 ? "," : ""}`}</span>
                      {"\n"}
                    </span>
                  ))}
                  <span className="text-muted-strong">{"}"}</span>
                </code>
              </pre>
            </figure>
            <div data-reveal className="mt-8.5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={profile.resumeDownloadUrl}
                download
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover focus-visible:outline-2 motion-reduce:transition-none"
              >
                {profile.resumeDownloadLabel}
                <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-ink focus-visible:outline-2"
              >
                {profile.resumeLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
