import React, { useEffect, useState } from "react";
import EmailTitle from "./EmailTitle";
import EmailTempAlert from "./EmailUseAlert";

const EmailMain = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const valid = email.length >= 6
      && email.length <= 320
      && /[@]/.test(email)
      && /\.(com|net|kr)/.test(email);
    setIsValid(valid);

    if (valid) {
      sessionStorage.setItem("name_data", email);
    }
  }, [email]);

  return (
      <div>
        <div className="flex">
          <EmailTitle/>
          {!isValid && email && <EmailTempAlert/>}
        </div>
        <div>
          <input 
          value={email} 
          onChange={(ev) => setEmail(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="이메일 입력"/>
        </div>
      </div>
    );
  };
  
export default EmailMain;