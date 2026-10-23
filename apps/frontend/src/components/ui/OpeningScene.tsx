"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { HeroField } from "@/components/ui/HeroField";

type OpeningSceneProps = {
  children: ReactNode;
};

export function OpeningScene({ children }: OpeningSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const intro = scene?.querySelector<HTMLElement>("#intro");
    const work = scene?.querySelector<HTMLElement>("#work");
    const gallery = scene?.querySelector<HTMLElement>(".project-gallery");
    if (!scene || !intro || !work || !gallery) return;

    let disposed = false;
    const measure = () => {
      if (disposed) return;
      scene.style.setProperty("--opening-height", `${gallery.getBoundingClientRect().top - scene.getBoundingClientRect().top}px`);
      scene.style.setProperty("--intro-height", `${intro.offsetHeight}px`);
    };
    const resize = new ResizeObserver(measure);
    resize.observe(intro);
    resize.observe(work);
    measure();
    void document.fonts.ready.then(measure);

    return () => {
      disposed = true;
      resize.disconnect();
    };
  }, []);

  return (
    <div ref={sceneRef} className="opening-scene relative isolate">
      <div aria-hidden="true" className="opening-background-window pointer-events-none absolute inset-x-0 top-0 overflow-clip">
        <div className="opening-background absolute inset-0 isolate">
          <div className="opening-atmosphere absolute inset-0" />
          <div className="hero-field-layer absolute inset-x-0 top-0">
            <HeroField />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
