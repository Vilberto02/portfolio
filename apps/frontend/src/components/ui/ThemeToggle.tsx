"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { getServerThemeSnapshot, getThemeSnapshot, subscribeToTheme, togglePortfolioTheme } from "@/lib/theme";

type ThemeToggleProps = {
  className: string;
  size?: number;
};

export function ThemeToggle({ className, size = 18 }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Cambiar al tema claro" : "Cambiar al tema oscuro"}
      className={className}
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        togglePortfolioTheme({
          x: event.detail === 0 ? bounds.left + bounds.width / 2 : event.clientX,
          y: event.detail === 0 ? bounds.top + bounds.height / 2 : event.clientY,
        });
      }}
    >
      {theme === "dark" ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  );
}
