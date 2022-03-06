"use strict";
const input = document.querySelector(".input");
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let word = [];
let spaces;
document.querySelector(".start").addEventListener("click", function (e) {
  e.preventDefault();
  const num = Math.trunc(Math.random() * 5) + 3;
  word = [];
  for (let i = 0; i <= num; i++) {
    const num2 = Math.trunc(Math.random() * 26);
    word.push(letters[num2]);
  }
  document.querySelector(".txt").textContent = "GUESS WORD";
  console.log(word);
  ranWord();
});

function ranWord() {
  document.querySelector(".div").innerHTML = "";
  word.forEach((el) => {
    const markup = `<div class="word">${el}</div>`;
    document.querySelector(".div").insertAdjacentHTML("beforeend", markup);
  });
  spaces = Array.from(document.querySelectorAll(".word"));
  spaces.forEach((el) => {
    el.classList.add(`${el.textContent}`);
    el.textContent = "";
  });
}

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  if (word.some((el) => el === input.value)) {
    spaces
      .filter((el) => el.classList.contains(`${input.value}`))
      .forEach((el) => (el.textContent = `${input.value}`));
  } else {
    Array.from(document.querySelectorAll(".try"))
      .find((el) => el.classList.contains("try"))
      .classList.add("wrong");
    Array.from(document.querySelectorAll(".try")).forEach((el) => {
      if (el.classList.contains("wrong")) {
        el.classList.remove("try");
      }
    });
  }
  input.value = "";
  gameOver();
  gameWin();
});

function gameOver() {
  if (Array.from(document.querySelectorAll(".wrong")).length === 5) {
    document.querySelector(".txt").textContent = "GAME OVER";
    word = [];
    Array.from(document.querySelectorAll(".wrong")).forEach((el) => {
      el.classList.remove("wrong");
      el.classList.add("try");
    });
  }
}

function gameWin() {
  if (spaces.every((el) => el.textContent != "")) {
    document.querySelector(".txt").textContent = "WIN";
  }
}
