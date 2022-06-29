// Prompt User & Gather Input
function getUserInput() {
  let userInput;
  userInput = window.prompt("Rock, Paper, Scissors, SHOOT!!! \nPlease enter R, P or S.");
  console.log(userInput);
  validateUserInput(userInput);
}
getUserInput();

// Validate User Input
function validateUserInput(userInput) {
  if (userInput.toLowerCase() !== 'r' && 
    userInput.toLowerCase() !== 's' && 
    userInput.toLowerCase() !== 'p') {
      console.log('invalid input');
      getUserInput();
    } else {
      console.log('valid input'); // remove when complete
    }
}

// set random selection by the computer

// compare user input and computer selection

// if no winner, select again

// if winner, create count for winner / loser

// count games

// provide alert stats after each win... then play again upon okay



