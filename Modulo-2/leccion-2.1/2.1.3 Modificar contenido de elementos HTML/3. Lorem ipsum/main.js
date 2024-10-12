'use strict';

const divHtml = document.querySelector('.div');

const h1 = '<h1>Lorem ipsum</h1>'

const img = '<img src="http://via.placeholder.com/350x150" alt="es un cuadrado gris de 350x150">'

const p = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'

divHtml.innerHTML = h1 + img + p;
