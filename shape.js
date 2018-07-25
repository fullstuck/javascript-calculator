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
const cubeAreaFunc = (side) => 6 * (length * length);
const cubeVolumeFunc = (side) => length * length * length;
const tubeAreaFunc = (phi, radius, height) => 2 * phi * radius * (height + radius);
const tubeVolumeFunc = (phi, radius, height) => phi * (radius * radius) * height;
debugger;
combobox.addEventListener("click", function () {
    var value = combobox.value;
    if (value == "rectangle") {
        label2.style.display = "inline";
        textbox2.style.display = "inline";
        label1.innerHTML = "Length";
    } else if (value == "square") {
        label1.innerHTML = "Side";
        label2.style.display = "none";
        textbox2.style.display = "none";
    }
});

area.addEventListener("click", function () {
    var value = combobox.value;
    if (value == "rectangle") {
        length = textbox1.value;
        width = textbox2.value;
        total = rectangleArea(length, width);
        answer.value = total;
        console.log(total);
    } else if (value == "square") {
        side = textbox1.value;
        total = squareArea(side);
        answer.value = total;
        console.log(total);
    }
});