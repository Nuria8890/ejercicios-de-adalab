'use strict';

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "https://dev.adalab.es/gato-siames.webp";
// Si userAvatar = "", se visualizará el avatar por defecto

const imgUserAvatar = document.querySelector ('img');

imgUserAvatar.setAttribute("src", userAvatar || DEFAULT_AVATAR);    