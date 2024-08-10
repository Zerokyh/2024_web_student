import Buttons from "./Privacy/Group/Buttons";
import Title from "./Privacy/Group/Titles";
import Account from "./Privacy/SignUpContents/2_Account";
import UserID from "./Privacy/SignUpContents/1_UserID";
import Password from "./Privacy/SignUpContents/3_Password";
import Name from "./Privacy/SignUpContents/4_Name";
import Phone from "./Privacy/SignUpContents/5_Phone";
import Age from "./Privacy/SignUpContents/6_Age";
import Address from "./Privacy/SignUpContents/7_Address";
import Email from "./Privacy/SignUpContents/8_Email";

const UserRegister = () => {
  
  return (
      <div className="flex-row justify-center text-center">
        <Title/>
        <div className="p-20 border rounded max-w-fit text-start mx-auto">
          <UserID/>
          <Account/>
          <Password/>
          <Name/>
          <Phone/>
          <Age/>
          <Address/>
          <Email/>
        </div>
        <Buttons/>
      </div>
    );
  }
  
  export default UserRegister;