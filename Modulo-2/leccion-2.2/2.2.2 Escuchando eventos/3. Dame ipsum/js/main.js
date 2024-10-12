'use strict';

const p = document.querySelector('.paragraph');

p.addEventListener("click", () => {
  p.innerHTML = p.innerHTML + ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque magnam vel vero, quo dolore autem quam suscipit dolores velit illo, perspiciatis neque unde, aut officia? Reprehenderit vel enim dolores?';
});