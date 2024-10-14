'use strict';

// Listado de películas
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');

// Cuando hago click en el botón, añade a list todos los <li>
btn.addEventListener("click", () => {
  console.log("Hago click");
  list.innerHTML = `<li class="movie">${inception}</li> <li>${theButterFlyEffect}</li> <li>${eternalSunshineOfTheSM}</li> <li>${blueVelvet}</li> <li>${split}</li>`;
});

const movie = document.querySelector('.movie');
const p = document.querySelector('.js-paragraph');

// Cuando hago click en cada li, añade el párrafo
movie.addEventListener("click", (event) => {
  console.log("Hago click en movie");
  p.innerHTML = `Has seleccionado la película ${event.currentTarget.innerHTML}`;
});
