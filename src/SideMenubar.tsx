import { useNavigate } from "react-router-dom";

const SideMenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-5 py-1 w-60 h-svh text-sm justify-evenly bg-sidebarBgColor text-menuDeactiveColor">
      <button
        onClick={() => navigate("/Home")}
        className="hover:text-menuActiveColor"
      >
        HOME
      </button>
      <button
        onClick={() => navigate("/PassiveCheck")}
        className="hover:text-menuActiveColor"
      >
        학생 출결 관리
      </button>
      <button
        onClick={() => navigate("/AttendanceDashboard")}
        className="hover:text-menuActiveColor"
      >
        학생 전체 출석부
      </button>
      <button
        onClick={() => navigate("/Consulting")}
        className="hover:text-menuActiveColor"
      >
        상담 관리
      </button>
    </div>
  );
};

export default SideMenuBar;
