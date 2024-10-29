'use strict';

const times = [56, 9, 45, 28, 35];

const suma = times.reduce((acc, number) => acc + number)

const average = suma/times.length;

console.log(average);