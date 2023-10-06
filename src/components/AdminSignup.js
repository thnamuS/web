import React, { useState } from "react";
import "./StudentSignup.css"; // Import your CSS file
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


function AdminSignup() {
  const [AdminID, setAdminID] = useState("");
  const [PrivateKey, setPrivateKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling admin sign-in here
    // You can access adminID and privateKey states here
    const auth = getAuth();
createUserWithEmailAndPassword(auth, AdminID, PrivateKey)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('succes')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  };

  return (
    <div className="contactPage">
     <div classname="Formcontainer">
     <form>
      <h1>Admin Sign In</h1>
      <div classname="innerform">
        <div className="field">
          <label htmlFor="adminID" >Admin ID</label>
          <input 
            type="text"
            id="adminID"
            name="adminID"
            value={AdminID}
            onChange={(e) => setAdminID(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="privateKey">Private Key</label>
          <input
            type="password"
            id="privateKey"
            name="privateKey"
            value={PrivateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Sign In</button>
        </div>
      </form>
    </div>
   </div>
  );
}

export default AdminSignup;
