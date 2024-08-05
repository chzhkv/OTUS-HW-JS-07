function initSlider(images, selector, wrapper, interval) {
  let slider = document.querySelector(selector);

  let currentSlideIndex = 0;

  let li = document.createElement("li");
  let image = document.createElement("img");
  image.src = "./images/" + images[currentSlideIndex];
  image.classList.add("slider-image");
  slider.append(li);
  li.append(image);

  function createArrows(...classes) {
    const arrow = document.createElement("img");
    arrow.src = "./images/211689_left_arrow_icon.png";
    arrow.classList.add(...classes);
    return arrow;
  }
  const leftArrow = createArrows("arrow");
  const rightArrow = createArrows("arrow", "arrow-right");

  document.querySelector(wrapper).prepend(leftArrow);
  document.querySelector(wrapper).append(rightArrow);

  rightArrow.addEventListener("click", function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex === images.length) {
      currentSlideIndex = 0;
    }
    image.src = "./images/" + images[currentSlideIndex];
  });

  leftArrow.addEventListener("click", function previousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex === -1) {
      currentSlideIndex = images.length - 1;
    }
    image.src = "./images/" + images[currentSlideIndex];
  });

  if (interval) {
    window.setInterval(function () {
      image.src = "./images/" + images[currentSlideIndex];
      currentSlideIndex++;
      if (currentSlideIndex === images.length) {
        currentSlideIndex = 0;
      }
    }, interval);
  }
}

initSlider(
  ["pic1.png", "pic2.png", "pic3.png", "pic4.png"],
  "#slider",
  "#slider-wrapper",
);
initSlider(
  ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png"],
  "#slider2",
  "#slider-wrapper2",
  1000,
);
