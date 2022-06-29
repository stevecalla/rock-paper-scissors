// Prompt User & Gather Input
function userInput() {
  window.prompt("Rock, Paper, Scissors, SHOOT!!! \nPlease enter R, P or S.");
}
userInput();
console.log(userInput);

// Validate User Input
if (userInput.toLowerCase() !== 'r' && 
  userInput.toLowerCase() !== 's' && 
  userInput.toLowerCase() !== 'p') {
    console.log('invalid input');
    userInput = window.prompt("Rock, Paper, Scissors, SHOOT!!!");
  } else {
    console.log('valid input'); // remove when complete
  }

// set random selection by the computer

// compare user input and computer selection

// if no winner, select again

// if winner, create count for winner / loser

// count games

// provide alert stats after each win... then play again upon okay



