'use strict';

const message = document.querySelector('.js-message');

const adalaber1 = {
  name: 'Susana',
  age: 34,
  profession: 'periodista'
};

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  profession: 'actriz'
};

message.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}.`