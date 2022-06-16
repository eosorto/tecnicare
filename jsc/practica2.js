const nav = document.querySelector(".nav");
const ambur = document.querySelector(".hamburger");

ambur.addEventListener("click", () => {
  nav.classList.toggle("navshow");
});

window.addEventListener("click", (e) => {
  if (nav.classList.contains("navshow") && e.target != ambur && e.target != nav)
    nav.classList.toggle("navshow");
});
// informacion de sliders
const arrowleft = document.querySelector(".left");
const arrowright = document.querySelector(".right");
const sliders = [...document.querySelectorAll(".slider1m")];
let value;

arrowleft.addEventListener("click", () => {
  changeposition(-1);
});
arrowright.addEventListener("click", () => {
  changeposition(1);
});

function changeposition(change) {
  const current = Number(document.querySelector(".showm").dataset.id);

  value = current;
  value += change;

  if (value === 0 || value == sliders.length + 1) {
    value = value === 0 ? sliders.length : 1;
  }

  sliders[current - 1].classList.toggle("showm");
  sliders[value - 1].classList.toggle("showm");
}

// slider de imagenes hidden

const img1 = document.querySelectorAll(".img1");
const cerrar = document.querySelector(".close");
const imghh = document.querySelector(".imghidden");
const imgconten = document.querySelector(".hiddenconten");

img1.forEach((imagenes) => {
  imagenes.addEventListener("click", () => {
    pasarimagen(imagenes.src);
  });
});

function pasarimagen(imagenes) {
  imghh.src = imagenes;
  imgconten.classList.toggle("hiddenshow");
}

cerrar.addEventListener("click", () => {
  imgconten.classList.toggle("hiddenshow");
});

// aca ba el slider

const sliderc = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionlast = sliderSection[sliderSection.length - 1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

sliderc.insertAdjacentElement("afterbegin", sliderSectionlast);

function next(params) {
  let sliderSectionfirst = document.querySelectorAll(".slider-section")[0];
  sliderc.style.marginleft = "-200%";
  sliderc.style.transition = "all 0.8s";

  setTimeout(function () {
    sliderc.style.transition = "none";
    sliderc.insertAdjacentElement("beforeend", sliderSectionfirst);
    sliderc.style.marginleft = "-100%";
  }, 800);
}

setInterval(function () {
  next();
}, 3000);
