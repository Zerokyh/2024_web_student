import { Outlet } from "react-router-dom";
import SideMenuBar from "./SideMenubar";

const StudentManagementLayout = () => {
  return (
    <>
      <div className="w-screen h-svh flex">
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
