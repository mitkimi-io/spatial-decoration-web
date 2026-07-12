"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./ThemeSwitcher.scss";

type ThemeMode = "light" | "dark" | "system";

const themeLabels: Record<ThemeMode, string> = {
  light: "浅色模式",
  dark: "深色模式",
  system: "跟随系统",
};

const themeIcons: Record<ThemeMode, string> = {
  light: "/icons/sun.svg",
  dark: "/icons/moon.svg",
  system: "/icons/with-system.svg",
};

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("THEME") as ThemeMode | null;

    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const applyTheme = (mode: ThemeMode) => {
      const root = document.documentElement;
      const body = document.body;

      root.classList.remove("dark", "light");

      if (mode === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;

        if (systemPrefersDark) {
          root.classList.add("dark");
          body.setAttribute("apron-theme", "dark");
        } else {
          body.removeAttribute("apron-theme");
        }
      } else if (mode === "dark") {
        root.classList.add("dark");
        body.setAttribute("apron-theme", "dark");
      } else {
        root.classList.add("light");
        body.removeAttribute("apron-theme");
      }
    };

    applyTheme(theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, mounted]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    localStorage.setItem("THEME", newTheme);
    setOpen(false);
  };

  const getCurrentIcon = () => {
    if (theme === "system") {
      const systemPrefersDark =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      return systemPrefersDark ? themeIcons.dark : themeIcons.light;
    }

    return theme === "dark" ? themeIcons.dark : themeIcons.light;
  };

  if (!mounted) {
    return (
      <div className="theme-switcher">
        <button className="theme-button" type="button">
          <Image src={themeIcons.light} alt="Theme" width={20} height={20} />
        </button>
      </div>
    );
  }

  return (
    <div className="theme-switcher" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="theme-button"
        aria-label="切换主题"
      >
        <Image src={getCurrentIcon()} alt="Theme" width={20} height={20} />
      </button>
      {open && (
        <div className="theme-dropdown">
          {(["light", "dark", "system"] as ThemeMode[]).map((mode) => {
            const isSelected = mode === theme;

            return (
              <div
                key={mode}
                onClick={() => handleThemeChange(mode)}
                className={`theme-option ${isSelected ? "selected" : ""}`}
              >
                <Image
                  src={themeIcons[mode]}
                  alt={themeLabels[mode]}
                  width={20}
                  height={20}
                />
                <span>{themeLabels[mode]}</span>
                {isSelected && (
                  <svg
                    className="check-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
