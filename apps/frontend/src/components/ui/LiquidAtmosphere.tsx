"use client";

import { useEffect, useRef } from "react";

export function LiquidAtmosphere() {
  const atmosphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atmosphere = atmosphereRef.current;
    if (!atmosphere) return;

    let visible = true;
    const updatePlayback = () => {
      atmosphere.dataset.paused = String(document.hidden || !visible);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    observer.observe(atmosphere);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, []);

  return (
    <div ref={atmosphereRef} aria-hidden="true" className="liquid-atmosphere pointer-events-none absolute inset-0 overflow-hidden">
      <span className="liquid-blob liquid-blob-violet" />
      <span className="liquid-blob liquid-blob-indigo" />
      <span className="liquid-blob liquid-blob-plum" />
    </div>
  );
}
