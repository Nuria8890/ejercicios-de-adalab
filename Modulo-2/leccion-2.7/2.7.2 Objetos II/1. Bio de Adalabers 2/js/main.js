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

adalaber1.showBio = function()  {
  message.innerHTML = `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
}

adalaber2.showBio = function()  {
  message.innerHTML = `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
}

adalaber1.showBio();
adalaber2.showBio();