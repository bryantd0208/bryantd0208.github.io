let currentNum = 0;
let previousNum = 0;
let wasNotOperation = true;
let isDecimal = false;
let numDigits = 0;
executeProgram(isOperation, num, operation)
{
    alert("hi")
    if(isOperation)
    {
        if(operation = 6) {currentNum = add();}
        else if(operation = 7) {currentNum = subtract()}
        else if(operation = 5) {currentNum = multiply()}
        else if(operation = 4) {currentNum = divide()}
        else if(operation = 2) {currentNum = negate()}
        else if(operation = 1) {currentNum = clear()}
        else if(operation = 3) {currentNum = percent()}
        else if(operation = 8) 
        {
            currentNum = decimal();
            isDecimal = true;
        }
    }
    else
    {
        storeValue(num);
        alert(currentNum);
    }
}

function storeValue(num)
{
    if(wasNotOperation){
        numDigits = calcNumDigits();
        if(isDecimal)
        {

        }
        currentNum = (currentNum * 10) + num;
    } else
    {
        previousNum = currentNum;
        currentNum = num;
    }
    alert(currentNum);
}
function add() {return previousNum + currentNum;}
function subtract() {return previousNum - currentNum;}
function multiply() {return previousNum * currentNum;}
function divide() {return previousNum / currentNum;}
function negate() {return -1 * currentNum;}
function percent() {return currentNum/100;}
function clear() {return 0;}
function clear() {parseFloat(currentNum);}
function calcNumDigits()
{
    while(currentNum != 0) 
    {
        numDigits += 1;
        currentNum = parseInt(currentNum / 10);
    }
    return numDigits
}