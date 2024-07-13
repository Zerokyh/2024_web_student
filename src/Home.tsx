import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative max-w-[1674px] w-svw h-full font-nexon text-4xl flex justify-center items-center text-white">
        <img
          src="justdoit.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
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
