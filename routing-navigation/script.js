const open = document.getElementById("open");
const close = document.getElementById("Close");
const closeq = document.querySelector("Close");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const circle = document.querySelector(".circle ");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  container.style.backgroundColor = "#fff";
  body.style.backgroundColor = "#333";
  home.style.transform = "translateX(0)";
  about.style.transform = "translateX(0)";
  contact.style.transform = "translateX(0)";
  circle.style.transform = "rotate(-70deg)";
});
closeq.addEventListener("click", () => {
  container.classList.remove("show-nav");
  container.style.backgroundColor = "#fff";
  body.style.backgroundColor = "#fff";
  home.style.transform = "translateX(-100%)";
  about.style.transform = "translateX(-150%)";
  contact.style.transform = "translateX(-200%)";
  circle.style.transform = "rotate(0)";
});
