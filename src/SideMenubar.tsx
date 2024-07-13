import { useNavigate } from "react-router-dom";

const SideMenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-5 py-1 w-60 h-svh text-sm justify-evenly bg-sidebarColor text-white">
      <button onClick={() => navigate("/PassiveCheck")}>학생 출결 관리</button>
      <button onClick={() => navigate("/AttendanceDashboard")}>
        학생 전체 출석부
      </button>
      <button onClick={() => navigate("/Consulting")}>상담 관리</button>
    </div>
  );
};

export default SideMenuBar;
