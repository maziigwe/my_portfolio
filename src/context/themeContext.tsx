import { useState, createContext, ReactNode } from "react";
import { Theme, ThemeContextType } from "../interfaces/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);
type Props = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      <>{children}</>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
