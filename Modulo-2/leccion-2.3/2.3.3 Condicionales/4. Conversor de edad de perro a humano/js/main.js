'use strict';

const dogAge = 8;
let humanAge;

if (dogAge === 1) {
  humanAge = 15;
} else if (dogAge === 2) {
  humanAge = 9;
} else if (dogAge >= 3) {
  humanAge = 5*dogAge;
};
console.log('La edad humana de tu perro es ', humanAge, ' años')
