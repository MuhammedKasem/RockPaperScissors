// Array of choices that the computer can pick from.
const choice = ['Rock', 'Paper', 'Scissors']

// This function grabs a random value from the above array and assigns it as the computers choice.
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(compChoice);
  return compChoice;
}

// This function prompts the user for an input and stores their selection to be matched up later with the computers choice.
function getPlayerSelection() {
  let playerSelection = prompt("Enter rock paper or scissors:")
  return playerSelection;
}

// This function takes the user and computer selection that will be grabbed with the two functions above and returns
// a value that determines who won the round.
function playRound(playerSelection, computerSelection) {

  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "draw";
  }
  else if (playerSelection.toLowerCase() == 'rock') {
    return (computerSelection.toLowerCase() == 'paper') ? "lose" : "win";
  }
  else if (playerSelection.toLowerCase() == 'paper') {
    return (computerSelection.toLowerCase() == 'scissors') ? "lose" : "win";
  }
  else if (playerSelection.toLowerCase() == 'scissors') {
    return (computerSelection.toLowerCase() == 'rock') ? "lose" : "win";
  }
}
// This function is the only function that is called to run the program and plays a total of 5 rounds. The for loop
// breaks once a user reaches 5 wins and alerts the outcome of the game.
function game() {
  let playerRoundWins = 0;
  let computerRoundWins = 0;
  for (let i = 0; i < 5; i++) {
    let outcome = playRound(getPlayerSelection(), getComputerChoice());

    switch (outcome) {
      case 'draw':
        alert("This round is a draw!");
        i -= 1;
        break;

      case 'win':
        alert("You won this round!");
        playerRoundWins += 1;
        break;

      case 'lose':
        alert("You lost this round!");
        computerRoundWins += 1;
        break;
    }
  }
  (playerRoundWins > computerRoundWins) ? alert("Congrats you won the best of 5 rounds!") : alert("Sorry you lose! Better luck next time!");
}


game();

