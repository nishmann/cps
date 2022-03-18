import '../scss/style.scss';

// Мобильный меню

let burgerBtn = document.querySelector(".button-item_burger");
let burgerBtnClose = document.querySelector(".button-item_close");
let mobileMenuContainer = document.querySelector(".aside");
let windowBtn = document.getElementById("screen");

if (!mobileMenuContainer.classList.contains("aside_show")) {
  burgerBtn.addEventListener("click", () => {
    mobileMenuContainer.classList.add("aside_show");
    document.getElementById("screen").style.display = "block";
  })
}

windowBtn.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("aside_show");
  document.getElementById("screen").style.display = "none";
  document.getElementById("call").style.right = "-600px";
})

burgerBtnClose.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("aside_show");
  document.getElementById("screen").style.display = "none";
})

// Заказать звонок

let callBtn = document.querySelector(".button-item_phone_background");
let callBtnHeader = document.getElementById("button-item_phone_background");
let callBtnClose = document.querySelector(".request-call--close");

callBtn.addEventListener("click", () => {
  document.getElementById("call").style.right = "0px";
  document.getElementById("call").style.transition = "300ms";
  document.getElementById("screen").style.display = "block";
});

callBtnHeader.addEventListener("click", () => {
  document.getElementById("call").style.right = "0px";
  document.getElementById("call").style.transition = "300ms";
  document.getElementById("screen").style.display = "block";
});

callBtnClose.addEventListener("click", () => {
  document.getElementById("call").style.right = "-600px";
  document.getElementById("call").style.transition = "300ms";
  document.getElementById("screen").style.display = "none";
});

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
