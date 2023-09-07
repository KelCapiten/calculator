const buttonArea = document.querySelector(".buttonArea");
const history = document.querySelector(".history");
const mid = document.querySelector(".mid");
const resultField = document.querySelector(".result");
const newLine = document.createElement("br");

resultField.value = "0";
mid.value = "";
history.value = "";
let operator = "";
let firstNum = NaN;
let secondNum = NaN;
let result = 0;

buttonArea.addEventListener('click', event => {

    if (event.target.nodeName == "BUTTON") {
        if (event.target.innerText == "c") {
            clear();
        } else {
            if (event.target.innerText == "=") {
                
                secondNum = parseInt(resultField.value);
                evaluate(firstNum, secondNum);
                mid.value = firstNum + operator + secondNum + " = ";
                resultField.value = result;
                history.value = mid.value  + `${result}`;
                clear();
    
            } else if (resultField.value == "0") {
    
                resultField.value = event.target.innerText;
    
            } else {
    
                if (isNaN(parseInt(event.target.innerText)) && event.target.innerText !== "=" && mid.value == "") {
    
                    operator = event.target.innerText;
                    firstNum = parseInt(resultField.value);
                    mid.value = firstNum + event.target.innerText;
                    resultField.value = "0"
    
                } else {
    
                    resultField.value = resultField.value + event.target.innerText;
    
                    if (isNaN(parseInt(event.target.innerText))) {
    
                        secondNum = parseInt(resultField.value);
                        mid.value = mid.value + secondNum + " = "
                        evaluate(firstNum, secondNum);
                        resultField.value = result;
                        history.value = history.value + mid.value  + `${result}`;
                        mid.value = "";
                        resultField.value = "0"
                    }
                }
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
            resultField.value = result;
            break;

        case "-":
            result = a - b;
            resultField.value = result;
            break;

        case "/":
            result = a / b;
            resultField.value = result;
            break;
    
        case "*":
            result = a * b;
            resultField.value = result;
            break;

        default:
            break;
    }
}