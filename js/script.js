"use strict";

const inputName = document.querySelector(".transition-form__name");
const inputSumm = document.querySelector(".transition-form__summ");
const select = document.querySelector(".transition-form__select");
const button = document.querySelector(".transition-form__submit");
const summBox = document.querySelector(".balance");
const historyBox = document.querySelector(".history");
const actualSumm = 0;
const histyryArr = [];
const transactionsArr = [];

function renderSumm(actualSumm) {
  let sum = document.createElement("p");
  sum.textContent = actualSumm + "₽";
  summBox.append(sum);
}

renderSumm(actualSumm);

