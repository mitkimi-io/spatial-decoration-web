"use client";

import { useEffect } from "react";

export default function ThemeProvider() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("THEME");
    const root = document.documentElement;
    const body = document.body;

    if (savedTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      body.setAttribute("apron-theme", "dark");
    } else if (savedTheme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      body.removeAttribute("apron-theme");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (systemPrefersDark) {
        root.classList.add("dark");
        body.setAttribute("apron-theme", "dark");
      } else {
        root.classList.remove("dark");
        body.removeAttribute("apron-theme");
      }

      root.classList.remove("light");
    }
  }, []);

  return null;
}
