import { useNavigate } from "react-router-dom";
import Time from "./utils/Time";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { BsPersonVideo3 } from "react-icons/bs";

const SideMenuBar = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate("/PassiveCheck")}
          className="w-36 hover:text-menuActiveColor flex items-center gap-3 text-sm"
        >
          <div className="flex items-center text-lg">
            <FaRegCalendarCheck />
          </div>
          학생 출결 관리
        </button>
        <button
          onClick={() => navigate("/AttendanceDashboard")}
          className="w-36 hover:text-menuActiveColor flex items-center gap-3 text-sm"
        >
          <div className="flex items-center text-lg">
            <BiBookContent />
          </div>
          학생 전체 출석부
        </button>
        <button
          onClick={() => navigate("/Consulting")}
          className="w-36 hover:text-menuActiveColor flex items-center gap-3 text-sm"
        >
          <div className="flex items-center text-lg">
            <BsPersonVideo3 />
          </div>
          상담 관리
        </button>
      </div>
      <div className="w-full h-16 py-5 flex justify-around">
        <span className="text-xs hover:text-menuActiveColor cursor-pointer">
          회원가입
        </span>
        <span
          className="text-xs hover:text-menuActiveColor cursor-pointer"
          onClick={() => navigate("/Login")}
        >
          로그인
        </span>
      </div>
      <Time />
    </div>
  );
};

export default SideMenuBar;
