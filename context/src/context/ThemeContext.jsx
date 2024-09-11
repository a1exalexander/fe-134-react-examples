import PropTypes from "prop-types";
import { useContext, createContext } from "react";
import { useState } from "react";
import { ThemeTypes } from "../constants/ThemeTypes";
import { useEffect } from "react";

const ThemeContext = createContext(ThemeTypes.light);

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeTypes.light);

  const toggleTheme = () => {
    setTheme(theme === ThemeTypes.light ? ThemeTypes.dark : ThemeTypes.light);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};
