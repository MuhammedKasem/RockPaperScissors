const choice = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(compChoice);
  return compChoice; // This function will give me one of the 3 options I defined in the choice array back.
}


function getPlayerSelection() {
  let playerSelection = prompt("Enter rock paper or scissors:")
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return alert("This round is a draw!"), "Its a draw!";
  }
  else if (playerSelection.toLowerCase() == 'rock') {
    return (computerSelection.toLowerCase() == 'paper') ? "You lose": "You win";
  }
  else if (playerSelection.toLowerCase() == 'paper') {
    return (computerSelection.toLowerCase() == 'scissors') ? "You lose": "You win";
  }
  else if (playerSelection.toLowerCase() == 'scissors') {
    return (computerSelection.toLowerCase() == 'rock') ? "You lose": "You win";
  }
}

function game () {
  let playerRoundWins = 0;
  let computerRoundWins = 0;
  for (let i = 0; i < 5; i++) {
    if (playRound(getPlayerSelection(),getComputerChoice()) == "You win") {
      playerRoundWins +=1;
      alert("You won this round!");
    }
    else if (playRound(getPlayerSelection(),getComputerChoice()) == "You lose") {
      computerRoundWins +=1;
      alert("You lose this round!");
    }
    else if (playRound(getPlayerSelection(),getComputerChoice()) == "Its a draw!") {
      alert("This round is a draw!");
    }
    // (playRound(getPlayerSelection(),getComputerChoice()) == "You win") ? playerRoundWins += 1 : computerRoundWins += 1;
  }
  (playerRoundWins > computerRoundWins) ? alert("Congrats you won the best of 5 rounds!") : alert("Sorry you lose! Better luck next time!");
  }




game();
// console.log(playRound(getPlayerSelection(), getComputerChoice()));

