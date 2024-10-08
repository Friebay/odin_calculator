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
  