function sumNumbers(a,b){
    return a + b;
}


function subtractNumbers(a,b){
    return a - b;
}

function multiplyNumbers(a,b){
    return a * b;
}


function divideNumbers(a,b){
    return a / b;
}


// function that takes two numbers and an operator(op).

function operate(a,b,op){
    if (op == "sum"){
        return sumNumbers(a,b);
    } else if (op == "subtract"){
        return subtractNumbers(a,b);
    } else if (op == "multiply"){
        return multiplyNumbers(a,b);
    } else if (op == "divideNumbers"){
        return divideNumbers(a,b)
    }

}


// calculation process

let firstCalc = '';

let totalCalc = [];

let totalOperators = [];

const mainScreen = document.getElementById("main-operation");
const topScreen = document.getElementById("top-operation");

//number buttons
const buttonZero = document.getElementById("zero");
const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonFour = document.getElementById("four");
const buttonFive = document.getElementById("five");
const buttonSix = document.getElementById("six");
const buttonSeven = document.getElementById("seven");
const buttonEight = document.getElementById("eight");
const buttonNine = document.getElementById("nine");


//operator buttons

const buttonSum = document.getElementById("sum");
const buttonSubtract = document.getElementById("subtract");
const buttonDivision = document.getElementById("division");
const buttonMultiply = document.getElementById("multiply");


//equals button

const buttonEquals = document.getElementById("equals");


// numbers functions

buttonZero.addEventListener('click', function(e) {
    firstCalc = firstCalc + "0";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 0")
    console.log(firstCalc);
    return firstCalc;
});

buttonOne.addEventListener('click', function(e) {
    firstCalc = firstCalc + "1";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 1")
    console.log(firstCalc);
    return firstCalc;
});

buttonTwo.addEventListener('click', function(e) {
    firstCalc = firstCalc + "2";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 2")
    console.log(firstCalc);
    return firstCalc;
});

buttonThree.addEventListener('click', function(e) {
    firstCalc = firstCalc + "3";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 3")
    console.log(firstCalc);
    return firstCalc;
});

buttonFour.addEventListener('click', function(e) {
    firstCalc = firstCalc + "24";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 4")
    console.log(firstCalc);
    return firstCalc;
});

buttonFive.addEventListener('click', function(e) {
    firstCalc = firstCalc + "5";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 5")
    console.log(firstCalc);
    return firstCalc;
});

buttonSix.addEventListener('click', function(e) {
    firstCalc = firstCalc + "6";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 6")
    console.log(firstCalc);
    return firstCalc;
});

buttonSeven.addEventListener('click', function(e) {
    firstCalc = firstCalc + "7";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 7")
    console.log(firstCalc);
    return firstCalc;
});

buttonEight.addEventListener('click', function(e) {
    firstCalc = firstCalc + "8";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 8")
    console.log(firstCalc);
    return firstCalc;
});

buttonNine.addEventListener('click', function(e) {
    firstCalc = firstCalc + "9";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the number 9")
    console.log(firstCalc);
    return firstCalc;
});




// operators functions

buttonSum.addEventListener('click', function(e) {
    totalCalc.push(firstCalc);
    totalOperators.push("sum");
    firstCalc = "";
    let totalCalcNow = totalCalc.join("");
    console.log(totalCalc);
    console.log(totalCalcNow);
    console.log(totalOperators);
    topScreen.innerHTML = totalCalcNow + "+";;
    mainScreen.innerHTML = firstCalc;
    return firstCalc;
    
});

buttonSubtract.addEventListener('click', function(e) {
    totalCalc.push(firstCalc);
    totalOperators.push("subtract");
    firstCalc = "";
    let totalCalcNow = totalCalc.join("");
    console.log(totalCalc);
    console.log(totalCalcNow);
    topScreen.innerHTML = totalCalcNow + "-";;
    mainScreen.innerHTML = firstCalc;
    return firstCalc;
    
});

buttonDivision.addEventListener('click', function(e) {
    totalCalc.push(firstCalc);
    totalOperators.push("divideNumbers");
    firstCalc = "";
    let totalCalcNow = totalCalc.join("");
    console.log(totalCalc);
    console.log(totalCalcNow);
    topScreen.innerHTML = totalCalcNow + "÷";
    mainScreen.innerHTML = firstCalc;
    return firstCalc;
    
});

buttonMultiply.addEventListener('click', function(e) {
    totalCalc.push(firstCalc);
    totalOperators.push("multiply");
    firstCalc = "";
    let totalCalcNow = totalCalc.join("");
    console.log(totalCalc);
    console.log(totalCalcNow);
    topScreen.innerHTML = totalCalcNow + "x";
    mainScreen.innerHTML = firstCalc;
    return firstCalc;
    
});


// equals function

buttonEquals.addEventListener('click', function(e) {
    totalCalc.push(firstCalc);
    let totalCalcResult = totalCalc.reduce((previousValue, currentValue) => {
        for (let i = 0; i > totalCalc.length; i++)
            operate(previousValue, currentValue,totalOperators[i]);
            console.log(totalOperators);
    });
    console.log(totalCalcResult);
    console.log(totalCalc);
    console.log(totalOperators);
});
    



