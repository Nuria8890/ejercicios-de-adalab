'use strict';

const isBorderBox = true;

const widthBox = 20;

const paddingBox = 5;

const borderSize = 2;

const calculator = (a, b, c, d) => {
  if (a) {
    const widthContainer = b + c;
    const widthTotal = widthContainer + d;

    return `El ancho del contenido es: ${widthContainer}px y el ancho total de la caja es: ${widthTotal}px;`
  } else {
    console.log('Border Box is false');
  }
}


const result = calculator(isBorderBox, widthBox, paddingBox, borderSize);
console.log(result);