const displayBox = document.getElementById("result");
const inputs = ['1', '2', '3', '/', '4', '5', '6', '-', '7', '8', '9', '+', '.', '0', '*'];
const calc = ['=', 'Enter'];

// Add listeners
document.addEventListener("keydown", (event) => {
    console.log(event.key);
    const input = event.key;
    if(event.key === "Backspace") {
        displayBox.value = displayBox.value.slice(0, -1);
    } else if(inputs.includes(input)) {
        display(input);
    } else if(calc.includes(input)) {
        calculate(input);
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