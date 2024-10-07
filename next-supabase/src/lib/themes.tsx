"use client";

import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";

interface ThemesProviderProps {
  children: ReactNode;
}

const themes = {
  light: {
    main: "hotpink",
    button: {
        filled: {
          bg: "orange",
          color: "black",
          border: "1px solid black",
        },
        outlined: {
          bg: "orange",
          color: "black",
          border: "1px solid black",
        },
      },
  },
  dark: {
    main: "orange",
    button: {
        filled: {
          bg: "orange",
          color: "black",
          border: "1px solid black",
        },
        outlined: {
          bg: "orange",
          color: "black",
          border: "1px solid black",
        },
      },
  },
  negative: {
    main: "green",
    button: {
      filled: {
        bg: "orange",
        color: "black",
        border: "1px solid black",
      },
      outlined: {
        bg: "orange",
        color: "black",
        border: "1px solid black",
      },
    },
  },
};

export type ThemeProps = {
  theme: (typeof themes)["light"];
};

export const ThemesProvider = ({ children }: ThemesProviderProps) => {
  const [currentTheme] = useState<
    "light" | "dark" | "negative"
  >("negative");
  const theme = themes[currentTheme];

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
