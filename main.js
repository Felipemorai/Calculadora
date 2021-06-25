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

const activateEqual = () => {
    calculate();
    operater = undefined;
}

document.getElementById('equal').addEventListener('click', activateEqual);

const cleanDisplay = () => display.textContent = ''; 

document.getElementById('cleanDisplay').addEventListener('click', cleanDisplay);

const cleanCalculate = () => {
    cleanDisplay();
    operater = undefined;
    newNumber = true;
    numberPrevious = undefined; 
}

document.getElementById('cleanCalculate').addEventListener('click', cleanCalculate);

const removeLastNumber = () => display.textContent = display.textContent.slice(0, -1);

document.getElementById('backspace').addEventListener('click', removeLastNumber);

const invertSignal = () => {
    newNumber = true; 
    updateDisplay (display.textContent * -1);
}

document.getElementById('invert').addEventListener('click', invertSignal);

const existDecimal = () => display.textContent.indexOf(',') !== -1;

const existValue = () => display.textContent.length > 0; 

const insertDecimal = () => {
    if (!existDecimal()) {
        if (existValue()) {
            updateDisplay(',');
        }
        else {
            updateDisplay('0,');
        }
    }
}

document.getElementById('decimal').addEventListener('click', insertDecimal);