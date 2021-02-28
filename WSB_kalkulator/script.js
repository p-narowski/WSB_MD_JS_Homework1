const firstInput = document.getElementById("input_data1");
const secondInput = document.getElementById("input_data2");
// let firstInputValue = Number(firstInput.value);
// let secondInputValue = Number(secondInput.value);
const result = document.getElementById("output_data");

function Add() {
  result.value = Number(firstInput.value) + Number(secondInput.value);
}
function Substract() {
  result.value = Number(firstInput.value) - Number(secondInput.value);
}
function Multiply() {
  result.value = Number(firstInput.value) * Number(secondInput.value);
}

function Divide() {
  let firstFactor = Number(firstInput.value);
  let secondFactor = Number(secondInput.value);
  secondFactor == 0
    ? alert("Błąd dzielenia przez 0")
    : (result.value = firstFactor / secondFactor);
}
