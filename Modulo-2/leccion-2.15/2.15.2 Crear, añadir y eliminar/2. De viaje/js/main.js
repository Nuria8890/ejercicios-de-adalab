"use strict";

const select = document.querySelector(".js-select");
const images = document.querySelector(".js-images");

const cities = {
  madrid: [
    "https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-madrid.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Palacio_de_Comunicaciones_-_07.jpg/640px-Palacio_de_Comunicaciones_-_07.jpg",
    "https://www.civitatis.com/f/pseo/espana/madrid/puerta-alcala-madrid-1200.jpg",
  ],
  paris: [
    "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_90:120,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/paris/3%20giorni%20a%20Parigi%20Tour%20Eiffel?_a=BAVARSDW0",
    "https://viajes.nationalgeographic.com.es/medio/2024/02/07/istock_8b9fa433_1324189687_240207013234_1200x799.jpg",
    "https://a.eu.mktgcdn.com/f/100004519/N2BB4ohwclor2uLoZ7XMHgJmxOZaMOokMdQqqXQAq3s.jpg",
  ],
  nuevaYork: [
    "https://nyc.eu/wp-content/uploads/2015/07/New_York_City-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
    "https://media.revistaad.es/photos/646c8cd087c0381e4abf96f2/4:3/w_2668,h_2001,c_limit/GettyImages-1347979016%20(1).jpg",
  ],
};

let items = [];

const handleChange = (event) => {
  for (const item of items) {
    item.remove();
  }
  items = [];

  const city = event.target.value;
  for (const image of cities[city]) {
    const newItem = document.createElement("img");
    newItem.src = image;
    newItem.alt = `Imagen de ${city}`;
    images.appendChild(newItem);
    items.push(newItem);
  }
};

select.addEventListener("change", handleChange);
