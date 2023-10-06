// src/components/DepartmentSignup.js
import React, { useState } from "react";

function DepartmentSignup() {
  const [formData, setFormData] = useState({
    departmentName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle department signup logic (e.g., send data to a server)
    console.log("Department Signup Data:", formData);
  };

  return (
    <div>
      <h2>Department Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="departmentName"
          placeholder="Department Name"
          value={formData.departmentName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default DepartmentSignup;
