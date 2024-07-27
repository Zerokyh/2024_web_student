import { useNavigate } from "react-router-dom";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useEffect } from "react";
import useThemeStore from "./store/store";

const Home = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useThemeStore();

  useEffect(() => {
    const userId = sessionStorage.getItem("user_id");
    setIsLogin(userId !== null);
  }, [setIsLogin]);

  return (
    <>
      <div className="relative w-full h-studentMaxHight font-nexon text-4xl flex justify-center items-center">
        <div className="flex flex-col gap-6">
          <div className="z-10 animate-tracking-in-contract">
            <AssuredWorkloadIcon /> 학생 출결 관리 프로그램
          </div>
          <div
            className={
              isLogin
                ? "w-fit z-10 animate-tracking-in-contract text-base hover:text-menuActiveColor cursor-pointer flex gap-4"
                : "hidden"
            }
            onClick={() => navigate("/Qrcode")}
          >
            <QrCodeIcon /> QR 출석체크
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
