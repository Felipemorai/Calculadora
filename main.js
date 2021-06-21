'use strict'

const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');

const insertNumber = (event) => display.textContent = event.target.textContent;

numbers.forEach (number =>
    number.addEventListener('click',insertNumber)
);