'use strict'

const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operaters = document.querySelectorAll('[id*=operater]')

let newNumber = true;
let operater;
let numberPrevious;

const updateDisplay = (text) => {
    if (newNumber){
        display.textContent = text;
        newNumber = false;
    }
    else{
        display.textContent += text;
    }
}

const insertNumber = (event) => updateDisplay(event.target.textContent);

numbers.forEach (number =>
    number.addEventListener('click',insertNumber)
);

const selectOperater = (event) => {
    if (!newNumber){
        newNumber = true;
        operater = event.target.textContent;
        numberPrevious = display.textContent;
        console.log (operater); 
    }
}

operaters.forEach (operater => operater.addEventListener('click', selectOperater));