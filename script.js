const notes = ["For Diana, with hope."];

const note = document.getElementById("changing-note");
const seed = Math.floor(Date.now() / 86400000);
note.textContent = notes[seed % notes.length];

document.getElementById("year").textContent = new Date().getFullYear();


// Diana homepage slideshow.
// Clicking either the hero photo or the HTML sunflower advances one image.
const dianaSlides = [
  {
    src: "diana-cute.jpg",
    alt: "Diana smiling by a bright window in a floral dress."
  },
  {
    src: "diana-sunflowers.jpg",
    alt: "Diana standing in a field of sunflowers, holding her parents’ hands."
  },
  {
    src: "diana-butterfly.jpg",
    alt: "Diana playing with colorful butterfly binoculars."
  },
  {
    src: "diana-family.jpg",
    alt: "Diana standing and smiling with her family at home."
  },
  {
    src: "diana-birthday.jpg",
    alt: "Diana smiling at a birthday dessert with a candle."
  }
];

let dianaSlideIndex = 0;
const heroSlideImage = document.getElementById("hero-slideshow-image");
const heroSlideshow = document.getElementById("hero-slideshow");
const sunflowerNext = document.getElementById("sunflower-next");

dianaSlides.forEach((slide) => {
  const preload = new Image();
  preload.src = slide.src;
});

function showNextDianaPhoto() {
  if (!heroSlideImage) return;

  dianaSlideIndex = (dianaSlideIndex + 1) % dianaSlides.length;
  const nextSlide = dianaSlides[dianaSlideIndex];

  heroSlideImage.classList.add("is-changing");

  window.setTimeout(() => {
    heroSlideImage.src = nextSlide.src;
    heroSlideImage.alt = nextSlide.alt;
    heroSlideImage.classList.remove("is-changing");
  }, 180);
}

function activateSlideshowWithKeyboard(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showNextDianaPhoto();
  }
}

if (heroSlideshow) {
  heroSlideshow.addEventListener("click", showNextDianaPhoto);
  heroSlideshow.addEventListener("keydown", activateSlideshowWithKeyboard);
}

if (sunflowerNext) {
  sunflowerNext.addEventListener("click", showNextDianaPhoto);
  sunflowerNext.addEventListener("keydown", activateSlideshowWithKeyboard);
}
