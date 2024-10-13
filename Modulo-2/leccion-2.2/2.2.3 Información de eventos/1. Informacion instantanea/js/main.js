'use strict';

// FORMA 1 sin utilizar event.currentTarget

// const input = document.querySelector('.input');
// const p = document.querySelector('.paragraph');

// input.addEventListener("keyup", () => {
//   console.log('escribo: ' + input.value);
//   p.innerHTML = input.value;
// })


// FORMA 2 utilizando event.currentTarget

const input = document.querySelector('.input');
const p = document.querySelector('.paragraph');

input.addEventListener("keyup", (event) => {
  console.log('escribo: ' + event.currentTarget.value);
  p.innerHTML = event.currentTarget.value;
});