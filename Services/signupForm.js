import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    /**
     * Corrección
     * Console.log sobra
     */
    console.log(userCredential)

    // Close the signup modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    // reset the form
    signUpForm.reset();
    
    // show welcome message
    showMessage("Welcome" + userCredential.user.email);
    let cont = 0
    let idInterval = setInterval(() => {
      cont++
      if(cont === 4){
        clearInterval(idInterval)
        location.replace("./dashboard.html")
      }
    },4000)
  } catch (error) {
    switch (messageError) {
      case 'auth/email-already-in-use':
        showMessage("Email already in use", "error");
        break;
      case 'auth/invalid-email':
        showMessage("Invalid email", "error");
        break;
      case 'auth/weak-password':
        showMessage("Weak password", "error");
        break;
      default:
        showMessage("Something went wrong", "error");
        break;
    }
  }

})