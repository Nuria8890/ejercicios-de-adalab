'use strict';

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');

const getUser = ((event) => {
  event.preventDefault();

  const nameSearch = input.value;

  fetch(`https://api.github.com/users/${nameSearch}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const name = document.querySelector('.js-name');
    const repos = document.querySelector('.js-repos');
    const img = document.querySelector('.js-img'); 
    
    name.innerHTML = data.login;
    repos.innerHTML = data.public_repos;
    img.src = data.avatar_url;
    img.alt = data.login;
  })
})

button.addEventListener('click', getUser);