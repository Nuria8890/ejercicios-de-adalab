'use strict';

const container = document.querySelector('.js-container');
const title = document.querySelector('.js-title');
const message = document.querySelector('.js-message');

if (container.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  message.innerHTML = 'Ha surgido un error';
} else if (container.classList.contains('error')){
  title.innerHTML = 'ERROR';
  message.innerHTML = 'Ha surgido un error';
} else if (container.classList.contains('success')) {
  title.innerHTML = 'CORRECTO';
  message.innerHTML = 'Los datos son correctos';
}