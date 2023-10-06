// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import 'Routes' from react-router-dom

import StudentSignup from "./components/StudentSignup";
import AdminSignup from "./components/AdminSignup";
import DepartmentSignup from "./components/DepartmentSignup";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/student">Student Signup</Link>
          </li>
          <li>
            <Link to="/admin">Admin Signup</Link>
          </li>
          <li>
            <Link to="/department">Department Signup</Link>
          </li>
        </ul>
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
