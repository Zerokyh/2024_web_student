import React, { useEffect, useState } from "react";
import AddressTempAlert from "./AddressUseAlert";
import AddressTitle from "./AddressTitle";

const AddressMain = () => {
  const [address, setAddress] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const valid = address.length >= 10
      && address.length <= 30
      && /^[가-힣]+(?:\s[가-힣]+)*\d+(-\d+)?(?:[가-힣0-9]+)?$/.test(address);
    setIsValid(valid);
  }, [address]);

  return (
      <div>
        <div className="flex">
          <AddressTitle/>
          {!isValid && address && <AddressTempAlert/>}
        </div>
        <div>
          <input 
          value={address} 
          onChange={(ev) => setAddress(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="도로명 주소로 입력"/>
        </div>
      </div>
    );
  };
  
export default AddressMain;