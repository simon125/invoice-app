import { FC, ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider, Theme } from "@emotion/react";
import { useSelector } from "react-redux";
import { selectTheme } from "./slice";
import { ThemeModeEnum } from "./types";

const DARK_MODE: Theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#141625",
  },
  backgrounds: {
    primary: "#1E2139",
    secondary: "#141625",
    checkbox: "#1E2139",
  },
};

const LIGHT_MODE: Theme = {
  colors: {
    primary: "#0C0E16",
    secondary: "#7E88C3",
  },
  backgrounds: {
    primary: "#FFFFFF",
    secondary: "#F8F8FB",
    checkbox: "#DFE3FA",
  },
};

const THEMES: Record<ThemeModeEnum, Theme> = {
  [ThemeModeEnum.DARK]: DARK_MODE,
  [ThemeModeEnum.LIGHT]: LIGHT_MODE,
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useSelector(selectTheme);

  return (
    <EmotionThemeProvider theme={THEMES[theme]}>
      {children}
    </EmotionThemeProvider>
  );
};
