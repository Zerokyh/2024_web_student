import React, { useEffect, useState } from "react";
import AgeTitle from "./AgeTitle";
import AgeTempAlert from "./AgeUseAlert";

const AgeMain = () => {
  const [age, setAge] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const valid = /^[0-9]*$/.test(age) && age.length >= 1;
    setIsValid(valid);

    if (valid) {
      sessionStorage.setItem("age_data", age);
    }
  }, [age]);

  return (
      <div>
        <div className="flex">
          <AgeTitle/>
          {!isValid && age && <AgeTempAlert/>}
        </div>
        <div>
          <input 
          value={age} 
          onChange={(ev) => setAge(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="한국 나이로 입력"/>
        </div>
      </div>
    );
  };
  
export default AgeMain;