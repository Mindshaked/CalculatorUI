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

let totalCalc = '';

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
const buttonComa = document.getElementById("coma");


//operator buttons

const buttonSum = document.getElementById("sum");
const buttonSubtract = document.getElementById("subtract");
const buttonDivision = document.getElementById("division");
const buttonMultiply = document.getElementById("multiply");

//other tool numbers

const buttonEraseAll = document.getElementById("erase-all");
const buttonRemove = document.getElementById("remove");


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
    firstCalc = firstCalc.concat("1");
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


buttonComa.addEventListener('click', function(e) {
    if ((firstCalc.includes("."))) {
        alert("you cannot place two decimal points in the same number");
        return;
    } 


    firstCalc = firstCalc + ".";
    mainScreen.innerHTML = firstCalc;
    console.log("you clicked the coma")
    console.log(firstCalc);
    return firstCalc;
});


let operatorChosen = "";
let totalCalcText = "";
// operators functions

buttonSum.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number before the operator");
        return;
    }
    totalCalc = firstCalc;
    firstCalc = "";
    operatorChosen = "sum";
    totalCalcText = totalCalc + " + ";
    topScreen.innerHTML = totalCalcText;
    mainScreen.innerHTML = firstCalc;
    console.log(totalCalc)
    console.log(firstCalc);
    return operatorChosen;

    
});

buttonSubtract.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number before the operator");
        return;
    }
    totalCalc = firstCalc;
    firstCalc = "";
    operatorChosen = "subtract";
    totalCalcText = totalCalc + " - ";
    topScreen.innerHTML = totalCalcText;
    mainScreen.innerHTML = firstCalc;
    console.log(totalCalc)
    console.log(firstCalc);
    return operatorChosen;
    
});

buttonDivision.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number before the operator");
        return;
    }
    totalCalc = firstCalc;
    firstCalc = "";
    operatorChosen = "divideNumbers";
    totalCalcText = totalCalc + " ÷ ";
    topScreen.innerHTML = totalCalcText;
    mainScreen.innerHTML = firstCalc;
    console.log(totalCalc)
    console.log(firstCalc);
    return operatorChosen;
    
});

buttonMultiply.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number before the operator");
        return;
    }
    totalCalc = firstCalc;
    firstCalc = "";
    operatorChosen = "multiply";
    totalCalcText = totalCalc + " x ";
    topScreen.innerHTML = totalCalcText;
    mainScreen.innerHTML = firstCalc;
    console.log(totalCalc)
    console.log(firstCalc);
    return operatorChosen;
    
});

//other tools


buttonEraseAll.addEventListener('click', function(e) {
    firstCalc = '';
    totalCalc = '';
    mainScreen.innerHTML = firstCalc;
    topScreen.innerHTML= totalCalc;
    return firstCalc,totalCalc;

    
});

buttonRemove.addEventListener('click', function(e) {
    firstCalc.slice(0, -1);
    mainScreen.innerHTML = firstCalc;
    return firstCalc;


});

// equals function

let actualSolution;

buttonEquals.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need a number after the operator in order to calculate something");
        return;
    }
    let totalCalcNum = parseFloat(totalCalc);
    let firstCalcNum = parseFloat(firstCalc);
    console.log(firstCalcNum);
    console.log(totalCalcNum);
    if (operatorChosen == ""){
        actualSolution = firstCalcNum;
        return actualSolution;
    } 
    actualSolution = operate(totalCalcNum,firstCalcNum,operatorChosen);
    actualSolution = Math.round((actualSolution + Number.EPSILON) * 100) / 100;
    firstCalc = actualSolution;
    mainScreen.innerHTML = actualSolution;
    topScreen.innerHTML= firstCalc;
    console.log(actualSolution);
    return actualSolution;
      
    
});
    



