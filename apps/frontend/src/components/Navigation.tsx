"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { HeroField } from "@/components/ui/HeroField";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { PortfolioProfile, PortfolioProject } from "@/types/portfolio";

type NavigationProps = {
  profile: PortfolioProfile;
  featuredProject: PortfolioProject;
  variant?: "portfolio" | "recovery";
};

const chapters = [
  { index: "01", label: "Inicio", href: "#intro" },
  { index: "02", label: "Proyectos", href: "#work" },
  { index: "03", label: "Sobre mí", href: "#about" },
];

export function Navigation({ profile, featuredProject, variant = "portfolio" }: NavigationProps) {
  const [activeChapter, setActiveChapter] = useState(variant === "recovery" ? "" : "intro");
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  const [focusedChapter, setFocusedChapter] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === "recovery") return;

    const navigation = navigationRef.current;
    const sections = chapters.flatMap((chapter) => {
      const section = document.querySelector<HTMLElement>(chapter.href);
      return section ? [section] : [];
    });
    let navigationTarget: string | null = null;
    let settleTimer: number | undefined;

    const finishNavigation = () => {
      window.clearTimeout(settleTimer);
      if (!navigationTarget) return;
      navigationTarget = null;
      const visibleSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top < window.innerHeight * 0.45 && bounds.bottom > window.innerHeight * 0.35;
      });
      if (visibleSection) setActiveChapter(visibleSection.id);
    };

    const waitForScroll = () => {
      if (!navigationTarget) return;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(finishNavigation, 180);
    };

    const handleNavigation = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href^='#']") : null;
      const section = sections.find((section) => `#${section.id}` === link?.getAttribute("href"));
      if (!section) return;
      navigationTarget = section.id;
      setActiveChapter(section.id);
      waitForScroll();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        finishNavigation();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (navigationTarget) return;
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry?.target.id) setActiveChapter(visibleEntry.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    navigation?.addEventListener("click", handleNavigation);
    window.addEventListener("scroll", waitForScroll, { passive: true });
    window.addEventListener("wheel", finishNavigation, { passive: true });
    window.addEventListener("touchstart", finishNavigation, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      window.clearTimeout(settleTimer);
      navigation?.removeEventListener("click", handleNavigation);
      window.removeEventListener("scroll", waitForScroll);
      window.removeEventListener("wheel", finishNavigation);
      window.removeEventListener("touchstart", finishNavigation);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [variant]);

  useEffect(() => {
    const main = document.querySelector("main");
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const controls = menuDialogRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    if (isMenuOpen) {
      document.body.classList.add("menu-open");
      main?.setAttribute("inert", "");
      window.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.classList.remove("menu-open");
      main?.removeAttribute("inert");
    }

    return () => {
      document.body.classList.remove("menu-open");
      main?.removeAttribute("inert");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  };

  const openMenu = (trigger: HTMLButtonElement) => {
    menuButtonRef.current = trigger;
    setIsMenuOpen(true);
  };

  const chapterHref = (hash: string) => variant === "recovery" ? `/${hash}` : hash;
  const previewChapter = hoveredChapter ?? focusedChapter;
  const activeIndex = chapters.findIndex((chapter) => chapter.href.slice(1) === activeChapter);
  const previewIndex = previewChapter !== activeChapter
    ? chapters.findIndex((chapter) => chapter.href.slice(1) === previewChapter)
    : -1;

  return (
    <>
      <a
        href={chapterHref("#intro")}
        className="fixed top-7 left-6 z-40 font-primary text-[23px] font-bold tracking-[-0.04em] text-ink xl:top-11.5 xl:left-[max(48px,calc((100vw-1344px)/2))] xl:text-[25px]"
      >
        {profile.brandName}
      </a>

      {variant === "recovery" ? (
        <Link href="/" className="recovery-navigation fixed top-6 right-6 z-40 inline-flex h-[38px] items-center gap-2 rounded-full border border-nav-line bg-panel-strong px-[23px] text-xs font-medium text-ink xl:hidden">
          <ArrowLeft aria-hidden="true" size={14} className="text-accent" />
          Inicio
        </Link>
      ) : (
      <div className="fixed top-6 right-6 z-40 flex items-center gap-1 rounded-full border border-nav-line bg-panel-strong p-1.25 xl:hidden">
        <a href="#work" className="hidden min-h-11 items-center rounded-full px-2 text-xs font-medium text-ink focus-visible:outline-2 min-[360px]:inline-flex">
          Proyectos
        </a>
        <ThemeToggle
          size={16}
          className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-panel focus-visible:outline-2 cursor-pointer"
        />
        <button
          type="button"
          onClick={(event) => openMenu(event.currentTarget)}
          aria-label="Abrir índice de secciones"
          aria-expanded={isMenuOpen}
          className="grid size-11 place-items-center rounded-full text-accent transition-colors hover:bg-panel focus-visible:outline-2 cursor-pointer"
        >
          <Menu size={18} />
        </button>
      </div>
      )}

      <nav
        ref={navigationRef}
        aria-label="Navegación por secciones"
        onPointerLeave={() => setHoveredChapter(null)}
        className={`${variant === "recovery" ? "recovery-navigation " : ""}fixed top-8.25 left-1/2 z-40 hidden h-15 w-168 -translate-x-1/2 items-center gap-1 rounded-full border border-nav-line/60 bg-panel-strong p-1.5 backdrop-blur-xl xl:flex`}
      >
        <span
          aria-hidden="true"
          className="chapter-hover pointer-events-none absolute top-1.5 left-[7px] h-12 w-45.75 rounded-full bg-panel"
          style={{ transform: `translateX(${Math.max(0, previewIndex) * 187}px)`, opacity: previewIndex < 0 ? 0 : 1 }}
        />
        <span
          aria-hidden="true"
          className="chapter-highlight pointer-events-none absolute top-1.5 left-[7px] h-12 w-45.75 rounded-full bg-accent"
          style={{ transform: `translateX(${Math.max(0, activeIndex) * 187}px)`, opacity: activeIndex < 0 ? 0 : 1 }}
        />
        {chapters.map((chapter) => (
          <a
            key={chapter.href}
            href={chapterHref(chapter.href)}
            onPointerEnter={(event) => { if (event.pointerType !== "touch") setHoveredChapter(chapter.href.slice(1)); }}
            onFocus={(event) => {
              if (event.currentTarget.matches(":focus-visible")) setFocusedChapter(chapter.href.slice(1));
            }}
            onBlur={() => setFocusedChapter(null)}
            aria-current={activeChapter === chapter.href.slice(1) ? "location" : undefined}
            className={`relative z-10 flex h-12 w-45.75 shrink-0 items-center justify-center gap-2.5 rounded-full text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-2 ${
              activeChapter === chapter.href.slice(1)
                ? "text-accent-ink"
                : "text-ink"
            }`}
          >
            <span className="font-code text-xs font-medium leading-[1.45] opacity-70">{chapter.index}</span>
            {chapter.label}
          </a>
        ))}
        <ThemeToggle
          className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full text-ink transition-colors hover:text-accent focus-visible:outline-2"
        />
        <button
          type="button"
          onClick={(event) => openMenu(event.currentTarget)}
          aria-label="Abrir índice de secciones"
          aria-expanded={isMenuOpen}
          className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-nav-control text-ink transition-colors hover:bg-line focus-visible:outline-2"
        >
          <Menu size={19} />
        </button>
      </nav>

      <div className="fixed top-13.75 right-[max(48px,calc((100vw-1344px)/2))] z-40 hidden items-center gap-2.5 font-code text-[11px] font-medium leading-[1.45] tracking-[0.5px] text-ink min-[1500px]:flex">
        <span className="size-1.5 rounded-full bg-accent" />
        {profile.availabilityLabel}
      </div>

      <div
        ref={menuDialogRef}
        role="dialog"
        aria-label="Índice de secciones"
        aria-modal={isMenuOpen ? true : undefined}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed inset-0 z-50 overflow-y-auto bg-surface transition-[opacity,visibility] duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          {isMenuOpen && <HeroField subdued />}
        </div>
        <div className="relative mx-auto min-h-svh max-w-360 px-6 py-7 md:px-20 md:py-9">
          <span className="font-primary text-[23px] font-bold tracking-[-0.04em] text-ink md:text-[25px]">
            {profile.brandName}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar índice de secciones"
            className="fixed top-6 right-6 grid size-11 place-items-center rounded-full border border-line bg-panel text-ink focus-visible:outline-2 md:top-10 md:right-10 cursor-pointer"
          >
            <X size={19} />
          </button>

          <div className="grid min-h-180 items-center gap-16 pt-24 lg:grid-cols-[1fr_372px]">
            <div className="max-w-185">
              <p className="mb-3 font-code text-xs tracking-[0.15em] text-muted">ELIGE TU SIGUIENTE CAPÍTULO</p>
              {[
                ["01", "Proyectos", "#work"],
                ["02", "Sobre mí", "#about"],
                ["03", "Conversemos", "#contact"],
              ].map(([index, label, href], position) => (
                <a
                  key={href}
                  href={chapterHref(href)}
                  onClick={closeMenu}
                  className="menu-link group flex items-center gap-5 border-b border-line py-6 text-ink focus-visible:outline-2 md:py-7"
                >
                  <span className="font-code text-base text-muted">{index}</span>
                  <span className={`text-[clamp(1.75rem,5.3vw,4.75rem)] tracking-[-0.04em] ${position === 0 ? "text-accent" : ""}`}>
                    {label}
                  </span>
                  <ArrowUpRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={28} />
                </a>
              ))}
            </div>

            <a href={featuredProject.href} target="_blank" rel="noreferrer" className="group hidden lg:block">
              <span className="font-code text-xs tracking-[0.15em] text-muted">PROYECTO DESTACADO</span>
              <div className="mt-6 h-56.25 overflow-hidden bg-project-vitamia p-6 pb-0">
                <div className="relative h-65 overflow-hidden rounded-t-xl shadow-[0_24px_60px_rgba(34,21,44,0.22)]">
                  <Image
                    src={featuredProject.image}
                    alt={`Vista previa de la interfaz de ${featuredProject.title}`}
                    fill
                    sizes="322px"
                    className="object-cover object-top-left transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
              </div>
              <h2 className="mt-5 flex items-center gap-2 text-2xl text-ink justify-between">
                {featuredProject.title}
                <ArrowUpRight size={20} />
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-muted">
                Diseño con intención y desarrollo con cuidado.
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
