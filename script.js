const burgerButton = document.querySelector(".burger-button");
const menu = document.querySelector(".menu");

const ipad = window.matchMedia("screen and (max-width: 767px)");
ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

const hideShow = function () {
  menu.classList.toggle("is-active");
};
