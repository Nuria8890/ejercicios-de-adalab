"use strict";

const counter = document.querySelector(".js-counter");

let acc = 0;

const incrementCounter = () => {
  acc += 2;
  counter.innerHTML = acc;

  if (acc >= 10) {
    clearInterval(intervalIdCounter);
  }
};

const intervalIdCounter = setInterval(incrementCounter, 2000);
