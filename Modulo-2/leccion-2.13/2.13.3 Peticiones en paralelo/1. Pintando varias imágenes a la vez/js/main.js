'use strict';

const btn = document.querySelector('.js-btn');
const div = document.querySelector('.dogs');

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(createPromise())
  }
  console.log(promises);

  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      
      div.innerHTML += `
        <img class="${img}" src="${responses[i].message}" alt="Dog" />
      `
    }
  });
}

btn.addEventListener('click', getBreedImages);