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

const getTheme = localStorage.getItem("tema");

if (getTheme === "claro") {
  paginaCompleta.classList.add("fondoClaro");
  paginaCompleta.classList.remove("fondoOscuro");
} else if (getTheme === "oscuro") {
  paginaCompleta.classList.remove("fondoClaro");
  paginaCompleta.classList.add("fondoOscuro");
}

const changeTheme = (event) => {
  if (event.target.value === "claro") {
    paginaCompleta.classList.add("fondoClaro");
    paginaCompleta.classList.remove("fondoOscuro");
  } else if (event.target.value === "oscuro") {
    paginaCompleta.classList.remove("fondoClaro");
    paginaCompleta.classList.add("fondoOscuro");
  }

  return event.target.value;
};

const saveTheme = (selectedTheme) =>
  localStorage.setItem("tema", selectedTheme);

const handleChange = (event) => {
  const selectedTheme = changeTheme(event);
  saveTheme(selectedTheme);
};

formulario.addEventListener("change", handleChange);
