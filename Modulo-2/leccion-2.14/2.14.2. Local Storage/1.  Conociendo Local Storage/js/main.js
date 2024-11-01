"use strict";

const paragraph = document.querySelector(".js-paragraph");

const inputName = document.querySelector(".js-inputName");

const inputLastName = document.querySelector(".js-inputLastName");

const form = document.querySelector(".js-form");

const collectValues = () => {
  const nombre = inputName.value;
  const apellido = inputLastName.value;

  return { nombre, apellido };
};

const paintValues = (name, lastName) => {
  paragraph.innerHTML = `El nombre de la usuaria es ${name} y el apellido es ${lastName}`;
};

const saveInLocalStorage = (name, lastName) => {
  localStorage.setItem("nombre", name);
  localStorage.setItem("apellido", lastName);
};

const handleKeyUp = () => {
  // Recojo los valores de los inputs
  const valores = collectValues();
  const nombre = valores.nombre;
  const apellido = valores.apellido;

  // Pinto los valores de los inputs en el párrafo
  paintValues(nombre, apellido);

  // Guardo los valores en localStorage
  saveInLocalStorage(nombre, apellido);
};

form.addEventListener("keyup", handleKeyUp);

const datosLocalStorage = {
  nombre: localStorage.getItem("nombre"),
  apellido: localStorage.getItem("apellido"),
};

if (datosLocalStorage.nombre !== null && datosLocalStorage.apellido !== null) {
  paragraph.innerHTML = `El nombre de la usuaria es ${datosLocalStorage.nombre} y el apellido es ${datosLocalStorage.apellido}`;

  inputName.value = datosLocalStorage.nombre;
  inputLastName.value = datosLocalStorage.apellido;
}
