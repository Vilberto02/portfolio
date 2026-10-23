import { flushSync } from "react-dom";

import type { PortfolioTheme, ThemeOrigin } from "@/types/theme";

let activeTransition: ViewTransition | null = null;
let activeAnimation: Animation | null = null;
let requestedTheme: PortfolioTheme | null = null;

export const getThemeSnapshot = (): PortfolioTheme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export const getServerThemeSnapshot = (): PortfolioTheme => "dark";

export function subscribeToTheme(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== "portfolio-theme") return;
    document.documentElement.dataset.theme = event.newValue === "light" ? "light" : "dark";
    onChange();
  };
  window.addEventListener("portfolio-theme-change", onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("portfolio-theme-change", onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function togglePortfolioTheme(origin: ThemeOrigin) {
  const nextTheme = (requestedTheme ?? getThemeSnapshot()) === "dark" ? "light" : "dark";
  requestedTheme = nextTheme;
  activeTransition?.skipTransition();
  activeAnimation?.cancel();

  const root = document.documentElement;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const applyTheme = () => {
    if (requestedTheme !== nextTheme) return;
    flushSync(() => {
      root.dataset.theme = nextTheme;
      try {
        window.localStorage.setItem("portfolio-theme", nextTheme);
      } catch {}
      window.dispatchEvent(new Event("portfolio-theme-change"));
    });
  };

  if (!document.startViewTransition || preference.matches) {
    activeTransition = null;
    applyTheme();
    requestedTheme = null;
    delete root.dataset.themeTransition;
    return;
  }

  root.dataset.themeTransition = "iris";
  const transition = document.startViewTransition(applyTheme);
  activeTransition = transition;
  const stopForPreference = () => {
    if (preference.matches && activeTransition === transition) transition.skipTransition();
  };
  preference.addEventListener("change", stopForPreference);

  void transition.ready.then(() => {
    if (activeTransition !== transition) return;
    const radius = Math.hypot(Math.max(origin.x, innerWidth - origin.x), Math.max(origin.y, innerHeight - origin.y));
    activeAnimation = root.animate({
      clipPath: [`circle(0px at ${origin.x}px ${origin.y}px)`, `circle(${radius}px at ${origin.x}px ${origin.y}px)`],
    }, {
      duration: 560,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      pseudoElement: "::view-transition-new(root)",
      fill: "both",
    });
  }).catch(() => {});

  void transition.finished.catch(() => {}).finally(() => {
    preference.removeEventListener("change", stopForPreference);
    if (activeTransition !== transition) return;
    activeTransition = null;
    activeAnimation = null;
    requestedTheme = null;
    delete root.dataset.themeTransition;
  });
}
