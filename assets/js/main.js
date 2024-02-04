// Navbar Action
const icon = document.querySelector(".i-container i");
const nav = document.querySelector(".nav-container");

icon.addEventListener("click", navFun);

// Navbar Function
function navFun() {
  nav.classList.toggle("active");
}
