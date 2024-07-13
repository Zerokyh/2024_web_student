import { Outlet } from "react-router-dom";
import Login from "./Login";
import SideMenuBar from "./SideMenubar";

const StudentManagementLayout = () => {
  return (
    <>
      <div className="w-svw h-svh flex">
        <SideMenuBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default StudentManagementLayout;
