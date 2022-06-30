//element variables
let playButton = document.querySelector('button');
let gameSummary = document.getElementById('game-stats');

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
    winner = 'Tie';
    // return startGame();
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

  if (winner === 'Tie') {
    window.alert(`Human selects ${choices[userInput]}.\nComputer selects ${choices[computerInput]}.\n\nIT'S A TIE\n\nUser Win Count = ${userWinCount}\nComputer Win Count = ${computerWinCount}\nTied Game Count = ${tiedGamesCount}`);
    return playAgain();
  }

  winner === 'Human' ? 
    (winnerInput = choices[userInput], loserInput = choices[computerInput], userWinCount ++)
    : (winnerInput = choices[computerInput], loserInput = choices[userInput], computerWinCount ++); 
  
  window.alert(`Human selects ${choices[userInput]}.\nComputer selects ${choices[computerInput]}.\n\nWINNER ${winner.toUpperCase()}\n${winnerInput.toUpperCase()} wins against ${loserInput.toUpperCase()}\n\nUser Win Count = ${userWinCount}\nComputer Win Count = ${computerWinCount}\nTied Game Count = ${tiedGamesCount}`);

  gameSummary.innerHTML = `
    <p><strong>GAME SUMMARY</strong></p>
    <p>User Win Count = ${userWinCount}</p>
    <p>Computer Win Count = ${computerWinCount}</p>
    <p>Tied Game Count = ${tiedGamesCount}</p>
  `;

  playAgain();
}

function playAgain() {
  let playMore = window.confirm(`Click "OK" to play again & "Cancel" to exit the game.`);
  console.log(playMore);
  if (playMore) {
    startGame();
  }
}



