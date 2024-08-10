import React, { useEffect, useState } from "react";
import AccountTitle from "./AccountTitle";
import AccountTempAlert from "./AccountUseAlert";
import AccountOverlapButton from "./AccountoverlapButton";

const AccountMain = () => {
  const [account, setAccount] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const valid = account.length >= 3 && account.length <= 20;
    setIsValid(valid);
  }, [account]);

  return (
    <div>
      <div className="flex">
        <AccountTitle/>
        {!isValid && account && <AccountTempAlert/>}
      </div>
      <div>
        <input 
            value={account} 
            onChange={(ev) => setAccount(ev.target.value)}
            className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="계정 입력 (3자 이상)" />
        <AccountOverlapButton/>
      </div>
      </div>
    );
  };
  
export default AccountMain;