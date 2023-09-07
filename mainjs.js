const buttonArea = document.querySelector(".buttonArea");
const topDisplay = document.querySelector(".history");
const midDisplay = document.querySelector(".mid");
const bottomDisplay = document.querySelector(".result");
const newLine = document.createElement("br");

bottomDisplay.value = "0";
midDisplay.value = "";
topDisplay.value = "";
const operators = ["+", "-", "*", "/"];
let operator = "+";
let firstNum = 0;
let secondNum = 0;
let result = 0;

buttonArea.addEventListener('click', button => {

    if (button.target.nodeName == "BUTTON") {

        if (button.target.innerText == "=") {
            if (!isNaN(firstNum)) {
                secondNum = parseFloat(bottomDisplay.value);
                evaluate(firstNum, secondNum);
                midDisplay.value += secondNum;
                bottomDisplay.value = firstNum;
                return;
            }
            if (parseFloat(bottomDisplay.value)) {
                firstNum = parseFloat(bottomDisplay.value);
                topDisplay.value = bottomDisplay.value;
                return;
            }
            return;
        }

        if (button.target.innerText == "c") {
            bottomDisplay.value = "0";
            midDisplay.value = "";
            topDisplay.value = "";
            firstNum = 0;
            secondNum = 0;
            return;
        }

        if (button.target.innerText == "<") {
            if (bottomDisplay.value == "0") {
                return
            } else {
                bottomDisplay.value = bottomDisplay.value.slice(0, -1);
                if (bottomDisplay.value == "") {
                    bottomDisplay.value = "0";
                }
                return;
            }
        }
        
        if (button.target.parentNode.className == "operationKeys keys" && !(button.target.innerText == "=")) {
            if (checkForOperator() && operators.includes(button.target.innerText)) {
                midDisplay.value = midDisplay.value.slice(0, -2) + button.target.innerText + " ";
                operator = button.target.innerText;
                return;
            }

            firstNum = parseFloat(bottomDisplay.value);
            operator = button.target.innerText;
            midDisplay.value = " = " + bottomDisplay.value + " " + operator + " ";
            bottomDisplay.value = "0";
            topDisplay.value = firstNum;
            return;
        }
        if (bottomDisplay.value == "0") {
            bottomDisplay.value = button.target.innerText;
        } else {
            if (bottomDisplay.value.includes(".") && button.target.innerText == ".") return;

            bottomDisplay.value += button.target.innerText;
        }

    }
})

function checkForOperator(){
    const stringLength = midDisplay.value.length;
    const operator = midDisplay.value.charAt(stringLength - 2);
    const operators = ["+", "-", "*", "/"];
    if (operators.includes(operator)) {
        return true;
    }
}

function evaluate(a, b) {
    switch (operator) {
        case "+":
            firstNum = a + b;
            topDisplay.value = firstNum;
            break;

        case "-":
            firstNum = a - b;
            topDisplay.value = firstNum;
            break;

        case "/":
            firstNum = a / b;
            topDisplay.value = firstNum;
            break;
    
        case "*":
            firstNum = a * b;
            topDisplay.value = firstNum;
            break;

        default:
            break;
    }
}