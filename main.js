import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth } from "./Services/firebase.js";
import { loginCheck } from "./Services/loginCheck.js";;

import './Services/signupForm.js'
import './Services/signinForm.js'
import './Services/googleLogin.js'
import './Services/facebookLogin.js'
import './Services/githubLogin.js'
import './Services/logout.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
  } else {
    loginCheck(user);
  }
});