import { useNavigate } from "react-router-dom";

const SideMenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-5 py-1 w-40 h-svh text-sm justify-evenly bg-sidebarColor text-white">
      <button onClick={() => navigate("/PassiveCheck")}>의석님</button>
      <button onClick={() => navigate("/AttendanceDashboard")}>도은님</button>
      <button onClick={() => navigate("/Consulting")}>윤호님</button>
    </div>
  );
};

export default SideMenuBar;
