//Script.js

const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

let activeSlide = 0;

const setBgToBody = function () {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = function () {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
};

setBgToBody();
setActiveSlide();

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
    console.log(activeSlide);
    console.log(slides[activeSlide].style.backgroundImage);
  }

  setBgToBody();
  setActiveSlide();
});

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();

  console.log(activeSlide);
  console.log(slides[activeSlide].style.backgroundImage);
});
