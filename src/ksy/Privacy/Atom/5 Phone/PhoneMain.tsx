import React, { useEffect, useState } from "react";
import PhoneTempAlert from "./PhoneUseAlert";
import PhoneTitle from "./PhoneTitle";

const PhoneMain = () => {
  const [phone, setPhone] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const valid = phone.length >= 10 && phone.length <= 15 &&
    !/[-]/.test(phone) && /^[0-9]*$/.test(phone);
    setIsValid(valid);
  }, [phone]);

  return (
      <div>
        <div className="flex">
          <PhoneTitle/>
          {!isValid && phone && <PhoneTempAlert/>}
        </div>
        <div>
          <input 
          value={phone} 
          onChange={(ev) => setPhone(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="ex) 01012345678"/>
        </div>
      </div>
    );
  };
  
export default PhoneMain;