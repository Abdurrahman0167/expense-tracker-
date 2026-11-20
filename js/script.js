"use strict";

const inputName = document.querySelector(".transition-form__name");
const inputSumm = document.querySelector(".transition-form__summ");
const select = document.querySelector(".transition-form__select");
const button = document.querySelector(".transition-form__submit");
const summBox = document.querySelector(".balance");
const historyBox = document.querySelector(".history");
const actualSumm = 0;
const transactionsArr = [];

function renderSumm(actualSumm) {
  let sum = document.createElement("p");
  sum.textContent = actualSumm + "₽";
  summBox.append(sum);
}

renderSumm(actualSumm);

function createTransaction(inputName, inputSumm) {
  let name = inputName.value.trim();
  let amount = Number(inputSumm.value);
  let transaction = {
    name: name,
    summ: amount,
    transactionType: select.value,
  };

  if (transaction.name == "" || transaction.name == 0 && transaction.summ == ''  || transaction.summ == 0) {
    alert("Кажется, вы забыли написать название или сумму");
    return
  }

  transactionsArr.push(transaction);

  inputName.value = ''
  inputSumm.value = ''
}

button.addEventListener("click", () => {
  createTransaction(inputName, inputSumm);
});