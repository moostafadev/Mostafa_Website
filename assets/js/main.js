// Navbar Action
const icon = document.querySelector(".i-container i");
const nav = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-container li a");

icon.addEventListener("click", navFun);

links.forEach((li) => {
  li.addEventListener("click", removeActive);
});

// Navbar Function
function navFun() {
  nav.classList.toggle("active");
}

// Remove Active Class From Navbar
function removeActive() {
  nav.classList.remove("active");
}
