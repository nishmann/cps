import '../scss/style.scss';

// Показать и скрывать брендов
let toggleBtnServices = document.querySelector(".services__btn");
let servicesGroup = document.querySelector(".services__group");

toggleBtnServices.addEventListener("click", () => {
  toggleBtnServices.classList.toggle("services__btn--show");

  if (toggleBtnServices.classList.contains("services__btn--show")) {
    toggleBtnServices.textContent = "Скрыть";
    servicesGroup.classList.add("services__group--full");
  } else {
    toggleBtnServices.textContent = "Показать все";
    servicesGroup.classList.remove("services__group--full");
  }
});

// Swiper

const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    321: {
      slidesPerView: 1
    }
  }
});
