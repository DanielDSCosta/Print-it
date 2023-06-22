/* Query selector trouve dans le document le premier élèment avec ("") */

const leftButtonElement = document.querySelector(".arrow_left");
const rightButtonElement = document.querySelector(".arrow_right");

const bannerElement = document.querySelector(".banner-img");
const sliderTagLine = document.querySelector(".tagLine");
const sliderDotIndicatorElements = document.querySelectorAll(".dot");

const slides = [
  {
    src: "slide1.jpg",
    innerHTML: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    src: "slide2.jpg",
    innerHTML:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    src: "slide3.jpg",
    innerHTML: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    src: "slide4.png",
    innerHTML: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/* On initialise l'index a 0 */
let currentSlideIndex = 0;

/* Evenement on click sur la fleche droite, rajoute +1 a l'index */
rightButtonElement.addEventListener("click", function () {
  currentSlideIndex++;

  if (currentSlideIndex === slides.length) {
    currentSlideIndex = 0;
  }

  /* vas chercher l'image dans le dossier */
  bannerElement.src = `./assets/images/slideshow/${slides[currentSlideIndex].src}`;

  sliderTagLine.innerHTML = slides[currentSlideIndex].innerHTML;

  /* supprimer le "dot" actuel et ensuite ajoute le nouveau */
  sliderDotIndicatorElements.forEach(function (sliderDotIndicatorElements) {
    sliderDotIndicatorElements.classList.remove("dot_selected");
  });

  sliderDotIndicatorElements[currentSlideIndex].classList.add("dot_selected");
});

/* Evenement on click sur la fleche gauche, rajoute -1 a l'index */
leftButtonElement.addEventListener("click", function () {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  bannerElement.src = `./assets/images/slideshow/${slides[currentSlideIndex].src}`;

  sliderTagLine.innerHTML = slides[currentSlideIndex].innerHTML;

  sliderDotIndicatorElements.forEach(function (sliderDotIndicatorElements) {
    sliderDotIndicatorElements.classList.remove("dot_selected");
  });

  sliderDotIndicatorElements[currentSlideIndex].classList.add("dot_selected");
});
