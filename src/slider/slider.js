const slides = document.querySelectorAll(".slider-image");

const leftArrow = document.createElement("img");
leftArrow.src = "./images/211689_left_arrow_icon.png";
leftArrow.classList.add("arrow");

const rightArrow = document.createElement("img");
rightArrow.src = "./images/211689_left_arrow_icon.png";
rightArrow.classList.add("arrow-right", "arrow");

document.getElementById("slider-wrapper").prepend(leftArrow);
document.getElementById("slider-wrapper").append(rightArrow);

let currentSlideIndex = 0;
function showSlide() {
  slides[currentSlideIndex].classList.add("visible");
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove("visible");
}

function changeSlide(slideIndex) {
  hideSlide();
  currentSlideIndex = slideIndex;
  showSlide();
}

function nextSlide() {
  let newSlideIndex = currentSlideIndex + 1;
  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

function previousSlide() {
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
}

leftArrow.addEventListener("click", previousSlide);
rightArrow.addEventListener("click", nextSlide);
