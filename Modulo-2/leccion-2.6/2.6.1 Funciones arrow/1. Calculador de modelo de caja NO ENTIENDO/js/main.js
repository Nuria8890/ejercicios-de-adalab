'use strict';

// const isBorderBox = true;

const widthBox = 20;

const paddingBox = 5;

const borderSize = 2;

const calculator = (b, c, d) => {
  // if (a === true) {
    const widthContainer = b + c;
    const widthTotal = widthContainer + d;
  // }

  const result = `El ancho del contenido es: ${widthContainer}px y el ancho total de la caja es: ${widthTotal}px;`
  console.log(result);
}

calculator(widthBox, paddingBox, borderSize);