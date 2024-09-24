import React, { useEffect, useState } from "react";
import NameTempAlert from "./NameUseAlert";
import NameTitle from "./NameTitle";

const NameMain = () => {
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const valid = name.length >= 3;
    setIsValid(valid);

    if (valid) {
      sessionStorage.setItem("name_data", name);
    }
  }, [name]);

  return (
      <div>
        <div className="flex">
          <NameTitle/>
          {!isValid && name && <NameTempAlert/>}
        </div>
        <div>
          <input 
          value={name} 
          onChange={(ev) => setName(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="ex) 홍길동"/>
        </div>
      </div>
    );
  };
  
export default NameMain;