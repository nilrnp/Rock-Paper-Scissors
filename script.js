const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#reset");
const currentWinner = document.querySelector("#currentWinner");
const playerWins = document.querySelector("#playerWinCount");
const compWins = document.querySelector("#computerWinCount");
let playerWinCount = 0;
let compWinCount = 0;

rock.addEventListener('click', function () {
  let computerChoice = getComputerChoice();
  let playerChoice = 0;
  playRound(playerChoice, computerChoice);
})

paper.addEventListener('click', function () {
  let computerChoice = getComputerChoice();
  let playerChoice = 1;
  playRound(playerChoice, computerChoice);
})

scissors.addEventListener('click', function () {
  let computerChoice = getComputerChoice();
  let playerChoice = 2;
  playRound(playerChoice, computerChoice);
})

reset.addEventListener('click', resetGame);

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice == 0) {
    return 0;
  }
  else if (compChoice == 1) {
    return 1;
  }
  else {
    return 2;
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    currentWinner.textContent = "Tie!";
  }
  else if (playerChoice == 0 && computerChoice == 2) {
    playerWinCount += 1;
    playerWins.textContent = playerWinCount;
    currentWinner.textContent = "Player Wins!";
  }
  else if (playerChoice == 1 && computerChoice == 0) {
    playerWinCount += 1;
    playerWins.textContent = playerWinCount;
    currentWinner.textContent = "Player Wins!";
  }
  else if (playerChoice == 2 && computerChoice == 1) {
    playerWinCount += 1;
    playerWins.textContent = playerWinCount;
    currentWinner.textContent = "Player Wins!";
  }
  else {
    compWinCount += 1;
    compWins.textContent = compWinCount;
    currentWinner.textContent = "Computer Wins!";
  }

  if (playerWinCount === 5 || compWinCount === 5) {
    resetGame();
  }
}

function resetGame() {
  playerWinCount = 0;
  compWinCount = 0;
  playerWins.textContent = playerWinCount;
  compWins.textContent = compWinCount;
  currentWinner.textContent = "Press buttons below to play.";
}
