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
    try {
        displayBox.value = eval(displayBox.value);
    } catch(error) {
        displayBox.value = "error";
    }
}

// Display function
function display(value) {
    if(displayBox.value == "undefined" || displayBox.value == "error") {
        clearScreen();
    }
    displayBox.value += value;
}