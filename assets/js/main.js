const scroller = document.querySelector(".scroller");
const icon = document.querySelector(".i-container i");
const nav = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-container li a");
const changeTheme = document.querySelector(".change-theme");
const savedTheme = window.localStorage.getItem("theme");
const btnTop = document.querySelector(".btn-top");
const loading = document.querySelector(".c-load");
const sections = document.querySelectorAll("section");
const viewCv = document.querySelector(".view-cv");
const cvSection = document.querySelector(".cv-section");
const backBton = document.querySelector(".cv-section .back");

function scrollWidth(scroller) {
  window.onscroll = () => {
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
  };
}

function navFun(icon, nav) {
  icon.addEventListener("click", () => nav.classList.toggle("active"));
}

function removeActiveFun(links) {
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

function btnTopFun(btnTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      btnTop.classList.add("active");
    } else {
      btnTop.classList.remove("active");
    }
  });
}

function loadingFun(loading) {
  window.addEventListener("load", () => {
    loading.classList.add("disabled");
  });
}

function viewCvFun(viewCv, sections, cvSection) {
  viewCv.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    sections.forEach((s) => {
      s.classList.add("hidden");
    });
    cvSection.classList.add("active");
  };
}

function backToHome(backBton, sections, cvSection) {
  backBton.onclick = () => {
    sections.forEach((s) => {
      s.classList.remove("hidden");
    });
    cvSection.classList.remove("active");
  };
}

scrollWidth(scroller);
btnTopFun(btnTop);
navFun(icon, nav);
removeActiveFun(links);
themeFun(savedTheme, changeTheme);
loadingFun(loading);
viewCvFun(viewCv, sections, cvSection);
backToHome(backBton, sections, cvSection);
