"use strict";

/* Cuando la usuaria haga click en el botón
    - recojo el valor del input
    - localizo en la API el valor del input
    - pintar la respuesta en la lista
*/

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
const ul = document.querySelector(".js-list");

const handleClick = (event) => {
  event.preventDefault();

  const name = input.value;

  fetch(`https://swapi.py4e.com/api/people/?search=${name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data es:", data);

      // Cuántas páginas hay
      const pages = Math.ceil(data.count / 10);

      for (let i = 1; i <= pages; i++) {
        fetch(`https://swapi.py4e.com/api/people/?search=${name}&page=${i}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
              ul.innerHTML += `<li>El nombre del personaje es: ${data.results[i].name}, y el género es ${data.results[i].gender}</li>`;
            }
          });
      }
    });
};

button.addEventListener("click", handleClick);

// Pinta a Luke
const datosLukeSkywalker = () => {
  fetch("https://swapi.py4e.com/api/people/1/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data es:", data);
      ul.innerHTML = `
    <li>${data.name}</li>
    `;
    });
};
