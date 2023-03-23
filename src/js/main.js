/*==================== HIDE/SHOW NAV MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navCLose = document.getElementById("nav-close");

/*===== SHOW MENU =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

/*===== HIDE MENU =====*/
/* When close button has been clicked */
if (navCLose) {
  navCLose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/* When mobile menu's nav link has been clicked */
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) =>
  n.addEventListener("click", () => navMenu.classList.remove("show__menu"))
);
