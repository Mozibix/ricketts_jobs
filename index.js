/* PRE-LOADER FUNCTIONALITY*/
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader_sec");
  preloader.classList.remove("hidden");
  preloader.classList.add("preloader");

  void preloader.offsetWidth;

  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1500);
});

const toogleBtn = document.querySelector(".toogle_btn");
const toogleBtnIcon = document.querySelector(".toogle_btn i");
const menu = document.querySelector(".dropdown_menu");
const menuLists = document.querySelectorAll(".menu_lists li");
const navScroll = document.querySelector(".navbar");

/* NAV-FUNCTIONS */

/* ACTIVE LINKS */
const removeActive = () => {
  menuLists.forEach((link) => {
    link.classList.remove("active");
  });
};

menuLists.forEach((link) => {
  link.addEventListener("click", () => {
    removeActive();
    link.classList.add("active");
  });
});

toogleBtn.onclick = () => {
  menu.classList.toggle("open");

  const isOpen = menu.classList.contains("open");

  toogleBtnIcon.classList = isOpen ? "fa fa-times" : "fa fa-bars";
};

const isClose = () => {
  const isClose = menu.classList.remove("open");

  toogleBtnIcon.classList = isClose ? "fa fa-times" : "fa fa-bars";
};

document.onclick = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};
document.onscroll = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};

/* SCROLL FUNCTIONALITY */
window.addEventListener("scroll", () => {
  navScroll.classList.toggle("scroll_active", window.scrollY > 350);
});

const animationUp = document.querySelectorAll(".animations_up");
const animationDown = document.querySelectorAll(".animations_down");
const animationLeft = document.querySelectorAll(".animations_left");
const animationRight = document.querySelectorAll(".animations_right");

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.1 }
);

for (let i = 0; i < animationUp.length; i++) {
  const elements = animationUp[i];

  scrollObserver.observe(elements);
}
/*  */
for (let i = 0; i < animationDown.length; i++) {
  const elements = animationDown[i];

  scrollObserver.observe(elements);
}
/*  */
for (let i = 0; i < animationLeft.length; i++) {
  const elements = animationLeft[i];

  scrollObserver.observe(elements);
}
/*  */
for (let i = 0; i < animationRight.length; i++) {
  const elements = animationRight[i];

  scrollObserver.observe(elements);
}
