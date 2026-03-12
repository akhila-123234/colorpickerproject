let backgroundColor = document.getElementById("colorPickerContainer");
let changeHexcode = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
    backgroundColor.style.backgroundColor = "#e0e0e0";
    changeHexcode.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    backgroundColor.style.backgroundColor = "#6fcf97";
    changeHexcode.textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    backgroundColor.style.backgroundColor = "#56ccf2";
    changeHexcode.textContent = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
    backgroundColor.style.backgroundColor = "#bb6bd9";
    changeHexcode.textContent = "#bb6bd9";
}