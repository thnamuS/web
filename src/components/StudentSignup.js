// src/components/StudentSignup.js
import "./StudentSignup.css";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import React, { useState } from "react";

function StudentSignup() {
  const [SID,setSID] = useState("");
  const [Password,setPassword] = useState("");

  

 

  return (
    <div class="contactPage">
     <div>
      <h1>Student SignIn</h1>
      <div classname="form">
      <form>
        <div classname="field">
        <label>Student ID</label>
        <input
          type="text"
          name="SID"
          value={SID}
          onChange={(e) => setSID(e.target.value)}
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
      </form>
    </div>
    </div>
    </div>
  );
}

export default StudentSignup;
