'use strict';

const button = document.querySelector('.js-button');
const body = document.querySelector('.js-body');

const red = 'red';
const blue = 'blue';
const green = 'green';
const pink = 'pink';
const purple = 'purple';

function backgroundRandom () {
  const numberRandom = Math.round(Math.random() * 4);
  console.log(numberRandom);
  let colorElegido;

  if (numberRandom === 0) {
    colorElegido = red;
  } else if (numberRandom === 1) {
    colorElegido = blue;
  } else if (numberRandom === 2) {
    colorElegido = green;
  } else if (numberRandom === 3) {
    colorElegido = pink;
  } else if (numberRandom === 4) {
    colorElegido = purple;
  }

  body.style.backgroundColor = colorElegido;
}

button.addEventListener('click', backgroundRandom);

