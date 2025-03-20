
import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext();

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeContextProvider = ({ children }) => {
  const getInitialTheme = () => localStorage.getItem("theme") || "dark";

  const [themeMode, setThemeMode] = useState(getInitialTheme());

  useEffect(() => {
    const handleSystemThemeChange = () => {
      if (themeMode === "system") {
        setThemeMode(getSystemTheme());
      }
    };

    if (themeMode === "system") {
      setThemeMode(getSystemTheme()); // Apply system theme correctly
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleDarkMode = () => setThemeMode("dark");
  const toggleLightMode = () => setThemeMode("light");

  const toggleSystemMode = () => {
    const systemTheme = getSystemTheme();
    setThemeMode("system");
    setThemeMode(systemTheme); // Fix flicker issue
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleDarkMode, toggleLightMode, toggleSystemMode }}>
      <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

