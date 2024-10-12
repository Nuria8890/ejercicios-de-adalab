'use strict';

const btn = document.querySelector('.btn');

btn.addEventListener("click", () => {
  console.log("Hago click");
  btn.classList.toggle('btn-guay');
});

btn.addEventListener("mouseout", () => {
  console.log("salgo");
  btn.classList.toggle('btn-out');
  });