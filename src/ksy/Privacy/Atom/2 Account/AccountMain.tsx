import { useEffect, useState } from "react";
import AccountTitle from "./AccountTitle";
import AccountOverlapButton from "./AccountoverlapButton";


const AccountMain = () => {
  const [account, setAccount] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isOverlapAccount, setOverlapAccount] = useState<boolean | null>(null);

  useEffect(() => {
    const valid = account.length >= 3 && account.length <= 20;
    setIsValid(valid);
  }, [account]);

  const overlapCheck = () => {
    const accountData = JSON.parse(sessionStorage.getItem("account_data") || "[]");

    if (accountData.includes(account)) {
      setOverlapAccount(true);
    }
    else {
      accountData.push(account);
      sessionStorage.setItem("account_data", JSON.stringify(accountData));
      setOverlapAccount(false);
    }
  };

  return (
    <div>
      <div className="flex">
        <AccountTitle/>
        {account && (
          <p className={`text-xs ${ !isValid && isOverlapAccount ? 'text-red-500' : 'text-green-500'}`}>
          {!isValid
            ? '사용할 수 없는 계정입니다': isOverlapAccount
            ? '사용가능한 계정입니다': '새로운 계정입니다'}
          </p>
        )}
      </div>
      <div>
        <input 
            value={account} 
            onChange={(ev) => setAccount(ev.target.value)}
            className="w-80 border rounded mr-1 p-2 text-xs mt-1"
          placeholder="계정 입력 (3자 이상)" />
        <AccountOverlapButton onCheckedOverlap={overlapCheck}/>
      </div>
    </div>
    );
  };
  
export default AccountMain;