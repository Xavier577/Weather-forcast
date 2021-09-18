import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  return {
    theme,
    themeToggleFn: <T>(event: T) => {
      if (document.documentElement.hasAttribute("data-theme")) {
        setTheme("light");
        document.documentElement.removeAttribute("data-theme");
      } else {
        setTheme("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
  };
};

export default useTheme;
