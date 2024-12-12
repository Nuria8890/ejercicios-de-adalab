"use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");

    // create body params
    const bodyParams = {
      userName: inputName.value,
      userEmail: inputEmail.value,
    };

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParams),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

// get users data
const filterByName = document.querySelector(".js-input-filterByName");

document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  const bodyParams = {
    filterByName: filterByName.value,
  };
  fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(bodyParams),
    headers: {
      "content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Server response:", responseData);
      printJson(".js-get-users-result", responseData);
    });
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
