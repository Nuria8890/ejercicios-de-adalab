'use strict';

const user = {};

const job = 'developer';

user.firstName = 'Nuria';
user.lastName = 'Campo';
user.age = 34;
user.job = job;

console.log(user);

function changeName(newName){
  user.firstName = newName;
}
changeName('Paco');

function increaseAge() {
  user.age += 1;
}
increaseAge();

console.log(user);