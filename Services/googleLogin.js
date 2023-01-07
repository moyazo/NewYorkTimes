// IMPORTS FROM FIREBASE AND firebase.js
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin"); // GET REFERENCE FROM BUTTON

googleButton.addEventListener("click", async (e) => {
  e.preventDefault(); // CANCEL CLICK EVENT

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    
    // MODAL CLOSE
    const modalInstance = bootstrap.Modal.getInstance(googleButton.closest('.modal'));
    modalInstance.hide();

    // MESSAGE
    showMessage("Welcome " + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }
});