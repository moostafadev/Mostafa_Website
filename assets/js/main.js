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

// Scroll Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".home-title", {});
sr.reveal(".home-scroll", { delay: 200 });
sr.reveal(".home-img", { origin: "right", delay: 300 });
sr.reveal(".head-section", {});
sr.reveal(".text", { delay: 200 });
sr.reveal(".image", { delay: 300 });
sr.reveal(".item", { interval: 200 });
