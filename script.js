const displayBox = document.getElementById("result");
const inputs = ['1', '2', '3', '/', '4', '5', '6', '-', '7', '8', '9', '+', '.', '0', '*'];
const calc = ['=', 'Enter'];
let ctrl = false;

// Add listeners
document.addEventListener("keydown", (event) => {
    const input = event.key;
    if(input === "Backspace" && ctrl === true) {
        clearScreen();
    } else if(input === "Backspace") {
        if(!(displayBox.value == "undefined" || displayBox.value == "error")) {
            displayBox.value = displayBox.value.slice(0, -1);
        }
    } else if(inputs.includes(input)) {
        display(input);
    } else if(calc.includes(input)) {
        calculate();
    } else if(input === "Control") {
        ctrl = true;
    }
});
document.addEventListener("keyup", (event) => {
    const input = event.key;
    if(input === "Control") {
        ctrl = false;
    }
});

// CLear function
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