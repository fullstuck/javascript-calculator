"use strict";

// Declare Variable

let length = 0;
let width = 0;
let height = 0;
let radius = 0;
let total = 0;
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

const hideTextbox = () => {
    $("#textbox2").removeAttr("style").hide();
    $("#label2").removeAttr("style").hide();
};

const showTextbox = () => {
    $("#textbox2").show();
    $("#label2").show();
};

//------------------------------------------------------------------
// Implement DOM

$("#combobox").on("change", function () {
    const value = $("#combobox").val();
    if (value === "rectangle") {
        showTextbox();
        $("#label1").html("Length");
        $("#perimeter").html("Calculate Perimeter");
    } else if (value === "square") {
        hideTextbox();
        $("#label1").html("Side");
        $("#perimeter").html("Calculate Perimeter");
    } else if (value === "circle") {
        hideTextbox();
        $("#label1").html("Radius");
        $("#perimeter").html("Calculate Perimeter");
    } else if (value === "cube") {
        hideTextbox();
        $("#label1").html("Side");
        $("#perimeter").html("Calculate Volume");
    } else if (value === "cylinder") {
        showTextbox();
        $("#label1").html("Radius");
        $("#label2").html("Height");
        $("#perimeter").html("Calculate Volume");
    }
});

$("#area").on("click", function () {
    const value = $("#combobox").val();
    if (value === "rectangle") {
        const length = $('#textbox1').val();
        const width = $('#textbox2').val();
        $('#answer').val(rectangleArea(length, width));
    } else if (value === "square") {
        const side = $('#textbox1').val();
        $('#answer').val(squareArea(side));
    } else if (value === "circle") {
        const radius = $('#textbox1').val();
        $('#answer').val(circleArea(phi, radius));
    } else if (value === "cube") {
        const side = $('#textbox1').val();
        $('#answer').val(cubeArea(side));
    } else if (value === "cylinder") {
        const radius = $('#textbox1').val();
        const height = $('#textbox2').val();
        $('#answer').val(cylinderArea(phi, radius, height));
    } else {
        alert("Choose the shape first!");
    }
});

$("#perimeter").on("click", function () {
    var value = $("#combobox").val();
    if (value === "rectangle") {
        const length = $('#textbox1').val();
        const width = $('#textbox2').val();
        $('#answer').val(rectanglePerimeter(length, width));
    } else if (value === "square") {
        const side = $('#textbox1').val();
        $('#answer').val(squarePerimeter(side));
    } else if (value === "circle") {
        const radius = $('#textbox1').val();
        $('#answer').val(circleCircumference(phi, radius));
    } else if (value === "cube") {
        const side = $('#textbox1').val();
        $('#answer').val(cubeVolume(side));
    } else if (value === "cylinder") {
        const radius = $('#textbox1').val();
        const height = $('#textbox2').val();
        $('#answer').val(cylinderVolume(phi, radius, height));
    } else {
        alert("Choose the shape first!")
    }
});