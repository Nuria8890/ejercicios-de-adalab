'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const lostNumbersEven = [];
const lostNumbersMultiple3 = [];

const searchEvenNumber = () => {
  for (let i = 0; i < lostNumbers.length; i++) {
    if(lostNumbers[i] % 2 === 0) {
      lostNumbersEven.push(lostNumbers[i]);
    }
  }
}

const searchMultiple3Number = () => {
  for (let i = 0; i < lostNumbers.length; i++) {
    if(lostNumbers[i] % 3 === 0) {
      lostNumbersMultiple3.push(lostNumbers[i]);
    }
  }
}


const bestLostNumber = () => {
  searchEvenNumber();
  // console.log('Los números pares son:', lostNumbersEven);
  
  searchMultiple3Number();
  // console.log('Los números múltiplos de 3 son:', lostNumbersMultiple3);

  const concatNumbers = lostNumbersEven.concat(lostNumbersMultiple3);
  console.log('Los arrays concatenados son:', concatNumbers);
  
  for (let i = 0; i < concatNumbers.length; i++) {
    console.log('Los números concatenados son: ', concatNumbers[i]);
    
  }
}

bestLostNumber();
