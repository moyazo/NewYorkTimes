// IMPORTS FROM FIREBASE AND firebase.js
import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const githubButton= document.querySelector("#githubLogin"); // GET REFERENCE FROM BUTTON

githubButton.addEventListener("click", async (e) => {
  e.preventDefault(); // CANCEL CLICK EVENT

  const provider = new GithubAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
 // MODAL CLOSE
    const modalInstance = bootstrap.Modal.getInstance(githubButton.closest('.modal'));
    modalInstance.hide();

  // MESSAGE
    showMessage("Welcome " + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }
});