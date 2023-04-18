const barcontainer = document.querySelector(".baricon");
const toggle_button = document.querySelector("#nav-toggler");
function barstogglers() {
  barcontainer.classList.toggle("change");
}

function toggleNavMenu() {
  const menu = document.querySelector(".nav-items");
  barcontainer.addEventListener("click", barstogglers);
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "none";
  }
}

function addNavMenuToggleListener() {
  const toggleButton = document.querySelector("#nav-toggler");
  toggleButton.addEventListener("click", toggleNavMenu);
}

function removeNavMenuToggleListener() {
  const toggleButton = document.querySelector("#nav-toggler");
  toggleButton.removeEventListener("click", toggleNavMenu);
  console.log("from remove navmenu toggle listener");
}

function checkScreenSize() {
  const toggleButton = document.querySelector("#nav-toggler");
  if (window.innerWidth <= 768) {
    toggleButton.addEventListener("click", addNavMenuToggleListener);
  } else {
    toggleButton.removeEventListener("click", removeNavMenuToggleListener);
    const navMenu = document.querySelector(".nav-items");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
