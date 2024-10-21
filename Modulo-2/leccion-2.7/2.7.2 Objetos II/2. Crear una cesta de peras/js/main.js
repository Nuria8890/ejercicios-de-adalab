'use strict';

const cestaPeras = {
  maxNumber: 10,
  minNumber: 1,
  actualNumber: 3,
  initialNumber: 6,
  add() {
    return this.actualNumber + 1
  },
  remove() {
    return this.actualNumber - 1
  },
  reset() {
    return this.initialNumber
  }
}

console.log(cestaPeras.add())
console.log(cestaPeras.remove())
console.log(cestaPeras.reset())