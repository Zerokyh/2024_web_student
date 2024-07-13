import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-2xl w-svw h-full flex flex-col justify-center items-center gap-10">
      <div className="max-w-sm w-full flex flex-col justify-center items-center gap-10 border border-sky-100 rounded-xl p-10">
        <div className="font-handwriting font-bold text-sky-700 text-3xl">
          Login
        </div>

        <div className="w-full flex justify-center gap-2">
          <input
            className="border w-full px-4 py-3 rounded-full"
            type="text"
            placeholder="ID"
          />
        </div>

        <div className="w-full flex justify-center gap-2">
          <input
            className="border w-full px-4 py-3 rounded-full"
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <button
          onClick={() => alert("아이디 혹은 패스워드가 잘못 되었습니다.")}
          className="w-full px-10 py-3 rounded-full bg-sky-700 text-white text-2xl font-handwriting font-bold "
        >
          Login
        </button>

        <div className="w-full flex justify-between font-handwriting text-lg">
          <span className="cursor-pointer">아이디 찾기</span>
          <span
            className="font-handwriting text-lg cursor-pointer"
            onClick={() => navigate("/Register")}
          >
            회원가입
          </span>
          <span className="cursor-pointer">비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
