const burgerButton = document.querySelector(".burger-button");
const menu = document.querySelector(".menu");

const ipad = window.matchMedia("screen and (max-width: 767px)");
ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShowMenu);
  } else {
    burgerButton.removeEventListener("click", hideShowMenu);
  }
}

validation(ipad);

function hideShowMenu() {
  menu.classList.toggle("is-active");
}

/* por cuestiones de hoisting, no puedo llamar a validation(ipad) si la constante hideShowMenu no esta declarada antes */
// const hideShowMenu = function () {
//   menu.classList.toggle("is-active");
// };
