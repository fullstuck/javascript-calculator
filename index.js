// Declare Variable
let temp = "";
let temp1 = 0;
let result = 0;
let operator = "";
let number = "";

//------------------------------------------------------------------
// Function

const reset = () => {
    temp = "";
    temp1 = 0;
    result = 0;
    operator = "";
    number = "";
    calculate.value = "";
}

const disableButton = (id = "add", isDisable = false) => {
    document.getElementById(id).disabled = isDisable;
}

const disableOperatorButton = (value) => {
    disableButton("add", value);
    disableButton("substract", value);
    disableButton("multiply", value);
    disableButton("divide", value);
    disableButton("modulo", value);
    disableButton("equal", value);
}

const addNumber = (num) => {
    calculate.value += num;
    number += num;
    disableOperatorButton(false);
}

const clickNumberButton = (num, num1) => {
    document.getElementById(num).addEventListener("click", function () {
        addNumber(num1);
    });
}

const checkOperator = () => {
    if (temp1 == 0) {
        result += parseFloat(number);
        temp1 = 1;
    } else {
        if (temp == "+") {
            result += parseFloat(number);
        } else if (temp == "-") {
            result -= parseFloat(number);
        } else if (temp == "x") {
            result *= parseFloat(number);
        } else if (temp == ":") {
            result /= parseFloat(number);
        } else if (temp == "mod") {
            result %= parseFloat(number);
        }
    }
}

const disableKeyboard = () => document.onkeydown = (e) => false;

//------------------------------------------------------------------
//Disable Operator Button
disableOperatorButton(true);

//------------------------------------------------------------------
// Implement DOM on Number Button

clickNumberButton("1", 1);
clickNumberButton("2", 2);
clickNumberButton("3", 3);
clickNumberButton("4", 4);
clickNumberButton("5", 5);
clickNumberButton("6", 6);
clickNumberButton("7", 7);
clickNumberButton("8", 8);
clickNumberButton("9", 9);
clickNumberButton("0", 0);
clickNumberButton("point", ".");

//------------------------------------------------------------------
// Implement DOM on Math Operator

add.addEventListener("click", function () {
    checkOperator();
    calculate.value += "+";
    temp = "+"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
substract.addEventListener("click", function () {
    checkOperator();
    calculate.value += "-";
    temp = "-"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
multiply.addEventListener("click", function () {
    checkOperator();
    calculate.value += "x";
    temp = "x"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
divide.addEventListener("click", function () {
    checkOperator();
    calculate.value += ":";
    temp = ":"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
modulo.addEventListener("click", function () {
    checkOperator();
    calculate.value += "mod";
    temp = "mod"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
equal.addEventListener("click", function () {
    checkOperator();
    output.innerHTML = calculate.value + " = " + result;
    calculate.value = "";
    console.log(result);
    reset();
    disableOperatorButton(true);
});

//------------------------------------------------------------------
// Implement DOM on Clear Button

clear.addEventListener("click", function () {
    reset();
    disableOperatorButton(true);
});