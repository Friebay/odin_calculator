// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract one number from another
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide one number by another
  function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  }
  
  // Testing in browser console
  console.log(add(5, 3));
  console.log(subtract(5, 3));
  console.log(multiply(5, 3));
  console.log(divide(5, 3));
  console.log(divide(5, 0));
  

  // Variables for the calculator operation
let firstNumber = 3;    // Example: the first number
let operator = '+';     // Example: the operator
let secondNumber = 5;   // Example: the second number

// Function to perform an operation based on the operator
function operate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        return "Invalid operator";
    }
  }

// Output test
console.log(operate(operator, firstNumber, secondNumber));  // 8 in this case (3 + 5)

// Variable to store the display value
let displayValue = '';

// Function to update the display
function updateDisplay() {
  const display = document.querySelector('.display p');
  display.textContent = displayValue;
}

// Function to handle number button clicks
function handleNumberClick(number) {
  displayValue += number;  // Append the clicked number to displayValue
  updateDisplay();  // Update the display with the new value
}

// Adding event listeners to number buttons
function init() {
  const numberButtons = document.querySelectorAll('.btn');  // Select all buttons
  numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const value = e.target.textContent;  // Get the button's value (text)
      
      // Only handle number buttons (0-9) for now
      if (!isNaN(value)) {
        handleNumberClick(value);
      }
    });
  });
}

// Initialize the event listeners when the DOM is loaded
window.onload = init;
