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
    document.getElementById("calculate").value = "";
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

function addNumber(num) {
    document.getElementById("calculate").value += num;
    number += num;
    disableOperatorButton(false);
}

function disableKeyboard() {
    document.onkeydown = function (e) {
        return false;
    }
}

//------------------------------------------------------------------
//Disable Operator Button
disableOperatorButton(true);
disableKeyboard();

//------------------------------------------------------------------
// Implement DOM on Number Button

document.getElementById("1").addEventListener("click", function () {
    addNumber(1);
});
document.getElementById("2").addEventListener("click", function () {
    addNumber(2);
});
document.getElementById("3").addEventListener("click", function () {
    addNumber(3);
});
document.getElementById("4").addEventListener("click", function () {
    addNumber(4);
});
document.getElementById("5").addEventListener("click", function () {
    addNumber(5);
});
document.getElementById("6").addEventListener("click", function () {
    addNumber(6);
});
document.getElementById("7").addEventListener("click", function () {
    addNumber(7);
});
document.getElementById("8").addEventListener("click", function () {
    addNumber(8);
});
document.getElementById("9").addEventListener("click", function () {
    addNumber(9);
});
document.getElementById("0").addEventListener("click", function () {
    addNumber(0);
});;
document.getElementById("point").addEventListener("click", function () {
    addNumber(".");
});

//------------------------------------------------------------------
// Implement DOM on Math Operator

document.getElementById("add").addEventListener("click", function () {
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

    document.getElementById("calculate").value += "+";
    temp = "+"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
document.getElementById("substract").addEventListener("click", function () {
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

    document.getElementById("calculate").value += "-";
    temp = "-"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
document.getElementById("multiply").addEventListener("click", function () {
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

    document.getElementById("calculate").value += "x";
    temp = "x"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
document.getElementById("divide").addEventListener("click", function () {
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

    document.getElementById("calculate").value += ":";
    temp = ":"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
document.getElementById("modulo").addEventListener("click", function () {
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

    document.getElementById("calculate").value += "%";
    temp = "mod"
    number = "";
    disableOperatorButton(true);
    console.log(result);
});
document.getElementById("equal").addEventListener("click", function () {
    if (number != "") {
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
    document.getElementById("result").innerHTML = document.getElementById("calculate").value + " = " + result;
    document.getElementById("calculate").value = "";
    console.log(result);
    reset();
    disableOperatorButton(true);
});

//------------------------------------------------------------------
// Implement DOM on Clear Button

document.getElementById("clear").addEventListener("click", function () {
    reset();
    disableOperatorButton(true);
});