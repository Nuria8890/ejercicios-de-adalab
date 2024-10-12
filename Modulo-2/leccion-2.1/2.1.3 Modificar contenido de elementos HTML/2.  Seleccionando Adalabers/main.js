'use strict';

const title = document.querySelector('.title');

const selectAdalaber1 = document.querySelector('.adalaber-1');

let selectAdalaber2 = document.querySelector('.adalaber-2');


// Al cambiar selectAdalaber1 por selectAdalaber2 se cambia el nombre

title.innerHTML = title.innerHTML + selectAdalaber2.innerHTML;