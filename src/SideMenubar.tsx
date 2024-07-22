import { useLocation, useNavigate } from "react-router-dom";
import Time from "./utils/Time";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import useThemeStore from "./store/store";

const SideMenuBar = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useThemeStore();
  const { pathname } = useLocation();
  const handleLogout = () => {
    sessionStorage.removeItem("user_id");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col px-7 py-1 w-fit h-full text-sm justify-evenly bg-sidebarBgColor text-menuDeactiveColor text-nexon">
      <button
        onClick={() => navigate("/")}
        className="hover:text-menuActiveColor flex items-center gap-3"
      >
        <div className="flex items-center text-lg">
          <FaHome />
        </div>
        HOME
      </button>

      <div className="flex flex-col gap-10">
        <div className="text-xs relative top-5 text-white">학생관리</div>
        <button
          onClick={() =>
            isLogin ? navigate("/PassiveCheck") : navigate("/Login")
          }
          className="w-36 hover:text-menuActiveColor flex items-center gap-3 text-sm"
        >
          <div className="flex items-center text-lg">
            <FaRegCalendarCheck />
          </div>
          학생 출결 관리
        </button>
        <button
          onClick={() =>
            isLogin ? navigate("/AttendanceDashboard") : navigate("/Login")
          }
          className="w-36 hover:text-menuActiveColor flex items-center gap-3 text-sm"
        >
          <div className="flex items-center text-lg">
            <BiBookContent />
          </div>
          학생 전체 출석부
        </button>
        <button
          onClick={() =>
            isLogin ? navigate("/Consulting") : navigate("/Login")
          }
          className="w-36 hover:text-menuActiveColor flex items-center gap-3 text-sm"
        >
          <div className="flex items-center text-lg">
            <BsPersonVideo3 />
          </div>
          학생 관리
        </button>
      </div>
      <div
        className={isLogin ? "hidden" : "w-full h-16 py-5 flex justify-around"}
      >
        <span className="text-xs hover:text-menuActiveColor cursor-pointer">
          회원가입
        </span>
        <span
          className="text-xs hover:text-menuActiveColor cursor-pointer"
          onClick={() => navigate("/Login", { state: pathname })}
        >
          로그인
        </span>
      </div>
      <div className={isLogin ? "text-center" : "hidden"}>
        <span
          className="text-xs hover:text-menuActiveColor cursor-pointer"
          onClick={handleLogout}
        >
          로그 아웃
        </span>
      </div>
      <div className="flex justify-center items-center gap-3 text-lg text-menuActiveColor">
        <LuAlarmClock />
        <Time />
      </div>
    </div>
  );
};

export default SideMenuBar;
