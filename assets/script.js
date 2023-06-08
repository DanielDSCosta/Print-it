let left = document.getElementsByClassName("arrow_left");
let right = document.getElementsByClassName("arrow_right");
let ban = document.querySelector(".banner_img");
let tagLine = document.querySelector(".tagLine");
let dots = document.querySelectorAll(".dot");
let liste = 0;

right[0].addEventListener("click", function () {
  liste++;
  if (liste === slides.length) {
    liste = 0;
  }
  ban.src = `./assets/images/slideshow/${slides[liste].image}`;
  tagLine.innerHTML = slides[liste].tagLine;
  dots.forEach(function (dot) {
    dot.classList.remove("dot_selected");
  });
  dots[liste].classList.add("dot_selected");
});

left[0].addEventListener("click", function () {
  liste--;
  if (liste < 0) {
    liste = slides.length - 1;
  }
  ban.src = `./assets/images/slideshow/${slides[liste].image}`;
  tagLine.innerHTML = slides[liste].tagLine;
  dots.forEach(function (dot) {
    dot.classList.remove("dot_selected");
  });
  dots[liste].classList.add("dot_selected");
});

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
