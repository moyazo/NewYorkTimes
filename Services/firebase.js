// IMPORTS FROM LIBRARIES OF FIREBASE

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = { // APP CONFIG
  apiKey: "AIzaSyBIo7OKDEtUClvewuwtj-L9JBWN8TPZESU",
  authDomain: "nty---web.firebaseapp.com",
  projectId: "nty---web",
  storageBucket: "nty---web.appspot.com",
  messagingSenderId: "431996340657",
  appId: "1:431996340657:web:c516689f6040cc5fc1d590"
};

// INITIALIZE
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)