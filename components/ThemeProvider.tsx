"use client";
import React, { useState, useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext({
  theme: "dark-theme",
  toggleTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
