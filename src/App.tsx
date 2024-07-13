import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import AttendanceDashboard from './kde/AttendanceDashboard';

function App() {
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AttendanceDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
