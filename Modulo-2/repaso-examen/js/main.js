"use strict";
const section = document.querySelector(".js-section");

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
