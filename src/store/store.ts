import { create } from "zustand";

type SetState = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

const useThemeStore = create<SetState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useThemeStore;
