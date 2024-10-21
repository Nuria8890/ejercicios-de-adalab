'use strict';

const message = document.querySelector('.js-message');

const adalaber1 = {
  name: 'Susana',
  age: 34,
  profession: 'periodista',
  // run() {
  //   return 'Estoy corriendo'
  // },
  // runAMarathon (distance) {
  //   console.log(`${adalaber1.run()} un matarón de ${distance} kilometros`) 
  // }
};


message.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.`;


adalaber1.run = () => {return `Estoy corriendo`};

adalaber1.runAMarathon = (distance) => {
  console.log(`${adalaber1.run()} un matarón de ${distance} kilometros`)
}
adalaber1.runAMarathon(50);