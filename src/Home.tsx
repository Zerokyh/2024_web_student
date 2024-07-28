import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative max-w-screen w-svw h-full font-nexon text-4xl flex justify-center items-center">
        <div className="flex flex-col gap-6">
          <div className="z-10 animate-tracking-in-contract">
            학생 출결 관리 프로그램
          </div>
          <div
            className="w-fit z-10 animate-tracking-in-contract text-base hover:text-menuActiveColor cursor-pointer"
            onClick={() => navigate("/Qrcode")}
          >
            QR 출석체크
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
