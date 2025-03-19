let display = document.getElementById("display");

document.addEventListener("keydown", function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        appendOperator(event.key);
    } else if (event.key === "Enter") {
        calculateResult();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === ".") {
        appendOperator(".");
    }
});

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "오류";
    }
}
