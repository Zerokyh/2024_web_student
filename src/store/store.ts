import { create } from "zustand";

type LoginState = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

const useThemeStore = create<LoginState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useThemeStore;
