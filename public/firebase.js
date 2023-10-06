import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase,ref, set} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDd7R3OyAO24QnRuXUS8fNXzSoKRe3Ltm8",
    authDomain: "web2-6626e.firebaseapp.com",
    projectId: "web2-6626e",
    storageBucket: "web2-6626e.appspot.com",
    databaseURL: "https://web2-6626e-default-rtdb.asia-southeast1.firebasedatabase.app",
    messagingSenderId: "340333027613",
    appId: "1:340333027613:web:a28cc626187daf368001f4"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function writeUserData(userId, name, email,com,result) {
  const db = getDatabase();
  set(ref(db, 'admin/student/' + userId), {
    username: name,
    email: email,
    company:com,
    result:result
    
  });
}


export default { app,auth };