// Main Variables
const icon = document.querySelector(".i-container i");
const nav = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-container li a");

function navFun(icon, nav) {
  icon.addEventListener("click", () => nav.classList.toggle("active"));
}

function removeActive(links) {
  links.forEach((li) => {
    li.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

navFun(icon, nav);
removeActive(links);
