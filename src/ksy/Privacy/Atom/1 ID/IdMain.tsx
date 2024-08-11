import React, { useEffect, useState } from "react";
import IdOverlapButton from "./IdoverlapButton";
import IdTitle from "./IdTitle";

const IdMain = () => {
  const [userid, setUserid] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isOverlapID, setOverlapID] = useState<boolean | null>(null);

  useEffect(() => {
    const valid = userid.length >= 6 && userid.length <= 20;
    setIsValid(valid);
  }, [userid]);
  
  const overlapCheck = () => {
    const idData = JSON.parse(sessionStorage.getItem("id_data") || "[]");

    if (idData.includes(userid)) {
      setOverlapID(true);
    }
    else {
      idData.push(userid);
      sessionStorage.setItem("id_data", JSON.stringify(idData));
      setOverlapID(false);
    }
  };

    return (
      <div>
        <div className="flex">
          <IdTitle/>
          {userid && (
            <p className={`text-xs ${ !isValid || isOverlapID ? 'text-red-500' : 'text-green-500'}`} >
            {!isValid
              ? '사용할 수 없는 아이디입니다': isOverlapID
              ? '이미 존재하는 아이디입니다': '사용 가능한 아이디입니다'}
            </p>
          )}
        </div>
        <div>
          <input 
            value={userid} 
            onChange={(ev) => setUserid(ev.target.value)}
            className="w-80 border rounded mr-1 p-2 text-xs mt-1"
            placeholder="아이디 입력 (6~20자)"/>
          <IdOverlapButton onCheckedOverlap={overlapCheck}/>
        </div>
      </div>
    );
  };
  
export default IdMain;