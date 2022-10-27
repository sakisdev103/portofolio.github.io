const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const button = document.getElementsByTagName(button);


const add = (previousOperandTextElement , currentOperandTextElement) => {
    return (previousOperandTextElement + currentOperandTextElement);
}

const subtract = () => {
    return (previousOperandTextElement - currentOperandTextElement);
}

const multiply = () => {
    return (previousOperandTextElement * currentOperandTextElement);
}

const divide = () => {
    return (previousOperandTextElement / currentOperandTextElement);
}

button.addEventListener('click', clickHandler);

function clickHandler () {
    console.log("button clicked");
}