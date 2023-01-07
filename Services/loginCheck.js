const loggedOutLinks = document.querySelectorAll(".logged-out"); // GET REFERENCES OF CLASSES IN ORDER TO CONTROL THE USER LOGIN
const loggedInLinks = document.querySelectorAll(".logged-in");


//  IF IS LOGGED, DISPLAY BLACK. IF NOT DISPLAY NONE
export const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};