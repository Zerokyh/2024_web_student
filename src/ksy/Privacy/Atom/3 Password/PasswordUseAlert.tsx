const PasswordTempAlert = () => {
    return (
      <div className="text-red-500 text-xs">
        <span>비밀번호가 정확하지 않습니다</span>
        <div>
        <span className="ml-1">
        (특수문자 !@#$%^&* 중 하나를 포함한 8~20자)
        </span>
        </div>
      </div>
    );
  };
  
export default PasswordTempAlert;