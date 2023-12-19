import { useEffect, useState } from "react";

type MediaQueryMatch = boolean;

interface DarkModeState {
  prefersDarkMode: MediaQueryMatch;
  setPrefersDarkMode: (isDarkMode: MediaQueryMatch) => void;
}

export function useDarkMode(): DarkModeState {
  const [prefersDarkMode, setPrefersDarkMode] = useState<MediaQueryMatch>(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const updateDarkMode = (event: MediaQueryListEvent) => {
      setPrefersDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", updateDarkMode);

    return () => {
      darkModeMediaQuery.removeEventListener("change", updateDarkMode);
    };
  }, []);

  return { prefersDarkMode, setPrefersDarkMode };
}
