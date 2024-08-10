import React, { useEffect, useState } from "react";
import IdTempAlert from "./IdUseAlert";
import IdTitle from "./IdTitle";
import IdOverlapButton from "./IdoverlapButton";

const IdMain = () => {
  const [userid, setUserid] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  // const idData = sessionStorage.getItem("id_data");

  useEffect(() => {
    const valid = userid.length >= 6 && userid.length <= 20;
    setIsValid(valid);
  }, [userid]);

    return (
      <div>
        <div>
          <IdTitle/>
          {!isValid && userid && <IdTempAlert/>}
        </div>
        <div>
          <input 
            value={userid} 
            onChange={(ev) => setUserid(ev.target.value)}
            className="w-80 border rounded mr-1 p-2 text-xs mt-1"
            placeholder="아이디 입력"/>
          <IdOverlapButton/>
        </div>
      </div>
    );
  };
  
export default IdMain;