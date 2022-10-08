import { createContext, useState } from "react";

export const themeContext = createContext(null);

// @ts-ignore
export const themeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");

  const value = {
    themeMode,
    setThemeMode,
  };

  return (
    // @ts-ignore
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};
