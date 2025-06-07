import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageHandler";

const THEME_KEY = "tema";

const useThemeStore = create(
  devtools((set) => ({
    theme: getStorage(THEME_KEY) || "dark",
    changeTheme: () => {

    },
  }))
);
