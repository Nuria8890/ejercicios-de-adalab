'use strict';

console.log('Ejercicio a)');

let numbers = [2, 4, 6, 8, 10];

let acc = 0;

for (const number of numbers) {
  acc = acc + number;
  console.log('number es:', number);
  console.log('acc es:', acc);
}
acc = acc/numbers.length;
console.log(acc);
console.log((2+4+6+8+10)/5)



console.log('Ejercicio b)');

let acc2 = 0;

numbers[numbers.length] = 15;
console.log(numbers);

for (const number of numbers) {
  acc2 = acc2 + number;
  console.log('number es:', number);
  console.log('acc es:', acc2);
}
acc2 = acc2/numbers.length;
console.log(acc2);
console.log((2+4+6+8+10+15)/6);



console.log('Ejercicio c)');

let numbers2 = [1,15,47,65,3,5,6,7856,3,46,23,6,53,45,2]



function average(array) {
  let acc3 = 0;

  for (const number of array) {
    acc3 = acc3 + number;
  }
  acc3 = acc3/array.length;
  return acc3
}

average(numbers2);


console.log('average(numbers2)', average(numbers2));

console.log((1+15+47+65+3+5+6+7856+3+46+23+6+53+45+2)/15);
