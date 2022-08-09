// Array of choices that the computer can pick from.
const choice = ['rock', 'paper', 'scissors'];

// HTML Elements
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#playerScore');
const botScore = document.querySelector('#botScore');
const roundResult = document.querySelector('#roundResult');
const gameStatus = document.querySelector('#gameStatus');
const resetBtn = document.querySelector('#reset');
const computerImg = document.querySelector('.computerImg');

let playerRoundWins = 0;
let computerRoundWins = 0;

rock.addEventListener('click', () => {
  playRound("rock", getComputerChoice());
})
paper.addEventListener('click', () => {
  playRound("paper", getComputerChoice());
})
scissors.addEventListener('click', () => {
  playRound("scissors", getComputerChoice());
})
resetBtn.addEventListener('click', resetGame);
// This function grabs a random value from the above array and assigns it as the computers choice.
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(compChoice);
  computerImg.classList.remove('rock', 'paper', 'scissors');

  switch (compChoice) {

    case 'rock':
      computerImg.classList.add('rock');
      break;

    case 'paper':
      computerImg.classList.add('paper');
      break;

    case 'scissors':
      computerImg.classList.add('scissors');
      break;
  }
  return compChoice;
}

// This function takes the user and computer selection that will be grabbed with the two functions above and returns
// a value that determines who won the round.
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return roundResults("draw");
  }
  else if (playerSelection.toLowerCase() == 'rock') {
    return (computerSelection.toLowerCase() == 'paper') ? roundResults("lose") : roundResults("win");
  }
  else if (playerSelection.toLowerCase() == 'paper') {
    return (computerSelection.toLowerCase() == 'scissors') ? roundResults("lose") : roundResults("win");
  }
  else if (playerSelection.toLowerCase() == 'scissors') {
    return (computerSelection.toLowerCase() == 'rock') ? roundResults("lose") : roundResults("win");
  }
}

function roundResults(result) {
  switch (result) {
    case "win":
      playerRoundWins += 1;
      roundResult.textContent = "You win this round!";
      playerScore.textContent = `${playerRoundWins}`;
      botScore.textContent = `${computerRoundWins}`;
      break;

    case "lose":
      computerRoundWins += 1;
      roundResult.textContent = `You lost this round!`;
      playerScore.textContent = `${playerRoundWins}`;
      botScore.textContent = `${computerRoundWins}`;
      break;

    case "draw":
      roundResult.textContent = "This round is a draw!";
      break;

  }

  if (playerRoundWins >= 5) {
    gameStatus.textContent = 'Congratulations! You won!';
    gameStatus.style.color = '#17FD03';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
  else if (computerRoundWins >= 5) {
    gameStatus.textContent = 'Game Over! You lose!';
    gameStatus.style.color = 'red';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function resetGame() {
  window.location.reload();
}


// This is a cool that I am working with using VIM aka NeoVim
