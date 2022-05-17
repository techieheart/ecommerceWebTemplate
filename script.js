"use strict";

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const mobileNav = document.getElementById("mobile");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    mobileNav.style.display = "none";
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    mobileNav.style.display = "flex";
  });
}
