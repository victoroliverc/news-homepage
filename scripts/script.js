const btn = document.querySelector("#btn-menu");
const btnIcon = document.querySelector("#btn-icon");
const menu = document.querySelector("#menu");
const menuNav = document.querySelector("#menu-nav");
let isOpen = false;

function toggleMenu() {
  if (isOpen) {
    menuNav.style.transform = "translateX(100%)";
    menu.style.visibility = "hidden";
    btn.style.position = "static";
    btnIcon.src = "./assets/images/icon-menu.svg";
  } else {
    menuNav.style.transform = "translateX(0)";
    menu.style.visibility = "visible";
    btn.style.position = "fixed";
    btnIcon.src = "./assets/images/icon-menu-close.svg";
  }
  isOpen = !isOpen;
}

btn.addEventListener("click", toggleMenu);
