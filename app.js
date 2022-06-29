// Prompt User & Gather Input
let userInput = window.prompt("Rock, Paper, Scissors, SHOOT!!! \nPlease enter R, P or S.");
console.log(userInput);

// Validate User Input
if (userInput.toLowerCase() !== 'r' && 
  userInput.toLowerCase() !== 's' && 
  userInput.toLowerCase() !== 'p') {
    console.log('invalid input');
    userInput = window.prompt("Rock, Paper, Scissors, SHOOT!!!");
  } else {
    console.log('valid input');
  }

