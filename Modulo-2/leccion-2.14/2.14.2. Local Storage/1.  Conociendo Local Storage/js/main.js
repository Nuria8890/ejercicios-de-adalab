"use strict";

const paragraph = document.querySelector(".js-paragraph");

const inputName = document.querySelector(".js-inputName");

const inputLastName = document.querySelector(".js-inputLastName");

const form = document.querySelector(".js-form");

const handleKeyUp = () => {
  // Recojo los valores de los inputs
  const nombre = inputName.value;
  const apellido = inputLastName.value;

  // Pinto los valores de los inputs en el párrafo
  paragraph.innerHTML = `El nombre de la usuaria es ${nombre} y el apellido es ${apellido}`;

  // Guardo los valores en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);

  // return { nombre, apellido };
};

form.addEventListener("keyup", handleKeyUp);

const nombreGuardado = localStorage.getItem("nombre");
const apellidoGuardado = localStorage.getItem("apellido");

if (nombreGuardado !== null && apellidoGuardado !== null) {
  paragraph.innerHTML = `El nombre de la usuaria es ${nombreGuardado} y el apellido es ${apellidoGuardado}`;

  inputName.value = nombreGuardado;
  inputLastName.value = apellidoGuardado;
}
