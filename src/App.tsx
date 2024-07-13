import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Consulting from "./kyh/Consulting";
import AttendanceDashboard from "./kde/AttendanceDashboard";

import Home from "./Home";
import PassiveCheck from "./james/PassiveCheck";
import Qrcode from "./Qrcode";
import StudentManagementLayout from "./StudentManagementLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StudentManagementLayout />}>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/PassiveCheck" Component={PassiveCheck} />
          <Route path="/AttendanceDashboard" Component={AttendanceDashboard} />
          <Route path="/Consulting" Component={Consulting} />
          <Route path="/Qrcode" Component={Qrcode} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
