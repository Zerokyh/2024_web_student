import { Outlet } from "react-router-dom";
import SideMenuBar from "./SideMenubar";
import useThemeStore from "./store/store";

const StudentManagementLayout = () => {
  const { theme } = useThemeStore();
  return (
    <>
      <div
        className={`w-screen h-svh flex ${
          theme === "Light" ? "bg-white text-black" : "bg-darkmode text-white"
        }`}
      >
        <div className="w-1/5">
          <SideMenuBar />
        </div>

        <main className="w-4/5 h-4/5">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default StudentManagementLayout;
