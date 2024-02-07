// Main Variables
const icon = document.querySelector(".i-container i");
const nav = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-container li a");
const changeTheme = document.querySelector(".change-theme");
const savedTheme = window.localStorage.getItem("theme");
const btnTop = document.querySelector(".btn-top");

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

function themeFun(savedTheme, changeTheme) {
  if (savedTheme) {
    document.body.classList.toggle("dark-theme", savedTheme === "moon");
    changeTheme.classList.toggle("bx-sun", savedTheme === "sun");
  }
  changeTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    window.localStorage.setItem("theme", isDarkTheme ? "moon" : "sun");
    changeTheme.classList.toggle("bx-sun", !isDarkTheme);
  });
}

function btnTopfun(btnTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      btnTop.classList.add("active");
    } else {
      btnTop.classList.remove("active");
    }
  });
}

btnTopfun(btnTop);
navFun(icon, nav);
removeActive(links);
themeFun(savedTheme, changeTheme);
