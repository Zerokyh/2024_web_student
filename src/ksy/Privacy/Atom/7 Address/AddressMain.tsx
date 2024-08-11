import React, { useEffect, useState } from "react";
import AddressTitle from "./AddressTitle";

const AddressMain = () => {
  const [address, setAddress] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const addressRegex = /^[가-힣a-zA-Z0-9\s-]+[0-9]$/;
    const valid = address.length >= 10
      && address.length <= 30
      && addressRegex.test(address);
    setIsValid(valid);

    if (valid) {
      sessionStorage.setItem("address_data", address);
    }
  }, [address]);

  return (
      <div>
        <div className="flex">
          <AddressTitle/>
          {address && (
          <p className={`text-xs ${ isValid ? 'text-green-500' : 'text-red-500'}`}>
          {isValid ? '' : '유효하지 않은 도로명 주소입니다'}
          </p>
        )}
        </div>
        <div>
          <input 
          value={address} 
          onChange={(ev) => setAddress(ev.target.value)}
          className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="도로명 주소로 입력" />
        </div>
      </div>
    );
  };
  
export default AddressMain;