"use strict";

const paragraph = document.querySelector(".js-paragraph");

const inputName = document.querySelector(".js-inputName");

const inputLastName = document.querySelector(".js-inputLastName");

let form = document.querySelector(".js-form");

// Función que recoge el valor del input nombre
const collectsValueName = () => {
  const nombre = inputName.value;
  console.log("collectsValueName:", nombre);

  return nombre;
};

// Función que recoge el valor del input apellido
const collectsValueLastName = () => {
  const apellido = inputLastName.value;
  console.log("collectsValueLastName:", apellido);

  return apellido;
};

// Función que pinta en el párrafo los valores de los inputs
const paintValue = (valorNombre, valorApellido) => {
  paragraph.innerHTML = `El nombre de la usuaria es ${valorNombre.nombre} y el apellido es ${valoresInput.apellido}`;
};

console.log("values.name es:", valorNombre.name);
console.log("values.apellido es:", values.apellido);

// Función que guarda los valores de los inputs en localStorage
const saveLocalStorage = (valoresInput) => {
  localStorage.setItem("name", valoresInput.nombre);
  localStorage.setItem("lastName", valoresInput.apellido);
};

const handleKeyUp = () => {
  const nameValue = collectsValueName();
  console.log("nameValue es:", nameValue);

  const lastNameValue = collectsValueLastName();
  console.log("lastNameValue es:", lastNameValue);

  paintValue(nameValue, lastNameValue);

  saveLocalStorage(nameValue, lastNameValue);
};

form.addEventListener("keyup", handleKeyUp);

console.log(
  `En localStorage está guardado este nombre ${localStorage.getItem(
    "name"
  )}, y este apellido ${localStorage.getItem("lastName")}`
);

// if (
//   localStorage.getItem("name") !== undefined &&
//   localStorage.getItem("lastName") !== undefined
// ) {
//   paragraph.innerHTML = `El nombre de la usuaria es ${values.nombre} y el apellido es ${values.apellido}`;
// } else if (
//   localStorage.getItem("name") === null ||
//   localStorage.getItem("lastName") === null
// ) {
//   paragraph.innerHTML = "El nombre y/o apellido de la usuaria no está definido";
// }
