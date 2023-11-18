// Example signup function
function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("full_name").value; // Assuming there is an input for the username
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Store user data in Firestore
        const user = userCredential.user;
        firebase.firestore().collection("users").doc(user.uid).set({
          email: email,
          full_name: full_name,
        });
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }
  
  // Example login function
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Fetch user data from Firestore and redirect to homepage
        const user = userCredential.user;
        fetchUserDataAndRedirect(user.uid);
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }
  
  // Fetch user data from Firestore
  function fetchUserDataAndRedirect(userId) {
    firebase.firestore().collection("users").doc(userId).get()
      .then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          // Redirect to homepage with user data
          window.location.replace(`/landing.html?full_name=${userData.full_name}`);
        } else {
          console.log("User data not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }
  