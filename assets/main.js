// BurgerMenu

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.classList.add("nav-gone");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("nav-gone");
  });
}

// Active menu

const locationHTML = window.location.href;
const navbarLinks = document.querySelectorAll(".nav_link");

navbarLinks.forEach((link) => {
  if (link.href === locationHTML) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Explore Btn

const exploreBtn = document.getElementById("explore");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    window.location.href = "destination-moon.html";
  });
}

// Crew Slider

const crewSlider = document.querySelectorAll(".crew_slider");
const sliderElement = document.querySelectorAll(".slider");
const firstSlider = document.querySelector(".slider");

const techSlider = document.querySelectorAll(".tech_info");
const techSliderElement = document.querySelectorAll(".tech_slider");
const firstTechSlider = document.querySelector(".tech_slider");

const mainSlider = (Content, allSlider) => {
  return allSlider.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      Content.forEach((container, i) => {
        if (i === index) {
          container.style.display = "flex";
        } else {
          container.style.display = "none";
        }
      });
    });
  });
};

const activeSliders = (every, first) => {
  every.forEach((slider) => {
    first.classList.add("slide-act");
    slider.addEventListener("click", () => {
      every.forEach((el) => {
        el.classList.remove("slide-act");
      });
      slider.classList.add("slide-act");
    });
  });
};

mainSlider(techSlider, techSliderElement);
mainSlider(crewSlider, sliderElement);

activeSliders(sliderElement, firstSlider);
activeSliders(techSliderElement, firstTechSlider);
