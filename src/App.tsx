import MiniDrawer from "./MiniDrawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Qrcode from "./Qrcode";
import PassiveCheck from "./james/PassiveCheck";
import AttendanceDashboard from "./kde/AttendanceDashboard";
import Login from "./Login";
import Consulting from "./kyh/Consulting";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MiniDrawer />}>
            <Route path="/" Component={Home} />
            <Route path="/Login" Component={Login} />
            <Route path="/PassiveCheck" Component={PassiveCheck} />
            <Route
              path="/AttendanceDashboard"
              Component={AttendanceDashboard}
            />
            <Route path="/Consulting" Component={Consulting} />
            <Route path="/Qrcode" Component={Qrcode} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
