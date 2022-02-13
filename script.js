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