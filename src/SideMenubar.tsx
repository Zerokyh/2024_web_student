import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideMenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-5 py-1 w-40 h-svh text-sm justify-evenly bg-sidebarColor text-white">
      <ButtonGroup variant="text" aria-label="Basic button">
        <Button onClick={() => navigate("/PassiveCheck")}>의석님</Button>
        <Button onClick={() => navigate("/AttendanceDashboard")}>도은님</Button>
        <Button onClick={() => navigate("/Consulting")}>윤호님</Button>
      </ButtonGroup>
    </div>
  );
};

export default SideMenuBar;
