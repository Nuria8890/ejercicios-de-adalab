'use strict';

function calculaIVA (a) {
  const IVA = a * 0.21;
  const precioSinIva = a - IVA;

  return console.log(`El precio total es ${a}, el precio sin IVA es ${precioSinIva.toFixed(2)}, y el IVA en sí es ${IVA.toFixed(2)}`)
}

const precio1 = 25;
const precio2 = 36.28;
calculaIVA(precio1);
calculaIVA(precio2);