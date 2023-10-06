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
      <div id="main">
      <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/department">Department</Link>
          </li>
        </ul>
      </nav>
      </div>
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
