"use strict";

const paragraph = document.querySelector(".js-paragraph");

const inputName = document.querySelector(".js-inputName");

const inputLastName = document.querySelector(".js-inputLastName");

const form = document.querySelector(".js-form");

const handleKeyUp = () => {
  // Recojo los valores de los inputs
  const nombre = inputName.value;
  // console.log("nombre es:", nombre);

  const apellido = inputLastName.value;
  // console.log("apellido es:", apellido);

  // Pinto los valores de los inputs en el párrafo
  paragraph.innerHTML = `El nombre de la usuaria es ${nombre} y el apellido es ${apellido}`;

  // Guardo los valores en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);

  return { nombre, apellido };
};

form.addEventListener("keyup", handleKeyUp);

if (
  localStorage.getItem("nombre") !== null &&
  localStorage.getItem("apellido") !== null
) {
  const nombre = localStorage.getItem("nombre");
  const apellido = localStorage.getItem("apellido");

  paragraph.innerHTML = `El nombre de la usuaria es ${nombre} y el apellido es ${apellido}`;

  inputName.value = nombre;
  inputLastName.value = apellido;
}
