import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageHandler";

const THEME_KEY = "tema";

const useThemeStore = create(
  devtools((set) => ({
    theme: getStorage(THEME_KEY) || "dark",
    changeTheme: () => {
      set((state) => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        saveStorage(THEME_KEY, newTheme);

        const html = document.querySelector('html');
        html.setAttribute("data-theme", newTheme);

        return { theme: newTheme }
      }, false, "theme/changeTheme")
    },
  }))
);

export default useThemeStore;
