// src/components/DepartmentSignup.js
import "./StudentSignup.css";
import React, { useState } from "react";

function DepartmentSignup() {
  const [DID, setDID] = useState("");
  const [mail, setmail] = useState("");
  const [Password, setPassword] = useState("");

  
  
  return (
    <div class="contactPage">
     <div classname="Formcontainer">
      <form>
      <h1>Department SignIn</h1>
      <div classname="innerform">
        <div classname="field">
        <label>Department Name</label>
        <input
          type="text"
          name="DID"
          value={DID}
          onChange={(e) => setDID(e.target.value)}
        />
        </div>
        <div classname="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
        />
        </div>
        <div classname="field">
            <label>password</label>
            <input
            type="password"
            name="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit" >SignIn</button>
      </div>
      </form>
    </div>
    </div>
  );
}

export default DepartmentSignup;
