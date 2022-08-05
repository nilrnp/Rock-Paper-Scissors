function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3)
  if (compChoice == 0) {
    return 0
  }
  else if (compChoice == 1) {
    return 1
  }
  else {
    return 2
  }
}

function playRound(playerChoice, computerChoice) {
  console.log(playerChoice)
  console.log(computerChoice)
  if (playerChoice == computerChoice) {
    return "Tie!"
  }
  else if (playerChoice > computerChoice) {
    return "Player Wins!"
  }
  else {
    return "Computer Wins!"
  }
}

function main() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Enter Rock, Paper, or Scissors")
    let caseSensitive = playerSelection.toLowerCase()
    let computerChoice = getComputerChoice()
    let playerChoice = 0

    if (caseSensitive == "rock") {
      playerChoice = 0
    }
    else if (caseSensitive == "paper") {
      playerChoice = 1
    }
    else if (caseSensitive == "scissors") {
      playerChoice = 3
    }

    console.log(playRound(playerChoice, computerChoice))

  }
}

main()

