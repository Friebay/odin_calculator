let displayValue = '';
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let shouldResetDisplay = false;

function updateDisplay() {
  const display = document.querySelector('.display p');
  display.textContent = displayValue || '0';
}

function handleNumberClick(number) {
  if (shouldResetDisplay) {
    displayValue = '';
    shouldResetDisplay = false;
  }
  displayValue += number;
  updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(operator) {
  if (firstNumber === null) {
    // If no first number is stored, store the current display value as the first number
    firstNumber = parseFloat(displayValue);
  } else if (currentOperator) {
    // If an operator already exists, perform the operation before storing the next operator
    secondNumber = parseFloat(displayValue);
    firstNumber = operate(currentOperator, firstNumber, secondNumber); // Calculate the result
    displayValue = String(firstNumber); // Update display with the result
    updateDisplay(); // Refresh the display
  }

  currentOperator = operator; // Store the selected operator
  shouldResetDisplay = true; // Prepare to reset display for the next input
}

// Function to handle "=" button clicks (perform the operation)
function handleEqualsClick() {
  if (currentOperator !== null && firstNumber !== null) {
    // If both operator and first number are set, perform the operation
    secondNumber = parseFloat(displayValue); // Store second number
    const result = operate(currentOperator, firstNumber, secondNumber); // Perform the operation
    displayValue = String(result); // Update the display with the result
    updateDisplay(); // Refresh the display

    // Reset everything after the calculation
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
  }
}

// Function to clear the calculator (reset everything)
function clearCalculator() {
  displayValue = '';
  firstNumber = null;
  secondNumber = null;
  currentOperator = null;
  updateDisplay(); // Refresh the display to show '0'
}

// Function to perform basic arithmetic operations
function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      if (num2 === 0) return 'Error'; // Handle division by zero
      return divide(num1, num2);
    default:
      return null;
  }
}

// Functions for basic arithmetic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Function to initialize event listeners for the calculator buttons
function init() {
  const numberButtons = document.querySelectorAll('.btn'); // Select all buttons
  numberButtons.forEach(button => {
    const value = button.textContent; // Get button text (number or operator)

    // Add event listeners for number buttons (0-9)
    if (!isNaN(value)) {
      button.addEventListener('click', () => handleNumberClick(value));
    }

    // Add event listeners for operator buttons (+, -, *, /)
    if (['+', '-', '*', '/'].includes(value)) {
      button.addEventListener('click', () => handleOperatorClick(value));
    }

    // Add event listener for "=" button
    if (value === '=') {
      button.addEventListener('click', handleEqualsClick);
    }

    // Add event listener for "C" (clear) button
    if (value === 'C') {
      button.addEventListener('click', clearCalculator);
    }
  });
}

window.onload = init;
