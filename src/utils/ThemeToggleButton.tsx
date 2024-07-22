import useThemeStore from "../store/store";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded text-xl ${
        theme === "Light" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {theme === "Light" ? <MdOutlineDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggleButton;
