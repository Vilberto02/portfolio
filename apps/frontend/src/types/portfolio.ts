export type PortfolioPrinciple = {
  index: string;
  label: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type PortfolioProfile = {
  brandName: string;
  availabilityLabel: string;
  roleEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  heroCtaLabel: string;
  sceneDescription: string;
  principles: PortfolioPrinciple[];
  workChapterLabel: string;
  workHeadline: string;
  workIntro: string;
  aboutChapterLabel: string;
  manifestoHeading: string;
  manifestoEmphasis: string;
  aboutLead: string;
  aboutDescription: string;
  resumeLabel: string;
  resumeUrl?: string;
  resumeDownloadLabel: string;
  resumeDownloadUrl: string;
  contactChapterLabel: string;
  contactEyebrow: string;
  contactHeadline: string;
  email: string;
  copyright: string;
  socialLinks: SocialLink[];
};

export type PortfolioProject = {
  id: string;
  index: string;
  title: string;
  category: string;
  summary?: string;
  previewAddress?: string;
  href: string;
  image: string;
  isFeatured: boolean;
  stage: "vitamia" | "bioloop" | "dumpster" | "ezcommerce" | "sicpf" | "ondesanmarcos" | "lomosoma";
};

export type SkillCategory = {
  index: string;
  title: string;
  summary: string;
};

export type PortfolioData = {
  profile: PortfolioProfile;
  projects: PortfolioProject[];
  skills: SkillCategory[];
};
