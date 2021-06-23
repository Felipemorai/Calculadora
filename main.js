'use strict'

const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operaters = document.querySelectorAll('[id*=operater]')

let newNumber = true;
let operater;
let numberPrevious;

const pendingOperation = () => operater !== undefined;

const calculate = () => {
    if (pendingOperation()){
        const numberActual = parseFloat (display.textContent);
        newNumber = true;
        const resultado = eval (`${numberPrevious}${operater}${numberActual}`);
        updateDisplay(resultado);
    }
}

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
    if (!newNumber) {
        calculate();
        newNumber = true;
        operater = event.target.textContent;
        numberPrevious = parseFloat (display.textContent);
        console.log (operater); 
    }
}

operaters.forEach (operater => operater.addEventListener('click', selectOperater));