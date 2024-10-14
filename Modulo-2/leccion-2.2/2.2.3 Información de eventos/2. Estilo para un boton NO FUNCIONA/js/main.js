'use strict';

// Con una función para cada botón, funciona:

const btn1 = document.querySelector('.btn-1');

const btn2 = document.querySelector('.btn-2');

btn1.addEventListener("click", () => {
  btn1.classList.toggle('btn-click');
});

btn2.addEventListener("click", () => {
  btn2.classList.toggle('btn-click');
});


// Con una función para los dos botones, NO funciona:

// const btn = document.querySelector('.btn');

// btn.addEventListener("click", (event) => {
//   console.log('hago click');

//   const btnClick = event.currentTarget;
//   btnClick.classList.toggle('btn-click');
// })



// CÉSAR: Así sí funciona.
// const btn = document.querySelectorAll('.btn');
// console.log(btn)

// btn.forEach(function (item) {
//   item.addEventListener("click", (event) => {
//     console.log('hago click');
  
//     const btnClick = event.currentTarget;
//     btnClick.classList.toggle('btn-click');
//   })
// });

