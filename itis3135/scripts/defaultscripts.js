document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

function getTodaysDate()
{
    //Date and time
    let today = new Date();
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //Formating text
    let date = "Today is " + today.toLocaleTimeString() + " on " + weekdays[today.getDay()] +
    ", " + today.getDate() + " " + month[today.getMonth()] + ", " + today.getFullYear();
    document.getElementById("todayHeader").innerHTML = date;
}

//Generate response to user
function promptUser()
{
    document.getElementById("response").innerHTML = "The Breathtaking Dalmadoodle inc. welcomes you, " + document.getElementById("fullname").value + 
        "! We're glad you are doing " + document.getElementById("mood").value + "!";
}

//Custom Functions
function generateColor()
{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("colorForm").style.backgroundColor = "#" + randomColor;
    hexValue.innerHTML = "#" + randomColor;

}

//Converts numbers to binary
function numberToBinary()
{
    let n1 = document.getElementById("binaryConversion").value;
    const binaryNum = []
    let newNumber = 0;
    while (n1 != 0){
        binaryNum.push(n1 % 2);
        n1 = parseInt(n1 / 2)
    }
    binaryNum.reverse();
    for (let i = 0; i < binaryNum.length; i++) {
        newNumber *= 10;
        newNumber = binaryNum[i] + newNumber;
    }
    document.getElementById("binaryResponse").innerHTML = newNumber;
}

//Check if number is even or odd
function numberToHexadecimal()
{
    let n1 = document.getElementById("hexadecimalConversion").value;
    const hexNumber = []
    const hexValues = ["a", "b", "c", "d", "e", "f"];
    let newNumber = "";
    while (n1 != 0){
        hexNumber.push(n1 % 16);
        n1 = parseInt(n1 / 16)
    }
    hexNumber.reverse();
    for (let i = 0; i < hexNumber.length; i++) {
        if(hexNumber[i] > 9){
            newNumber += hexValues[hexNumber[i] - 10];
        } else{
            newNumber += hexNumber[i];
        }
    }
    document.getElementById("hexaResponse").innerHTML = newNumber;
}
// Sums two numbers
function sumNumber()
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let sum = parseInt(number1) + parseInt(number2);

    document.getElementById("sumResponse").innerHTML = sum;
}
// Calculates number to provided base and power
function powerOfNumbers()
{
    let base = document.getElementById("baseNumber").value;
    let power = document.getElementById("powerNumber").value;
    let final = Math.pow(base,power);

    document.getElementById("powerResponse").innerHTML = final;
}