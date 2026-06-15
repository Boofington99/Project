/* =========================
   SCROLL ANIMATIONS
========================= */

const hiddenElements = document.querySelectorAll(
'.hidden-right, .hidden-left, .fade-up'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTopButton =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTopButton.classList.add("show-btn");

    } else {

        backToTopButton.classList.remove("show-btn");

    }

});

backToTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   DARK MODE TOGGLE
========================= */
const darkModeToggle =
document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

});

const galleryButton =
document.getElementById("toggleGallery");

const photoGallery =
document.getElementById("photoGallery");

galleryButton.addEventListener("click", () => {

    photoGallery.classList.toggle("open");
    if (photoGallery.classList.contains("open")) {
        galleryButton.textContent =
        "Hide Photos ▲";
    } else {
        galleryButton.textContent =
        "View 15 Photos ▼";
    }
});

/* =========================
   Flip Photo Cards
========================= */
const photoCards = document.querySelectorAll(".photo-card");

photoCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}, 6000);