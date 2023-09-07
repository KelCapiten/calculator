const buttonArea = document.querySelector(".buttonArea");
const topDisplay = document.querySelector(".history");
const midDisplay = document.querySelector(".mid");
const bottomDisplay = document.querySelector(".result");
const newLine = document.createElement("br");

bottomDisplay.value = "0";
midDisplay.value = "";
topDisplay.value = "";
let operator = "";
let firstNum = "";
let secondNum = "";
let result = 0;

buttonArea.addEventListener('click', button => {

    if (button.target.nodeName == "BUTTON") {

        if (button.target.innerText == "=") {
            if (firstNum && secondNum) {
                evaluate(firstNum, secondNum);
                return;
            } else {
                if (parseInt(bottomDisplay.value)) {
                    firstNum = parseInt(bottomDisplay.value);
                    topDisplay.value = bottomDisplay.value;
                    return;
                } else {
                    if (firstNum && !secondNum) {
                        topDisplay.value = firstNum;
                        return;
                    } else {
                        return;
                    }                        
                }
            }
        } else {

            if (button.target.innerText == "c") {
                bottomDisplay.value = "0";
                midDisplay.value = "";
                topDisplay.value = "";
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
                firstNum = parseInt(bottomDisplay.value);
                operator = button.target.innerText;
                midDisplay.value = bottomDisplay.value + operator;
                bottomDisplay.value = "0";
                topDisplay.value = firstNum;
                return;
            }

            if (bottomDisplay.value == "0") {
                bottomDisplay.value = button.target.innerText;
            } else {
                bottomDisplay.value += button.target.innerText;
            }
        }
    }
});

function clear(){
    firstNum = NaN;
    secondNum = NaN;
    mid.value = "";
    resultField.value = "0";
}

function evaluate(a, b) {
    switch (operator) {
        case "+":
            result = a + b;
            topDisplay.value = result;
            break;

        case "-":
            result = a - b;
            topDisplay.value = result;
            break;

        case "/":
            result = a / b;
            topDisplay.value = result;
            break;
    
        case "*":
            result = a * b;
            topDisplay.value = result;
            break;

        default:
            break;
    }
}