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
  document.getElementById("modal-feedback").style.right = "-600px";
})
burgerBtnClose.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("aside_show");
  document.getElementById("screen").style.display = "none";
})

// Заказать звонок и Обратная связь
let callBtn = document.querySelector(".button-item_phone_background");
let feedbackBtn = document.querySelector(".button-item_chat_background");
let callBtnHeader = document.getElementById("button-item_phone_background");
let callBtnFeedback = document.getElementById("button-item_chat_background");
let callBtnClose = document.querySelector(".modal--close");
let feedbackBtnClose = document.querySelector(".modal-feedback__close");

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
callBtnFeedback.addEventListener("click", () => {
  document.getElementById("modal-feedback").style.right = "0px"
  document.getElementById("modal-feedback").style.transition = "300ms"
  document.getElementById("screen").style.display = "block";
});
feedbackBtn.addEventListener("click", () => {
  document.getElementById("modal-feedback").style.right = "0px"
  document.getElementById("modal-feedback").style.transition = "300ms"
  document.getElementById("screen").style.display = "block";
});
feedbackBtnClose.addEventListener("click", () => {
  document.getElementById("modal-feedback").style.right = "-600px"
  document.getElementById("modal-feedback").style.transition = "300ms"
  document.getElementById("screen").style.display = "none";
});


// Показать/Скрывать полный текс about
let showFullText = document.querySelector(".about__full-text-btn");
let hiddenText = document.querySelector(".about__text-full");
let textContainer = document.querySelector(".about__text");

showFullText.addEventListener("click", () => {
  showFullText.classList.toggle("show-text");
  textContainer.classList.toggle("about__text-show");
  if (showFullText.classList.contains("show-text")) {
    document.getElementById("full-text").style.display = "block";
    showFullText.textContent = "Скрыть текст";
  } else {
    document.getElementById("full-text").style.display = "none";
    showFullText.textContent = "Читать далее";
  }
});

// Показать и скрывать брендов
// let toggleBtnServices = document.querySelector(".services__btn");
// let servicesGroup = document.querySelector(".services__group");
//
// toggleBtnServices.addEventListener("click", () => {
//   toggleBtnServices.classList.toggle("services__btn--show");
//
//   if (toggleBtnServices.classList.contains("services__btn--show")) {
//     toggleBtnServices.textContent = "Скрыть";
//     servicesGroup.classList.add("services__group--full");
//   } else {
//     toggleBtnServices.textContent = "Показать все";
//     servicesGroup.classList.remove("services__group--full");
//   }
// });


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
