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

const changeTheme = (theme) => {
  if (theme === "claro") {
    paginaCompleta.classList.add("fondoClaro");
    paginaCompleta.classList.remove("fondoOscuro");
  } else if (theme === "oscuro") {
    paginaCompleta.classList.remove("fondoClaro");
    paginaCompleta.classList.add("fondoOscuro");
  }
};

const saveTheme = (theme) => localStorage.setItem("tema", theme);

const handleChange = (event) => {
  const selectedTheme = event.target.value;

  changeTheme(selectedTheme);
  saveTheme(selectedTheme);
};

formulario.addEventListener("change", handleChange);

const getTheme = localStorage.getItem("tema");

changeTheme(getTheme);
