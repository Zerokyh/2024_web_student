import { create } from "zustand";

type Theme = "Light" | "Dark";

type GlobalState = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  theme: Theme;
  setTheme: (theme: "Light" | "Dark") => void;
};

const useThemeStore = create<GlobalState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
  theme: "Light",
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
