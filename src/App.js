// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import 'Routes' from react-router-dom
import "./App.css";
import StudentSignup from "./components/StudentSignup";
import AdminSignup from "./components/AdminSignup";
import DepartmentSignup from "./components/DepartmentSignup";

function App() {
  return (
    <Router>
      <nav>
        <div classname="list">
        <ul>
          <li>
            <div classname="option">
            <Link to="/student">Student</Link>
            </div>
          </li>
          <li>
            <div classname="option">
            <Link to="/admin">Admin</Link>
            </div>
          </li>
          <li>
            <div classname="option">
            <Link to="/department">Department</Link>
            </div>
          </li>
        </ul>
        </div> 
      </nav>
      
      {/* Use 'Routes' to define your route configuration */}
      <Routes>
        <Route path="/student" element={<StudentSignup />} />
        <Route path="/admin" element={<AdminSignup />} />
        <Route path="/department" element={<DepartmentSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
