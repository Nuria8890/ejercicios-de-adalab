'use strict';

let array = [];

const get100Numbers = () => {
  for (let index = 1; index <= 100; index++) {
    array.push(index);
  }
};
get100Numbers();
console.log('Función get100Numbers', array);


const getReversed100Numbers = (parameter) => {
  array.reverse();
}
getReversed100Numbers(get100Numbers());
console.log('función getReversed100Numbers', array);