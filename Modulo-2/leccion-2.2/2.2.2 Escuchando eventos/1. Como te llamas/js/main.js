'use strict';

const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const span = document.querySelector('.span');

button.addEventListener("click", () => {
  span.innerHTML = span.innerHTML + ' Hola ' + input.value;
});