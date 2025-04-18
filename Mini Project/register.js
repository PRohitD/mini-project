import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAToKeaKfUqFcxjDjG90CuHmIDuAiAVRic",
  authDomain: "studentacodomation.firebaseapp.com",
  projectId: "studentacodomation",
  storageBucket: "studentacodomation.appspot.com",
  messagingSenderId: "337867724577",
  appId: "1:337867724577:web:896d4f5a9ec7ebdc731060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("register");

  registerButton.addEventListener("click", async function (event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const date_of_birth = document.getElementById("date_of_birth").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Email and Password are required!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        phone,
        address,
        pincode,
        date_of_birth
      });

      alert("Account created successfully!");
    } catch (error) {
      console.error("Registration error:", error.code, error.message);
      alert("Error: " + error.message);
    }
  });
});
