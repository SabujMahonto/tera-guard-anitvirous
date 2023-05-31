"use strict";

/////////////////////////////////////////////////////////////
// Elements selected
/////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const toggleBtn = document.querySelector(".nav__toggle");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const cookieBody = document.querySelector(".cookie");
const cookieCloseBtn = document.querySelector(".cookie__close");
const imgTargets = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

// Cookie
cookieCloseBtn.addEventListener("click", function () {
  cookieBody.classList.add("hidden");
  cookieBody.style.bottom = "-12rem";
});
// Stick navbar
// nav's height
const navHeight = nav.getBoundingClientRect().height;

function sticky(entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
const headerObserver = new IntersectionObserver(sticky, {
  root: null, // viewport
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//  reveal section

function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}

const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
  rootMargin: "200px",
});

allSections.forEach((section) => {
  sectionObs.observe(section);
  section.classList.add("section--hidden");
});
// open modal
function openModel(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// close modal
function closeModel(e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  if (e.key === "Escape" && !modal.classList.contains("hidden"));
}

//modal windows
btnOpenModal.forEach((btn) => btn.addEventListener("click", openModel));
btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);
document.addEventListener("keydown", closeModel);

// Scrollbehavear
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const attr = e.target.getAttribute("href");
    document.querySelector(attr).scrollIntoView({ behavior: "smooth" });
    console.log(attr);
  }
});
