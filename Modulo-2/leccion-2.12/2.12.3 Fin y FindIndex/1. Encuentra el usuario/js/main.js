'use strict';

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

// Ejercicio a)

const searchUserIncidence = users.find((user) => user.pin === 5232);
console.log(searchUserIncidence);

// Ejercicio b)

const searchUserIndex = users.findIndex((user) => user.pin === 5232);
console.log(searchUserIndex);

users.splice(searchUserIndex, 1);
console.log(users);