import { ArrowUp, ArrowUpRight } from "lucide-react";

import type { PortfolioProfile } from "@/types/portfolio";

type ContactSectionProps = {
  profile: PortfolioProfile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-accent px-6 pt-20 pb-7 text-accent-ink md:min-h-133.5 md:px-18">
      <div className="mx-auto max-w-324">
        <div data-reveal className="flex flex-col gap-3 font-code text-xs font-medium leading-[1.45] tracking-[0.5px] text-accent-ink-soft md:flex-row md:justify-between">
          <p>{profile.contactChapterLabel}</p>
          <p>{profile.contactEyebrow}</p>
        </div>
        <div data-reveal className="mt-12 flex items-center justify-between gap-8">
          <h2
            id="contact-heading"
            className="min-w-0 max-w-275 whitespace-pre-line text-[clamp(2.5rem,10.5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.034em] md:text-[clamp(3.6rem,6.4vw,5.5rem)]"
          >
            {profile.contactHeadline}
          </h2>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Iniciar una conversación por correo"
            className="group hidden size-26.5 shrink-0 place-items-center rounded-full border border-accent-line transition-colors hover:bg-accent-ink hover:text-accent md:grid"
          >
            <ArrowUpRight size={46} className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
          </a>
        </div>
        <a
          data-reveal
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent-line px-5 py-3 text-sm font-semibold md:hidden"
        >
          Iniciar una conversación
          <ArrowUpRight size={18} />
        </a>
        <footer data-reveal className="mt-12 flex flex-col gap-6 border-t border-accent-border pt-7 md:mt-12.5 md:flex-row md:items-center md:justify-between">
          <p className="font-code text-[11px] font-medium leading-[1.45] tracking-[0.5px] text-accent-ink-soft">
            {profile.copyright}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                className="social-link text-sm font-medium focus-visible:outline-2"
              >
                <span className="inline-flex items-center gap-1">
                  {link.label}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
          <a href="#intro" className="inline-flex items-center gap-2 font-code text-[11px] font-medium leading-[1.45] tracking-[0.5px] text-accent-ink-soft hover:text-accent-ink focus-visible:outline-2">
            VOLVER AL INICIO
            <ArrowUp size={12} />
          </a>
        </footer>
      </div>
    </section>
  );
}
