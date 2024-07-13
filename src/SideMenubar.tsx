import { useNavigate } from "react-router-dom";

const SideMenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-5 py-1 w-40 h-svh text-sm justify-evenly">
      <div onClick={() => navigate("/PassiveCheck")}>의석님</div>
      <div onClick={() => navigate("/AttendanceDashboard")}>도은님</div>
      <div onClick={() => navigate("/Consulting")}>윤호님</div>
    </div>
  );
};

export default SideMenuBar;
