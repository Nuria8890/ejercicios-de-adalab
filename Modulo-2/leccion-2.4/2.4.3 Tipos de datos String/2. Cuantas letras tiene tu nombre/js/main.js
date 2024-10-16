'use strict';

const myName = 'Leticia Fernández Sánchez';

console.log('La longitud del nombre,', myName, ' incluyendo los espacios es ', myName.length);

console.log('La longitud del nombre,', myName, ' sin incluir los espacios es ', myName.replace(/ /g, '').length);