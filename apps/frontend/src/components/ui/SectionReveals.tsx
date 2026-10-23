"use client";

import { useEffect } from "react";

export function SectionReveals() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".portfolio-page [data-reveal]"));
    const targets = new Set(elements);
    const seen = new Set<HTMLElement>();
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;

    const reveal = (element: HTMLElement, immediate = false) => {
      seen.add(element);
      element.dataset.revealState = immediate ? "complete" : "visible";
      observer?.unobserve(element);
    };

    const prepare = () => {
      observer?.disconnect();
      if (preference.matches) {
        elements.forEach((element) => element.removeAttribute("data-reveal-state"));
        return;
      }

      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      }, { rootMargin: "0px 0px -40px 0px", threshold: 0 });

      const measured = elements.map((element) => ({ element, bounds: element.getBoundingClientRect() }));
      for (const { element, bounds } of measured) {
        if (seen.has(element) || (bounds.height > 0 && bounds.top < window.innerHeight) || element.contains(document.activeElement)) {
          reveal(element, true);
        } else {
          element.dataset.revealState = "pending";
          observer.observe(element);
        }
      }
    };

    const revealFocused = (event: FocusEvent) => {
      const element = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-reveal]") : null;
      if (element && targets.has(element)) reveal(element, true);
    };

    const complete = (event: TransitionEvent) => {
      if (event.propertyName !== "clip-path") return;
      const element = event.target;
      if (element instanceof HTMLElement && targets.has(element) && element.dataset.revealState === "visible") {
        element.dataset.revealState = "complete";
      }
    };

    prepare();
    preference.addEventListener("change", prepare);
    document.addEventListener("focusin", revealFocused);
    document.addEventListener("transitionend", complete);
    document.addEventListener("transitioncancel", complete);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", prepare);
      document.removeEventListener("focusin", revealFocused);
      document.removeEventListener("transitionend", complete);
      document.removeEventListener("transitioncancel", complete);
      elements.forEach((element) => element.removeAttribute("data-reveal-state"));
    };
  }, []);

  return null;
}
