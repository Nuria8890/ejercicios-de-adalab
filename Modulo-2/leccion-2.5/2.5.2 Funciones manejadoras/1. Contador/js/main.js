'use strict';

const button = document.querySelector('.js-button');
const counter = document.querySelector('.js-counter');


function counterClick (){
  counter.innerHTML = parseInt(counter.innerHTML) + 2;
}

button.addEventListener('click', counterClick);