"use strict";

const id = document.querySelector("#id");
const name = document.querySelector('#name');
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector('#confirm-psword');
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if(!id.value) {
    return alert("input your ID");
  }

  if (psword.value !== confirmPsword.value) {
    return alert("Not correct password!");
  }

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("Register ERROR!!");
    });
}