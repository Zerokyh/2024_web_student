import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useThemeStore from "./store/store";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const { isLogin, setIsLogin } = useThemeStore();
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post(
        "https://studentbserver-d8byawhchugpamg3.koreacentral-01.azurewebsites.net/login",
        {
          id,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert(response.data.message);
        sessionStorage.setItem("user_id", id);
        sessionStorage.setItem("user_pw", password);
        setIsLogin(true);
        navigate(state);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Response:", error.response);
          alert(error.response.data.message || "An error occurred");
        } else if (error.request) {
          console.error("Error Request:", error.request);
          alert("No response from server");
        } else {
          console.error("Error Message:", error.message);
          alert("Error occurred: " + error.message);
        }
      });
  };

  return (
    <div className="w-full h-studentMaxHight flex flex-col justify-center items-center gap-10 font-nexon">
      <div className="max-w-sm w-full flex flex-col justify-center items-center gap-10 border border-sky-100 rounded-xl p-10">
        <div className="font-handwriting font-bold text-sky-700 text-3xl">
          Login
        </div>

        <div className="w-full flex justify-center gap-2">
          <input
            className="border w-full px-4 py-3 rounded-full"
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-center gap-2">
          <input
            className="border w-full px-4 py-3 rounded-full"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full px-10 py-3 rounded-full bg-sky-700 text-white text-2xl  font-bold "
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="w-full flex justify-between text-sm">
          <span className="cursor-pointer">아이디 찾기</span>
          <span
            className="cursor-pointer"
            onClick={() => navigate("/UserRegister")}
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
