"use strict";

const paragraph = document.querySelector(".js-paragraph");

const inputName = document.querySelector(".js-inputName");

const inputLastName = document.querySelector(".js-inputLastName");

const form = document.querySelector(".js-form");

const collectValues = () => {
  const nombre = inputName.value;
  const apellido = inputLastName.value;

  const valores = {
    nombre: nombre,
    apellido: apellido,
  };

  return valores;
};

const paintValues = (name, lastName) => {
  paragraph.innerHTML = `El nombre de la usuaria es ${name} y el apellido es ${lastName}`;
};

const saveInLocalStorage = (datos) => {
  const datosStringifeados = JSON.stringify(datos);
  localStorage.setItem("nombreyapellido", datosStringifeados);
};

const handleKeyUp = () => {
  // Recojo los valores de los inputs
  const valoresRecogidos = collectValues();
  const nombre = valoresRecogidos.nombre;
  const apellido = valoresRecogidos.apellido;

  // Pinto los valores de los inputs en el párrafo
  paintValues(nombre, apellido);

  // Guardo los valores en localStorage
  saveInLocalStorage(valoresRecogidos);
};

form.addEventListener("keyup", handleKeyUp);

const datosSacados = localStorage.getItem("nombreyapellido");

const datosLocalStorage = JSON.parse(datosSacados);
console.log(datosLocalStorage);

if (datosLocalStorage !== null) {
  paragraph.innerHTML = `El nombre de la usuaria es ${datosLocalStorage.nombre} y el apellido es ${datosLocalStorage.apellido}`;

  inputName.value = datosLocalStorage.nombre;
  inputLastName.value = datosLocalStorage.apellido;
} else {
  paragraph.innerHTML = "Escribe un nombre y apellido";
}
