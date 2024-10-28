'use strict';

let array = [];

const get100Numbers = () => {
  for (let index = 1; index <= 100; index++) {
    array.push(index);
  }
};
get100Numbers();
console.log(array);