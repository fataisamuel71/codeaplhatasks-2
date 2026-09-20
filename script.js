const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear")
const decimalButton = document.querySelector(".decimal")
const specialOperatorButtons = document.querySelectorAll(".special-operator")
let firstNumber = "";
let operator = "";
let secondNumber = "";
let justCalculated = false;


numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (justCalculated) {
            display.textContent = button.textContent;
            justCalculated = false;
            return;}

        if (operator === "xʸ" && display.textContent.includes("xʸ")) {
            display.textContent += button.textContent;
            return; 
        }

        if (display.textContent.trim() === "0") {
            display.textContent = button.textContent;
        } 
        else {
            display.textContent += button.textContent;
        }
    });
});

operatorButtons.forEach(function(button) {

    button.addEventListener("click", function() { 
        firstNumber = display.textContent;
        operator = button.textContent;

        if (operator === "xʸ") {
            display.textContent += " xʸ ";
        }
        else 
            {display.textContent = "0";}
    });
});

equalsButton.addEventListener("click", function() {
    if (display.textContent.includes("xʸ")) {
    secondNumber = display.textContent.split("xʸ")[1];}

    else {secondNumber = display.textContent;}

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);
    let result;

    if (operator === "÷" && num2 === 0) {
        display.textContent = "Error";
        return;
    }

    if (display.textContent.startsWith("√")) {
        const number = Number(display.textContent.slice(1));
        display.textContent = Math.sqrt(number);
        return;}

    if (display.textContent.endsWith("²")) {
        const number = display.textContent.slice(0, -1);
        display.textContent = Math.pow(number, 2)
        return;
    }

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "x":
            result = num1 * num2;
            break;

        case "÷":
            result = num1 / num2;
            break;

        case "xʸ":
        result = Math.pow(num1, num2);
        break;
    }
    if (String(result).length > 10) {
    display.textContent = result.toExponential(6);
    }
    else {display.textContent = result;}
    justCalculated = true;

    });

clearButton.addEventListener("click", function() {
    display.textContent = "0";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    });

decimalButton.addEventListener("click", function() {
    if (!display.textContent.includes(".")) {
        display.textContent += "."
    }
    });

document.addEventListener("keydown", function(event) {
if (event.key >= "0" && event.key <= "9") {
    display.textContent += event.key;
    }
    });

specialOperatorButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        const specialOperator = button.textContent;
        if (specialOperator === "√") {display.textContent = "√";}

        if (specialOperator === "x²") {display.textContent += "²";}
    })
    })


