import React, { useEffect, useState } from "react";
import PasswordTitle from "./PasswordTitle";
import PasswordTempAlert from "./PasswordUseAlert";

const PasswordMain = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true);

  useEffect(() => {
    const valid = password.length >= 8 && password.length <= 20 && /[!@#$%^&*]/.test(password);
    setIsPasswordValid(valid);
  }, [password]);

  useEffect(() => {
    if (password === "" || passwordCheck === "") {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(password === passwordCheck);
    }
  }, [password, passwordCheck]);

  useEffect(() => {
    if (isPasswordMatch && password && password != null) {
      sessionStorage.setItem("pw_data", password);
    }
  }, [isPasswordMatch, password]);

  return (
      <div>
        <div className="flex">
          <PasswordTitle/>
          {!isPasswordValid && password && <PasswordTempAlert/>}
        </div>
        <div>
        <div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="비밀번호 입력 (8~20자)"
        />
      </div>
      <div>
        <input
          type="password"
          value={passwordCheck}
          onChange={(ev) => setPasswordCheck(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="비밀번호 확인"
        />
        {password && (
          <span className={`ml-2 ${isPasswordMatch ? 'text-green-500' : 'text-red-500'}`}>
            {isPasswordMatch ? '✔️' : '❌'}
          </span>
        )}
      </div>
      {!isPasswordMatch && passwordCheck && (
        <p className="text-red-500 text-sm">비밀번호가 일치하지 않습니다.</p>
      )}
    </div>
      </div>
      </div>
    );
  };
  
export default PasswordMain;