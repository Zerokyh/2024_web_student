import React, { useEffect, useState } from "react";
import PasswordTitle from "./PasswordTitle";
import PasswordTempAlert from "./PasswordUseAlert";

const PasswordMain = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true); // 비밀번호 유효성 검사 상태
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true);  // 비밀번호 일치 여부 상태

  // 비밀번호 유효성 검사
  useEffect(() => {
    const valid = password.length >= 8 && password.length <= 20 && /[!@#$%^&*]/.test(password);
    setIsPasswordValid(valid);
  }, [password]);

  // 비밀번호 확인 검사
  useEffect(() => {
    if (password === "" || passwordCheck === "") {
      setIsPasswordMatch(true); // 비밀번호와 확인 비밀번호가 비어 있을 때는 유효성 검사를 통과하도록 설정
    } else {
      setIsPasswordMatch(password === passwordCheck); // 두 비밀번호가 같으면 true, 다르면 false
    }
  }, [password, passwordCheck]);
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