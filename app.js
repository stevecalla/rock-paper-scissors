// Prompt User & Gather Input
function getUserInput() {
  let userInput;
  userInput = window.prompt("Rock, Paper, Scissors, SHOOT!!! \nPlease enter R, P or S.");
  console.log('userInput = ', userInput);
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
      let computerChoice = getRandomChoice();
      console.log('userInput = ', userInput, 'computer choice = ', computerChoice);
      
    }
}

// set random selection by the computer

function getRandomChoice() {
  const gameChoices = ['r', 's', 'p'];
  let randomNumber = Math.floor(Math.random() * gameChoices.length);
  console.log('random = ', randomNumber);
  let computerChoice = gameChoices[randomNumber];
  console.log('computer choice = ', computerChoice);
  return computerChoice;
}

// compare user input and computer selection

// if no winner, select again

// if winner, create count for winner / loser

// count games

// provide alert stats after each win... then play again upon okay



