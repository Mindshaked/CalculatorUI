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

function remainderNumbers(a,b){
    return a % b;
}


// function that takes two numbers and an operator(op).

function operate(a,b,op){
    if (op == " + "){
        return sumNumbers(a,b);
    } else if (op == " - "){
        return subtractNumbers(a,b);
    } else if (op == " x "){
        return multiplyNumbers(a,b);
    } else if (op == " ÷ "){
        return divideNumbers(a,b);
    } else if (op == " % "){
        return remainderNumbers(a,b);
    }

}


// calculation process

let totalCalc = [];
let firstCalc = '';
const mainScreen = document.getElementById("main-operation");
const topScreen = document.getElementById("top-operation");

//number buttons

const buttonAll = document.querySelectorAll(".button")

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

const buttonRemainder = document.getElementById("remainder")

//other tool numbers

const buttonEraseAll = document.getElementById("erase-all");
const buttonRemove = document.getElementById("remove");

const buttonMood = document.getElementById("theme");


//equals button

const buttonEquals = document.getElementById("equals");


// numbers functions

buttonZero.addEventListener('click', function(e) {
    firstCalc = firstCalc.concat("0");
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
    firstCalc = firstCalc + "4";
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



// operators functions

buttonSum.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number beofre the next operator");
        return;
    }
    console.log(firstCalc == '')
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " + ");
    topScreen.innerHTML = totalCalc.join('');
    firstCalc = '';
    mainScreen.innerHTML = '';
    console.log(totalCalc);

    
});

buttonSubtract.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number beofre the next operator");
        return;
    }
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " - ");
    topScreen.innerHTML = totalCalc.join('');
    firstCalc = '';
    mainScreen.innerHTML = '';
    console.log(totalCalc);
    
});

buttonDivision.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number beofre the next operator");
        return;
    }
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " ÷ ");
    topScreen.innerHTML = totalCalc.join('');
    firstCalc = '';
    mainScreen.innerHTML = '';
    console.log(totalCalc);
    
});

buttonMultiply.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number beofre the next operator");
        return;
    }
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " x ");
    topScreen.innerHTML = totalCalc.join('');
    firstCalc = '';
    mainScreen.innerHTML = '';
    console.log(totalCalc);
    
});

buttonRemainder.addEventListener('click', function(e) {
    if (firstCalc == ''){
        alert("You need to add a number beofre the next operator");
        return;
    }

    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " % ");
    topScreen.innerHTML = totalCalc.join('');
    firstCalc = '';
    mainScreen.innerHTML = '';
    console.log(totalCalc);

    
});

//other tools


buttonEraseAll.addEventListener('click', function(e) {
    totalCalc = [];
    firstCalc = '';
    topScreen.innerHTML = totalCalc.join('');
    mainScreen.innerHTML = '';
    
});

buttonRemove.addEventListener('click', function(e) {
    firstCalc = firstCalc.slice(0, -1);
    mainScreen.innerHTML = firstCalc;
    return firstCalc;


});

buttonMood.addEventListener('click', function(e) {
    buttonAll.style.backgroundcolor = "#4b6d91";
});

// equals function



buttonEquals.addEventListener('click', function(e) {
    if (firstCalc !== Number){
        firstCalcNum = parseFloat(firstCalc)
        totalCalc.push(firstCalcNum);
        firstCalc = '';
        topScreen.innerHTML = totalCalc.join('');
        mainScreen.innerHTML = firstCalc;
    }

    let solutionNum;

    while (totalCalc.length > 1){
        while (totalCalc.includes(" x ")){
            let opIndex = totalCalc.indexOf(" x ")
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
            
        }
    
        while (totalCalc.includes(" ÷ ")){
            let opIndex = totalCalc.indexOf(" ÷ ")
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
        }

        while (totalCalc.includes(" % ")){
            let opIndex = totalCalc.indexOf(" % ")
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
        }

        while (totalCalc.includes(" + ")){
            let opIndex = totalCalc.indexOf(" + ")
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
        }

        while (totalCalc.includes(" - ")){
            let opIndex = totalCalc.indexOf(" - ")
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
        }

        console.log(solutionNum);
        firstCalc = solutionNum;
        totalCalc = [];
        topScreen.innerHTML = '';
        mainScreen.innerHTML = firstCalc;
        return solutionNum;
    }
/*

/

%

+

-
*/
    

});
    



