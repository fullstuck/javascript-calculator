let length;
let width;
let height;
let radius;
let total;
const phi = Math.PI;

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

combobox.addEventListener("click", function () {
    var value = combobox.value;
    if (value == "rectangle") {
        label2.style.display = "inline";
        textbox2.style.display = "inline";
        label1.innerHTML = "Length";
        perimeter.innerHTML = "Calculate Perimeter";
    } else if (value == "square") {
        label1.innerHTML = "Side";
        label2.style.display = "none";
        textbox2.style.display = "none";
        perimeter.innerHTML = "Calculate Perimeter";
    } else if (value == "circle") {
        label1.innerHTML = "radius";
        label2.style.display = "none";
        textbox2.style.display = "none";
        perimeter.innerHTML = "Calculate Perimeter";
    } else if (value == "cube") {
        label1.innerHTML = "Side";
        label2.style.display = "none";
        textbox2.style.display = "none";
        perimeter.innerHTML = "Calculate Volume";
    } else {
        alert("Choose the shape first!");
    }
});

area.addEventListener("click", function () {
    var value = combobox.value;
    if (value == "rectangle") {
        length = textbox1.value;
        width = textbox2.value;
        total = rectangleArea(length, width);
        answer.value = total;
    } else if (value == "square") {
        side = textbox1.value;
        total = squareArea(side);
        answer.value = total;
    } else if (value == "circle") {
        radius = textbox1.value;
        total = circleArea(phi, radius);
        answer.value = total;
    } else if (value == "cube") {
        side = textbox1.value;
        total = cubeArea(side);
        answer.value = total;
    } else {
        alert("Choose the shape first!");
    }
});

perimeter.addEventListener("click", function () {
    var value = combobox.value;
    if (value == "rectangle") {
        length = textbox1.value;
        width = textbox2.value;
        total = rectanglePerimeter(length, width);
        answer.value = total;
    } else if (value == "square") {
        side = textbox1.value;
        total = squarePerimeter(side);
        answer.value = total;
    } else if (value == "circle") {
        radius = textbox1.value;
        total = circleCircumference(phi, radius);
        answer.value = total;
    } else if (value == "cube") {
        side = textbox1.value;
        total = cubeVolume(side);
        answer.value = total;
    } else {
        alert("Choose the shape first!")
    }
});