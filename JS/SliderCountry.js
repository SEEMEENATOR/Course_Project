let slider = document.querySelector(".slider");
(function Slider() {
  const slideContainer = document.querySelector(".container");
  const slide = document.querySelector(".slides");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const interval = 3000;
  let slides = document.querySelectorAll(".slide");
  let index = 0;
  let slideId;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  slide.append(firstClone);
  slide.prepend(lastClone);

  const slideWidth = slides[0].clientWidth;

  slide.style.transform = `translateX(${-slideWidth * index}px)`;

  const startSlide = () => {};

  const getSlides = () => document.querySelectorAll(".slide");
  slide.addEventListener("transitionend", () => {
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slides[index].id === lastClone.id) {
      slide.style.transition = "none";
      index = slides.length - 2;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });
  const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  nextBtn.addEventListener("click", moveToNextSlide);
  prevBtn.addEventListener("click", moveToPreviousSlide);

  startSlide();
})();

const counter = 0;
window.addEventListener("resize", () => {
  if (window.screen.width > 768 && counter === 0) {
    Slider();
  }
});
