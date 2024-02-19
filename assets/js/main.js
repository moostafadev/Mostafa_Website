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
const cvSection = document.querySelector(".cv-page");
const backBton = document.querySelector(".cv-page .back");
const searchLies = document.querySelectorAll(".search li");

function handleSearch(searchLies) {
  let search = [];
  let notFound = false;
  searchLies.forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("active");
      if (search.includes(li.id)) {
        search = search.filter((s) => s !== li.id);
      } else {
        search.push(li.id);
      }
      const items = Array.from(
        document.querySelectorAll(".portfolio .content > div")
      );
      const filteredItems = items.filter((item) => {
        return search.length > 0
          ? search.every((s) => item.classList.contains(s))
          : (notFound = true);
      });
      items.forEach((item) => {
        if (filteredItems.includes(item)) {
          item.classList.remove("disable");
        } else {
          item.classList.add("disable");
        }
      });
      filteredItems.length < 1 ? (notFound = true) : (notFound = false);
      if (
        notFound === true &&
        document.querySelector(".portfolio .content p") === null
      ) {
        const p = document.createElement("p");
        p.textContent = "Not Found";
        p.id = "not_found";
        document.querySelector(".portfolio .content").appendChild(p);
      } else if (notFound === false) {
        const notFoundParagraph = document.querySelector(
          ".portfolio .content p"
        );
        notFoundParagraph ? notFoundParagraph.remove() : null;
      }
      if (li.id === "all") {
        search = [];
        searchLies.forEach((el) => el.classList.remove("active"));
        document.querySelector(".portfolio .content p")
          ? document.querySelector(".portfolio .content p").remove()
          : null;
        items.forEach((item) => {
          item.classList.remove("disable");
        });
      }
    });
  });
}

function handleNavbar(links) {
  function removeActive(links, activeLinkId) {
    links.forEach((link) => {
      if (link.id === activeLinkId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", () => {
    const height = window.scrollY;
    const sections = [
      { id: "home-nav", min: 0, max: 700 },
      { id: "about-nav", min: 700, max: 1400 },
      { id: "skills-nav", min: 1400, max: 2100 },
      { id: "portfolio-nav", min: 2100, max: 2800 },
      { id: "contact-nav", min: 2800, max: Infinity },
    ];
    const activeSection = sections.find(
      (section) => height >= section.min && height < section.max
    );
    if (activeSection) {
      removeActive(links, activeSection.id);
    }
  });
}

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
handleNavbar(links);
handleSearch(searchLies);
