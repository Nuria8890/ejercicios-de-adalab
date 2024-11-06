"use strict";

const section = document.querySelector(".js-section");

// Ejercicio 1: Pintar una paleta pidiendo datos al servidor:
/* 
const renderPallet = (palette) => {
  let content = `<h4>${palette[0].name}</h4> <div class="palette">`;
  for (const color of palette[0].colors) {
    content += ` 
      <div class="palette__color" style="background-color:#${color}"></div>
    `;
  }
  content += `</div>`;
  section.innerHTML += content;
};

fetch(
  "https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palette.json"
)
  .then((response) => response.json())
  .then((data) => {
    const palette = data.palettes;
    renderPallet(palette);
  });
*/

// Ejercicio 2: pintar todas las paletas

const renderPalettes = (palettes) => {
  for (const palette of palettes) {
    const colorArray = palette.colors;

    let content = `<div class="div__palettes"><h4>${palette.name}</h4> <div class="palette js-palette">`;

    for (const color of colorArray) {
      content += ` 
        <div class="palette__color" style="background-color:#${color}"></div>
      `;
    }
    content += `</div></div>`;
    section.innerHTML += content;
  }
};

fetch(
  "https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json"
)
  .then((response) => response.json())
  .then((data) => {
    const palettes = data.palettes;
    renderPalettes(palettes);

    // Ejercicio 3: añadir una clase específica a las paletas favoritas
    const palettesSelected = document.querySelectorAll(".js-palette");
    for (const paletteSelected of palettesSelected) {
      paletteSelected.addEventListener("click", handleFavorite);
    }
  });

// Ejercicio 3: añadir una clase específica a las paletas favoritas
const handleFavorite = (event) => {
  const paletteClicked = event.currentTarget;
  paletteClicked.classList.toggle("palette__favorite");
};
