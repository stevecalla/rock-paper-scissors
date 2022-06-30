//element variables
let playButton = document.querySelector('button');

//event listeners
playButton.addEventListener('click', startGame);

//global variables
let gamesPlayedCount = 0;
let userWinCount = 0;
let computerWinCount = 0;
let tiedGamesCount = 0;

//start game on load
// getUserInput();

// Prompt User & Gather Input
function startGame() {
  let userInput;
  userInput = window.prompt("Rock, Paper, Scissors, SHOOT!!! \nPlease enter R, P or S.");
  // console.log('userInput = ', userInput);
  validateUserInput(userInput);
}

// Validate User Input
function validateUserInput(userInput) {
  if (userInput.toLowerCase() !== 'r' && 
    userInput.toLowerCase() !== 's' && 
    userInput.toLowerCase() !== 'p') {
      // console.log('invalid input');
      startGame();
    } else {
      // console.log('valid input'); // remove when complete
      let computerChoice = getRandomChoice();
      console.log('userInput = ', userInput, 'computer choice = ', computerChoice);
      determineWinner(userInput, computerChoice);
    }
}

// set random selection by the computer
function getRandomChoice() {
  const gameChoices = ['r', 's', 'p'];
  let randomNumber = Math.floor(Math.random() * gameChoices.length);
  // console.log('random = ', randomNumber);
  let computerChoice = gameChoices[randomNumber];
  // console.log('computer choice = ', computerChoice);
  return computerChoice;
}

// compare user input and computer selection
function determineWinner(userInput, computerInput) {
  let winner;

  if (userInput === computerInput) { // if no winner, select again
    tiedGamesCount ++;
    console.log('no winner, select again');
    return startGame();
  } else if (userInput === 'r' && computerInput === 's') { //rock beats scissors; winner = user
    winner = 'Human';
  } else if (userInput === 's' && computerInput === 'p') { //scissors beats paper; winner = user
    winner = 'Human';
  } else if (userInput === 'p' && computerInput === 'r') { //paper beats rock; winner = user
    winner = 'Human';
  } else { //computer wins
    winner = 'Computer';
  }

  return provideGameUpdate(winner, userInput, computerInput, tiedGamesCount);
}

function provideGameUpdate(winner, userInput, computerInput, tiedGamesCount) {
  let choices = {p: 'paper', r: 'rock', s: 'scissors'};
  let winnerInput;
  let loserInput;

  winner === 'User' ? 
    (winnerInput = choices[userInput], loserInput = choices[computerInput], userWinCount ++)
    : (winnerInput = choices[computerInput], loserInput = choices[userInput], computerWinCount ++); 

  
  window.alert(`${winner} wins = ${winnerInput} wins against ${loserInput}\n\nUser Wins = ${userWinCount}\nComputer Wins = ${computerWinCount}\nTied Games = ${tiedGamesCount}`);
  

  playAgain();
}

function playAgain() {
  let playMore = window.confirm(`Click "OK" to play again & "Cancel" to exit the game.`);
  console.log(playMore);
  if (playMore) {
    startGame();
  }
}


// if winner, create count for winner / loser

// count games

// provide alert stats after each win... then play again upon okay



