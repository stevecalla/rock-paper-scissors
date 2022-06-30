//global variables
let gamesPlayedCount = 0;
let userWinCount = 0;
let computerWinCount = 0;
let tiedGamesCount = 0;

//start game on load
getUserInput();

// Prompt User & Gather Input
function getUserInput() {
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
      getUserInput();
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
  let winnerChoice;
  let loserChoice;
  let choices = {p: 'paper', r: 'rock', s: 'scissors'};
  // console.log(choices[userInput]);

  if (userInput === computerInput) {
    // if no winner, select again
    tiedGamesCount ++;
    console.log('no winner, select again');
    getUserInput();
  } else if (userInput === 'r' && computerInput === 's') { //rock beats scissors; winner = user
    userWinCount ++;
    winner = 'User';
    let winnerChoice = choices[userInput];
    let loserChoice = choices[computerInput];
    provideGameUpdate(winner, winnerChoice, userWinCount, loserChoice, computerWinCount, tiedGamesCount);

    // window.alert(`User wins = ${choices[userInput]} wins against ${choices[computerInput]}\nUser wins = ${userWinCount}\nComputerWins = ${computerWinCount}`);

    // getUserInput();
  } else if (userInput === 's' && computerInput === 'p') { //scissors beats paper; winner = users
    userWinCount ++;
    winner = 'User';
    let winnerChoice = choices[userInput];
    let loserChoice = choices[computerInput];
    provideGameUpdate(winner, winnerChoice, userWinCount, loserChoice, computerWinCount, tiedGamesCount);

    // window.alert(`User wins = ${choices[userInput]} wins against ${choices[computerInput]}\nUser wins = ${userWinCount}\nComputerWins = ${computerWinCount}`);

    // getUserInput();
  } else if (userInput === 'p' && computerInput === 'r') { //paper beats rock; winner = user
    userWinCount ++;
    winner = 'User';
    let winnerChoice = choices[userInput];
    let loserChoice = choices[computerInput];
    provideGameUpdate(winner, winnerChoice, userWinCount, loserChoice, computerWinCount, tiesGamesCount);
    
    // window.alert(`User wins = ${choices[userInput]} wins against ${choices[computerInput]}\nUser wins = ${userWinCount}\nComputerWins = ${computerWinCount}`);

    // getUserInput();
  } else { 
    computerWinCount ++;
    winner = 'Computer';
    let winnerChoice = choices[computerInput];
    let loserChoice = choices[userInput];
    provideGameUpdate(winner, winnerChoice, userWinCount, loserChoice, computerWinCount, tiedGamesCount);

    // window.alert(`Computer wins = ${choices[userInput]} wins against ${choices[computerInput]}\nUser wins = ${userWinCount}\nComputerWins = ${computerWinCount}`);  //winner = computer

    // getUserInput();
  }
}

function provideGameUpdate(winner, winnerChoice, userWinCount, loserChoice, computerWinCount, tiedGamesCount) {
  window.alert(`${winner} wins = ${winnerChoice} wins against ${loserChoice}\nUser Wins = ${userWinCount}\nComputer Wins = ${computerWinCount}\nTied Games = ${tiedGamesCount}`);
  // getUserInput();
  playAgain();
}

function playAgain() {
  let playMore = window.confirm(`Click "OK" to play again & "Cancel" to exit the game.`);
  console.log(playMore);
  if (playMore) {
    getUserInput();
  }
}


// if winner, create count for winner / loser

// count games

// provide alert stats after each win... then play again upon okay



