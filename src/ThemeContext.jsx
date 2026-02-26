import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const themeColors = {
  blue: { bg: "#0d243a", text: "#e2edf8" },
  green: { bg: "#0a3503", text: "#90b28b" },
  red: { bg: "#4e0f12", text: "#fedcde" },
};

const pickRandomTheme = () => {
  const themes = ["blue", "green", "red"];
  return themes[Math.floor(Math.random() * themes.length)];
};

export const ThemeProvider = ({ children }) => {
  // pick once before first render
  const [theme, setTheme] = useState(() => pickRandomTheme());

  // apply CSS vars whenever theme changes
  useEffect(() => {
    const colors = themeColors[theme] || themeColors.blue;
    document.documentElement.style.setProperty("--bg-color", colors.bg);
    document.documentElement.style.setProperty("--text-color", colors.text);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};