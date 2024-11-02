"use strict";

/* Cuando la usuaria haga click en el botón
    - recojo el valor del input
    - localizo en la API el valor del input
    - pintar la respuesta en la lista
*/

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
const ul = document.querySelector(".js-list");

// const searchOnServer = () => {
//   fetch("https://swapi.py4e.com/api/people/").then((response) => {
//     console.log("response.json() es:", response.json());
//     return response.json();
//   });
// };

// const getData = () => {
//   const promises = [];
//   for (let i = 0; i < promises.length; i++) {
//     promises.push(searchOnServer());
//   }
//   console.log("promises es:", promises);
//   Promise.all(promises).then((responses) => {
//     for (let i = 0; i < responses.length; i++) {
//       const nameCharacter = input.value;
//       //     ul.innerHTML = `
//       // <li>Nombre:${} Género:${}</li>
//       // `
//     }
//   });
// };

const handleClick = (event) => {
  event.preventDefault();
  console.log("click");
  datosLukeSkywalker();
  // getData();
};

button.addEventListener("click", handleClick);

const datosLukeSkywalker = () => {
  fetch("https://swapi.py4e.com/api/people/1/")
    .then((response) => {
      console.log("response es:", response);
      console.log("response.json() es:", response.json());
      // return response.json();
      return response;
    })
    .then((data) => {
      console.log("data es:", data);
      ul.innerHTML = `
    <li>${data.url}</li>
    `;
    });
};
