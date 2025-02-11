// import { useEffect, useState } from "react";
// import { ThemeTypes } from "../types";
import { IconProps, MoonIcon, SunIcon } from "../icons";
import useThemeStore from "../store/theme.store";

function DarkMode({ className }: IconProps) {
  // const storedTheme = (localStorage.getItem("theme") as ThemeTypes) || "dark";

  // const [theme, setTheme] = useState<ThemeTypes>(storedTheme);

  // useEffect(() => {
  //   // Update the `theme` attribute on the body
  //   document.body.setAttribute("theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  // };
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div onClick={toggleTheme} className={`cursor-pointer ${className}`}>
      {theme === "dark" ? (
        <SunIcon className="[&>path]:stroke-tertiary-inverted w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <MoonIcon className="[&>path]:stroke-tertiary-inverted w-5 h-5 md:w-6 md:h-6" />
      )}
    </div>
  );
}

export default DarkMode;
