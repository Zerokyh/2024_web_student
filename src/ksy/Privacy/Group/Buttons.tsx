import CancleButton from "../../Button/cancelbutton";
import JoinButton from "../../Button/joinbutton";

function Buttons() {
    return (
        <div className="flex justify-center items-center my-3">
            <JoinButton/>
            <CancleButton/>
      </div>
    );
  }
  
  export default Buttons;