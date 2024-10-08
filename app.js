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

// Testing the operation with a simple calculation
function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
    case '/':
      return divide(firstNumber, secondNumber);
    default:
      return "Invalid operator";
  }
}

// Output test
console.log(calculate(firstNumber, operator, secondNumber));  // 8 in this case (3 + 5)
