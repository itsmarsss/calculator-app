/*
2. 
*/
// Clear function
const displayBox = document.getElementById("result");

function clearScreen() {
    displayBox.value = "";
}

// Calculate function
function calculate() {
    displayBox.value = eval(displayBox.value);
}

// Display function
function display(value) {
    if(displayBox.value == "undefined") {
        clearScreen();
    }
    displayBox.value += value;
}