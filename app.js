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
  choices = {p: 'paper', r: 'rock', s: 'scissors'};
  console.log(choices[userInput]);

  if (userInput === computerInput) {
    // if no winner, select again
    console.log('no winner, select again');
    getUserInput();
  } else if (userInput === 'r' && computerInput === 's') { //rock beats scissors; winner = user
    window.alert(`User wins = ${choices[userInput]} wins against ${choices[computerInput]}`);
    // count win in stats
    // display winner stats
  } else if (userInput === 's' && computerInput === 'p') { //scissors beats paper; winner = users
    window.alert(`User wins = ${choices[userInput]} wins against ${choices[computerInput]}`);
    // count win in stats
    // display winner stats
  } else if (userInput === 'p' && computerInput === 'r') { //paper beats rock; winner = user
    window.alert(`User wins = ${choices[userInput]} wins against ${choices[computerInput]}`);
    // count win in stats
    // display winner stats
  } else { 
    window.alert(`Computer wins = ${choices[userInput]} wins against ${choices[computerInput]}`);  //winner = computer
  }
}


// if winner, create count for winner / loser

// count games

// provide alert stats after each win... then play again upon okay



