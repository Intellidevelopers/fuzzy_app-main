document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("/landing.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email_login = document.getElementById("email_login").value
    const password_login = document.getElementById("password_login").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass() {
    const email = document.getElementById("email").value;
  
    // Check if the email exists in the database
    firebase.auth().fetchSignInMethodsForEmail(email)
      .then((signInMethods) => {
        if (signInMethods.length === 0) {
          // User with this email does not exist
          Swal.fire('Error', 'User with this email does not exist.', 'error');
        } else {
          // Email exists, send password reset email
          firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
              Swal.fire('Success', 'Password reset email sent. Check your inbox.', 'success');
            })
            .catch((error) => {
              Swal.fire('Error', error.message, 'error');
            });
        }
      })
      .catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
  }
  