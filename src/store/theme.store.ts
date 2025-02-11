import { create } from "zustand";
import { ThemeTypes } from "../types";

type ThemeStore = {
  theme: ThemeTypes;
  toggleTheme: () => void;
};

const useThemeStore = create<ThemeStore>((set) => ({
  theme: (localStorage.getItem("theme") as ThemeTypes) || "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
