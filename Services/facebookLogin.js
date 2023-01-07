// IMPORTS FROM FIREBASE AND firebase.js
import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector('#facebookLogin');  // GET REFERENCE FROM BUTTON

facebookButton.addEventListener('click', async e => {
  e.preventDefault();  // CANCEL CLICK EVENT

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("facebook sign in");
    
     // MODAL CLOSE
    const modal = bootstrap.Modal.getInstance(facebookButton.closest('.modal'));
    modal.hide();

    // MESSAGE
    showMessage("Welcome" + credentials.user.email);
  } catch (error) {
    console.log(error);
  }

})