import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentManagementLayout from "./StudentManagementLayout";
import Login from "./Login";
import Consulting from "./kyh/Consulting";
import AttendanceDashboard from "./kde/AttendanceDashboard";
import ColorChips from "./james/PassiveCheck";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StudentManagementLayout />}>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/PassiveCheck" Component={ColorChips} />
          <Route path="/AttendanceDashboard" Component={AttendanceDashboard} />
          <Route path="/Consulting" Component={Consulting} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
