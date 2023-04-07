import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
