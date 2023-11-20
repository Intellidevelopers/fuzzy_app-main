
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

  // Your web app's Firebase configuration
  // Make sure it matches the configuration in your signup page
  const firebaseConfig = {
    apiKey: "AIzaSyC1kDtYIauw1KYF2OYK6zJBj_DtDxjuOWo",
        authDomain: "login-signup-authenticat-4fa75.firebaseapp.com",
        databaseURL: "https://login-signup-authenticat-4fa75-default-rtdb.firebaseio.com",
        projectId: "login-signup-authenticat-4fa75",
        storageBucket: "login-signup-authenticat-4fa75.appspot.com",
        messagingSenderId: "77434343036",
        appId: "1:77434343036:web:de2288d9664bae1c7483f9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in, display the full name on the homepage
        const fullName = user.displayName;
        document.getElementById('userGreeting').innerText = `Welcome back, ${fullName}!`;
      }
    });
  });