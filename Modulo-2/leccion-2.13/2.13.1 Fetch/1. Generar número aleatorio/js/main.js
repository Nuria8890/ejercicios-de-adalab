'use strict';

const div = document.querySelector('.js-randomNumber');

const button = document.querySelector('.js-getRandomNumber');

function randomNumber() {
  fetch('https://api.rand.fun/number/integer?min=0&max=100')

    .then((response) => {
      return response.json()
    })
    .then((data) => {
      div.innerHTML = data.result;
    })
}

button.addEventListener('click', randomNumber);