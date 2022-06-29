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
      determineWinner(userInput, computerChoice);
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
function determineWinner(userInput, computerInput) {
  if (userInput === computerInput) {
    // if no winner, select again
    console.log('no winner, select again');
    getUserInput();
  } else if (userInput === 'r' && computerInput === 's') {
    // declare user winner
    window.alert('User wins = Rock wins against Scissors');
    // count win in stats
    // display winner stats
  } else if (userInput === 's' && computerInput === 'p') {
    // declare user winner
    window.alert('User wins = Rock wins against Scissors');
    // count win in stats
    // display winner stats
  } else if (userInput === 'p' && computerInput === 'r') {
    // declare user winner
    window.alert('User wins = Rock wins against Scissors');
    // count win in stats
    // display winner stats
  } else { 
    window.alert(`Computer Wins = ${computerInput} wins against ${userInput}`); 
  }
}


// if winner, create count for winner / loser

// count games

// provide alert stats after each win... then play again upon okay



