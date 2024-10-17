'use strict';

// Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().

function multiplica(a, b) {
  return console.log(`La multiplicación de ${a}*${b} es`, a*b);
}

const number1 = 2;
const number2 = 4;
const number3 = 5;
const number4 = 8;

multiplica(number1,number2); // 8
multiplica(number3,number4); // 40

// Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

function media(c, d, e, f) {
  const suma = c + d + e + f;
  return console.log(`La media de ${c}, ${d}, ${e} y ${f} es`, suma / 4);
}

const number5 = 3;
const number6 = 6;
const number7 = 7;
const number8 = 9;

media(number1,number2,number3,number4);
media(number5,number6,number7,number8);

// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar. Ejecútala e imprime el resultado para comprobar que funciona.

function isPar(a) {
  const divide2 = a / 2;
  if (Number.isInteger(divide2)){
    return console.log(`¿El número ${a} es par?`, true);
  } else {
    return console.log(`¿El número ${a} es par?`, false);
  }
}

isPar(number6);
isPar(number8);