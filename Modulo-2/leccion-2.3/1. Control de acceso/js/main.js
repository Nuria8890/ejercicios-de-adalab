'use strict';

const userName = document.querySelector('.js-name');
const btn = document.querySelector('.js-btn');
const p = document.querySelector('.js-paragraph');


btn.addEventListener("click", () => {
  if (userName.value === "María" || userName.value === "Luisa") {
    p.innerHTML = `Bienvenida ${userName.value}`;
  } else {
    p.innerHTML = "Lo siento pero el usuario que has introducido no está registrado"
  };

});
