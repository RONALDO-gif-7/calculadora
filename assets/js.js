let input = "";
let isNewCalculation = false;

function updateDisplay() {
    document.querySelector('.result').textContent = input || "0";
}

function addNumber(number) {
    if (isNewCalculation) {
        input = number;
        isNewCalculation = false;
    } else {
        input += number;
    }
    updateDisplay();
}

function addOperator(operator) {
  
    const lastChar = input.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        input = input.slice(0, -1) + operator;
    } else {
        input += operator;
    }
    isNewCalculation = false;
    updateDisplay();
}

function addDot() {
    
    const parts = input.split(/[+\-*/]/);
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart.includes('.')) {
        input += '.';
        updateDisplay();
    }
}

function calculate() {
    try {
        const result = eval(input);
        input = result.toString();
        updateDisplay();
        isNewCalculation = true;
    } catch (e) {
        input = 'Error';
        updateDisplay();
        setTimeout(() => {
            input = '';
            updateDisplay();
        }, 1500);
    }
}

function clearDisplay() {
    input = '';
    updateDisplay();
}

function deleteLast() {
    input = input.slice(0, -1);
    updateDisplay();
}


updateDisplay();
