'use strict';

const button = document.querySelector('.js-button');

const getChihuahua = (() => {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const img = document.querySelector('.img');
    img.src = data.message;
    img.alt = 'chihuahua';
  })
})

button.addEventListener('click', getChihuahua);