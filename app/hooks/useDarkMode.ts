import { useEffect, useState } from "react";

const DARK_MODE_STORAGE_KEY = "dark-mode";

const getInitialDarkMode = (): boolean => {
  // Check saved user preference
  const savedPreference = localStorage.getItem(
    DARK_MODE_STORAGE_KEY
  );

  if (savedPreference !== null) {
    return savedPreference === "dark";
  }

  // If no saved preference, check system preference
  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
};

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(
    getInitialDarkMode
  );

  useEffect(() => {
    const html = document.documentElement;

    // Add/remove dark class from <html>
    html.classList.toggle("dark", isDark);

    // Save user preference
    localStorage.setItem(
      DARK_MODE_STORAGE_KEY,
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((current) => !current);
  };

  return {
    isDark,
    toggleDark,
  };
};