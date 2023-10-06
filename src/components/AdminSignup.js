import React, { useState } from "react";
import "./StudentSignup.css"; // Import your CSS file


function AdminSignup() {
  const [adminID, setAdminID] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling admin sign-in here
    // You can access adminID and privateKey states here
  };

  return (
    <div className="contactPage">
     <div classname="Formcontainer">
     <form>
      <h1>Admin Sign In</h1>
      <div classname="innerform">
        <div className="field">
          <label htmlFor="adminID">Admin ID</label>
          <input
            type="text"
            id="adminID"
            name="adminID"
            value={adminID}
            onChange={(e) => setAdminID(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="privateKey">Private Key</label>
          <input
            type="password"
            id="privateKey"
            name="privateKey"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
   </div>
  );
}

export default AdminSignup;
