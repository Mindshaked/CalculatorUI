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

//other tools

const buttonEraseAll = document.getElementById("erase-all");
const buttonRemove = document.getElementById("remove");

const buttonMood = document.getElementById("theme");

const mainScreenStyle = document.getElementById("main-screen")
const topScreenStyle = document.getElementById("top-screen")
const buttonsPadStyle = document.getElementById("buttons-pad")

const bodyStyle = document.querySelector("body");


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
        alert("You need to add a number before the next operator");
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
        alert("You need to add a number before the next operator");
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
        alert("You need to add a number before the next operator");
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
        alert("You need to add a number before the next operator");
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
        alert("You need to add a number before the next operator");
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

let styleCounter = 1;

buttonMood.addEventListener('click', function(e) {

    styleCounter = styleCounter + 1;
    console.log(styleCounter)
    
    if (styleCounter == 1){
        mainScreenStyle.style.background = "#698eb6";
        topScreenStyle.style.background = "#4b6d91";
        buttonsPadStyle.style.background = "#ffffff";
        buttonSum.style.background = "#4b6d91";
        buttonSum.style.color = "white";
        buttonSubtract.style.background = "#4b6d91";
        buttonSubtract.style.color = "white";
        buttonDivision.style.background = "#4b6d91";
        buttonDivision.style.color = "white";
        buttonMultiply.style.background = "#4b6d91";
        buttonMultiply.style.color = "white";
        buttonEquals.style.background = "#eb8468";
        buttonMood.style.background = "white";
        buttonMood.style.color = "#4b6d91";
        bodyStyle.style.background = "rgb(2,0,36)";
        bodyStyle.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(235,132,104,1) 35%, rgba(51,90,132,1) 100%)";

    } else if (styleCounter == 2){
        mainScreenStyle.style.background = "#f1c0e8";
        topScreenStyle.style.background = "#cfbaf0";
        buttonsPadStyle.style.background = "#ffcfd2";
        buttonSum.style.background = "#a3c4f3";
        buttonSubtract.style.background = "#a3c4f3";
        buttonDivision.style.background = "#a3c4f3";
        buttonMultiply.style.background = "#a3c4f3";
        buttonEquals.style.background = "#98f5e1";
        buttonMood.style.background = "#cfbaf0";
        buttonMood.style.color = "white";
        bodyStyle.style.background = "#90dbf4";
        
        

    } else if (styleCounter == 3){
        mainScreenStyle.style.background = "#e4572E";
        topScreenStyle.style.background = "#17BEBB";
        buttonsPadStyle.style.background = "#2E282A";
        buttonSum.style.background = "#FFC914";
        buttonSubtract.style.background = "#FFC914";
        buttonDivision.style.background = "#FFC914";
        buttonMultiply.style.background = "#FFC914";
        buttonEquals.style.background = "#76B041";
        buttonMood.style.background = "#E4572E";
        buttonMood.style.color = "white";
        bodyStyle.style.background = "grey";
        bodyStyle.style.background = "linear-gradient(228deg, rgba(64,53,53,1) 10%, rgba(0,0,0,1) 100%)";

    } else if (styleCounter == 4){
        mainScreenStyle.style.background = "#6f1d1b";
        topScreenStyle.style.background = "#99582a";
        buttonsPadStyle.style.background = "#432818";
        buttonSum.style.background = "#99582a";
        buttonSum.style.color = "white";
        buttonSubtract.style.background = "#99582a";
        buttonSubtract.style.color = "white";
        buttonDivision.style.background = "#99582a";
        buttonDivision.style.color = "white";
        buttonMultiply.style.background = "#99582a";
        buttonMultiply.style.color = "white";
        buttonEquals.style.background = "#ffe6a7";
        buttonEquals.style.color = "black";
        buttonMood.style.background = "#432818";
        buttonMood.style.color = "white";
        bodyStyle.style.background = "#bb9457";
       
        styleCounter = 0;
    }

});

// equals function



buttonEquals.addEventListener('click', function(e) {
    if (totalCalc.length == 1){
        return totalCalc; 

    } else if ((totalCalc.slice(-1) == " x " || totalCalc.slice(-1) == " ÷ "  || totalCalc.slice(-1) == " + " || totalCalc.slice(-1) == " - " || totalCalc.slice(-1) == " % ") && (firstCalc == '')) {
        alert("you need to add a number after the operator");
        return;

    } else if (firstCalc !== Number){
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
        solutionNum = Math.round((solutionNum + Number.EPSILON) * 100) / 100
        firstCalc = solutionNum;
        totalCalc = [];
        topScreen.innerHTML = '';
        mainScreen.innerHTML = firstCalc;
        return solutionNum;
    }
    

});
    



