// Declare Variable

let length;
let width;
let height;
let radius;
let total;
const phi = Math.PI;

//------------------------------------------------------------------
// Function

const squareArea = (side) => side * side;
const squarePerimeter = (side) => side * 4;
const rectangleArea = (length, width) => length * width;
const rectanglePerimeter = (length, width) => (length * 2) + (width * 2);
const circleArea = (phi, radius) => phi * (radius * radius);
const circleCircumference = (phi, radius) => 2 * phi * radius;
const cubeArea = (side) => 6 * (side * side);
const cubeVolume = (side) => side * side * side;
const cylinderArea = (phi, radius, height) => 2 * phi * radius * (height + radius);
const cylinderVolume = (phi, radius, height) => phi * (radius * radius) * height;

//------------------------------------------------------------------
// Implement DOM

document.getElementById("combobox").addEventListener("click", function () {
    var value = document.getElementById("combobox").value;
    if (value == "rectangle") {
        document.getElementById("label2").style.display = "inline";
        document.getElementById("textbox2").style.display = "inline";
        document.getElementById("label1").innerHTML = "Length";
        document.getElementById("perimeter").innerHTML = "Calculate Perimeter";
        console.log("rec")
    } else if (value == "square") {
        document.getElementById("label1").innerHTML = "Side";
        document.getElementById("label2").style.display = "none";
        document.getElementById("textbox2").style.display = "none";
        document.getElementById("perimeter").innerHTML = "Calculate Perimeter";
        console.log("squ")
    } else if (value == "circle") {
        document.getElementById("label1").innerHTML = "Radius";
        document.getElementById("label2").style.display = "none";
        document.getElementById("textbox2").style.display = "none";
        document.getElementById("perimeter").innerHTML = "Calculate Perimeter";
    } else if (value == "cube") {
        document.getElementById("label1").innerHTML = "Side";
        document.getElementById("label2").style.display = "none";
        document.getElementById("textbox2").style.display = "none";
        document.getElementById("perimeter").innerHTML = "Calculate Volume";
    } else if (value == "cylinder") {
        document.getElementById("label2").style.display = "inline";
        document.getElementById("textbox2").style.display = "inline";
        document.getElementById("label1").innerHTML = "Radius";
        document.getElementById("label2").innerHTML = "Height";
        document.getElementById("perimeter").innerHTML = "Calculate Volume";
    }
});

document.getElementById("area").addEventListener("click", function () {
    var value = document.getElementById("combobox").value;
    if (value == "rectangle") {
        length = document.getElementById("textbox1").value;
        width = document.getElementById("textbox2").value;
        total = rectangleArea(length, width);
        document.getElementById("answer").value = total;
    } else if (value == "square") {
        side = document.getElementById("textbox1").value;
        total = squareArea(side);
        document.getElementById("answer").value = total;
    } else if (value == "circle") {
        radius = document.getElementById("textbox1").value;
        total = circleArea(phi, radius);
        document.getElementById("answer").value = total;
    } else if (value == "cube") {
        side = document.getElementById("textbox1").value;
        total = cubeArea(side);
        document.getElementById("answer").value = total;
    } else if (value == "cylinder") {
        radius = document.getElementById("textbox1").value;
        height = document.getElementById("textbox2").value;
        total = cylinderArea(phi, radius, height);
        document.getElementById("answer").value = total;
    } else {
        alert("Choose the shape first!");
    }
});

document.getElementById("perimeter").addEventListener("click", function () {
    var value = document.getElementById("combobox").value;
    if (value == "rectangle") {
        length = document.getElementById("textbox1").value;
        width = document.getElementById("textbox2").value;
        total = rectanglePerimeter(length, width);
        document.getElementById("answer").value = total;
    } else if (value == "square") {
        side = document.getElementById("textbox1").value;
        total = squarePerimeter(side);
        document.getElementById("answer").value = total;
    } else if (value == "circle") {
        radius = document.getElementById("textbox1").value;
        total = circleCircumference(phi, radius);
        document.getElementById("answer").value = total;
    } else if (value == "cube") {
        side = document.getElementById("textbox1").value;
        total = cubeVolume(side);
        document.getElementById("answer").value = total;
    } else if (value == "cylinder") {
        radius = document.getElementById("textbox1").value;
        height = document.getElementById("textbox2").value;
        total = cylinderVolume(phi, radius, height);
        document.getElementById("answer").value = total;
    } else {
        alert("Choose the shape first!")
    }
});