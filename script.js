/** GSAP ANIMATION **/
/** Navbar Animation */
gsap.from(".navbar-logo", {
  opacity: 0,
  y: -30,
  duration: 1,
});

gsap.from(".navbar-links", {
  opacity: 0,
  y: -30,
  duration: 1,
});

gsap.from(".header", {
  opacity: 0,
  y: -100,
  duration: 1,
});

/********************* */

/** Get Started Button */

var getStartedBtn = document.querySelector(".button");
getStartedBtn.addEventListener("click", () => {
  window.location.href = "../signup/signup.html";
});
