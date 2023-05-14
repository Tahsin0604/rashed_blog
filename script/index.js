const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let menuOpen = false;

const setNavBar = () => {
  if (window.innerWidth > 1024) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    menuOpen = false;
  }
};

mobileBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  }
});

window.onresize = setNavBar;
