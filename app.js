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
  console.log(gamesPlayedCount);
  // console.log('userInput = ', userInput);
  validateUserInput(userInput);
}

// Validate User Input
function validateUserInput(userInput) {
  if (userInput === null) {
    return;
  } else if
    (userInput.toLowerCase() !== 'r' && 
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
    // tiedGamesCount++;
    console.log('no winner, select again');
    winner = 'Tie';
    // return startGame();
  } else if (userInput === 'r' && computerInput === 's') { //rock beats scissors; winner = user
    winner = 'Human';
    console.log(winner, 1)
  } else if (userInput === 's' && computerInput === 'p') { //scissors beats paper; winner = user
    winner = 'Human';
    console.log(winner, 2)
  } else if (userInput === 'p' && computerInput === 'r') { //paper beats rock; winner = user
    winner = 'Human';
    console.log(winner, 3)
  } else { //computer wins
    winner = 'Computer';
    console.log(winner, 4)
  }

  return provideGameUpdate(winner, userInput, computerInput);
}

function provideGameUpdate(winner, userInput, computerInput) {
  console.log(winner, userInput, computerInput);
  let choices = {p: 'paper', r: 'rock', s: 'scissors'};
  let winnerInput;
  let loserInput;

  // winner === 'Human' ? 
  //   (winnerInput = choices[userInput], loserInput = choices[computerInput], userWinCount++)
  //   : (winnerInput = choices[computerInput], loserInput = choices[userInput], computerWinCount++); 

  if (winner === 'Human') {
    winnerInput = choices[userInput];
    loserInput = choices[computerInput];
    userWinCount++;
  } else if (winner === 'Computer') {
    winnerInput = choices[computerInput];
    loserInput = choices[userInput];
    computerWinCount++;
    console.log('computer count')
  } else {
    tiedGamesCount++;
    console.log('tie count')
  }

    
  let totalGameCount = userWinCount + computerWinCount + tiedGamesCount;

  let userWinPercent = userWinCount === 0 ? 0 : Math.round(userWinCount / totalGameCount * 100);
  let computerWinPercent = computerWinCount === 0 ? 0 : Math.round(computerWinCount / totalGameCount * 100);
  let tiedGamePercent = tiedGamesCount === 0 ? 0 : Math.round(tiedGamesCount / totalGameCount * 100);

  console.log(totalGameCount, userWinPercent, computerWinCount, tiedGamePercent);

  if (winner === 'Tie') {
    window.alert(`Human selects ${choices[userInput]}.\nComputer selects ${choices[computerInput]}.\n\nIT'S A TIE\n\nHumanr Win Count = ${userWinCount}, Percent = ${userWinPercent}%\nComputer Win Count = ${computerWinCount}, Percent = ${computerWinPercent}%\nTied Game Count = ${tiedGamesCount}, Percent = ${tiedGamePercent}%\nTotal Game Count = ${totalGameCount}`);
    // return playAgain();  
  } else {
    window.alert(`Human selects ${choices[userInput]}.\nComputer selects ${choices[computerInput]}.\n\nWINNER ${winner.toUpperCase()}\n${winnerInput.toUpperCase()} wins against ${loserInput.toUpperCase()}\n\nHuman Win Count = ${userWinCount}, Percent = ${userWinPercent}%\nComputer Win Count = ${computerWinCount}, Percent = ${computerWinPercent}%\nTied Game Count = ${tiedGamesCount}, Percent = ${tiedGamePercent}%\nTotal Game Count = ${totalGameCount}`)
  };

  gameSummary.innerHTML = `
    <p><strong>GAME SUMMARY</strong></p>
    <p>User Win Count = ${userWinCount}, Percent = ${userWinPercent}%</p>
    <p>Computer Win Count = ${computerWinCount}, Percent = ${computerWinPercent}%</p>
    <p>Tied Game Count = ${tiedGamesCount}, Percent = ${tiedGamePercent}%</p>
    <p>Total Game Count = ${totalGameCount}</p>
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



