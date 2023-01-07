// IMPORTS FROM FIREBASE AND firebase.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form"); // GET REFERENCE OF FORM

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // SUMBIT EVENT CANCEL
  const email = signInForm["login-email"].value; // VALUES OF INPUTS
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password) // SINGIN FIREBASE METHOD

    // MODAL CLOSE
    const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    modal.hide();

    // FORM RESET
    signInForm.reset();

    // MESSAGE
    showMessage("Welcome" + userCredentials.user.email);

    let cont = 0
    let idInterval = setInterval(() => {
      cont++
      if(cont === 4){
        clearInterval(idInterval)
        location.replace("./dashboard.html")
      }
    },3000)
  } catch (error) {

    let messageError = error.code
    switch (messageError) {
      case 'auth/wrong-password':
        showMessage("Wrong password", "error")
        break;
      case 'auth/user-not-found':
        showMessage("User not found", "error")
        break;
      default:
        showMessage("Something went wrong", "error")
        break;
    }
  }
});