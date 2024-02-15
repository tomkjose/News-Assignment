import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || false
  );
  const changeTheme = () => {
    setCurrentTheme(!currentTheme);
    localStorage.setItem("theme", currentTheme);
  };
  const theme = {
    currentTheme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
