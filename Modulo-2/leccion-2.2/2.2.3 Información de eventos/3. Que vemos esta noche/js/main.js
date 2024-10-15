'use strict';

// Listado de películas
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');
const p = document.querySelector('.js-paragraph');

// Cuando hago click en el botón, añade a list todos los <li>
btn.addEventListener("click", () => {
  console.log("Hago click");
  list.innerHTML = `<li class="movie-1">${inception}</li>
    <li class="movie-2">${theButterFlyEffect}</li>
    <li class="movie-3">${eternalSunshineOfTheSM}</li>
    <li class="movie-4">${blueVelvet}</li>
    <li class="movie-5">${split}</li>`;

/*
Demasiado código...
  const movie1 = document.querySelector('.movie-1');
  const movie2 = document.querySelector('.movie-2');
  const movie3 = document.querySelector('.movie-3');
  const movie4 = document.querySelector('.movie-4');
  const movie5 = document.querySelector('.movie-5');

  // Cuando hago click en cada li, añade el párrafo
  movie1.addEventListener("click", (event) => {
    console.log("Hago click en ", event.currentTarget.innerHTML);
    p.innerHTML = `Has seleccionado la película ${event.currentTarget.innerHTML}`;
  });
  movie2.addEventListener("click", (event) => {
    console.log("Hago click en " + event.currentTarget.innerHTML);
    p.innerHTML = `Has seleccionado la película ${event.currentTarget.innerHTML}`;
  });
  movie3.addEventListener("click", (event) => {
    console.log("Hago click en ", event.currentTarget.innerHTML);
    p.innerHTML = `Has seleccionado la película ${event.currentTarget.innerHTML}`;
  });
  movie4.addEventListener("click", (event) => {
    console.log("Hago click en ", event.currentTarget.innerHTML);
    p.innerHTML = `Has seleccionado la película ${event.currentTarget.innerHTML}`;
  });
  movie5.addEventListener("click", (event) => {
    console.log("Hago click en ", event.currentTarget.innerHTML);
    p.innerHTML = `Has seleccionado la película ${event.currentTarget.innerHTML}`;
  });
*/
});

list.addEventListener("click", (event) => {
  console.log(event.currentTarget); // el elemento que estoy escuchando, es decir, <ul>
  console.log(event.target); // el elemento en sí en el que hago click, es decir, cada uno de los <li>

  const nameFilm = event.target.innerHTML;
  p.innerHTML = `Has seleccionado la película ${nameFilm}`; 
});

