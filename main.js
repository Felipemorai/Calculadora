'use strict'

const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operaters = document.querySelectorAll('[id*=operater]')

let newNumber = true;

const updateDisplay = (text) => {
    if (newNumber){
        display.textContent = text;
    }
    else{
        display.textContent += text;
    }
}

const insertNumber = (event) => updateDisplay(event.target.textContent);

numbers.forEach (number =>
    number.addEventListener('click',insertNumber)
);

operaters.forEach (operater => operater.addEventListener('click', selectOperater));