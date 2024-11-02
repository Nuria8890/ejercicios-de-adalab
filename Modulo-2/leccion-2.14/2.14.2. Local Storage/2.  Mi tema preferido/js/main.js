"use strict";
/* Cuando la usuaria seleccione uno u otro input
    - aplicaremos la clase correspondiente al main
    - guardar esa selección en localStorage
  
  Cuando la página se recargue
    - buscar en localSotage la selección
    - aplicarla al main
*/

const formulario = document.querySelector(".js-form");
const paginaCompleta = document.querySelector(".js-main");

const changeTheme = (event) => {
  if (event.target.value === "claro") {
    paginaCompleta.classList.add("fondoClaro");
    paginaCompleta.classList.remove("fondoOscuro");
  } else {
    paginaCompleta.classList.remove("fondoClaro");
    paginaCompleta.classList.add("fondoOscuro");
  }
};

const handleChange = (event) => {
  changeTheme(event);
};

formulario.addEventListener("change", handleChange);
