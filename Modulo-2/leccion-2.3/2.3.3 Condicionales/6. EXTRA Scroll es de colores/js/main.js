'use strict';

const container = document.querySelector('.js-container')

window.addEventListener('scroll', () => {

  console.log(window.scrollY);

if (window.scrollY <= 250) {
  container.classList.remove('scrollMax250')
  container.classList.add('scrollMin250');
} else if (window.scrollY >= 250) {
  container.classList.remove('scrollMin250')
  container.classList.add('scrollMax250');
}
})
