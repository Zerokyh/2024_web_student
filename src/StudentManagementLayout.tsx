import { Outlet } from "react-router-dom";
import SideMenuBar from "./SideMenubar";

const StudentManagementLayout = () => {
  return (
    <>
      <div className="w-screen h-svh flex">
        <SideMenuBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default StudentManagementLayout;
