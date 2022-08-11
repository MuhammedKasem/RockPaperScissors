// Array of choices that the computer can pick from.
const choice = ['Rock', 'Paper', 'Scissors'];

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
const playerImg = document.querySelector('.playerImg')
const roundOutcome = document.querySelector('.roundOutcome');

let playerRoundWins = 0;
let computerRoundWins = 0;

rock.addEventListener('click', () => {
  playRound("Rock", getComputerChoice());
  assignPlayerIcon("Rock");
})
paper.addEventListener('click', () => {
  playRound("Paper", getComputerChoice());
  assignPlayerIcon("Paper");
})
scissors.addEventListener('click', () => {
  playRound("Scissors", getComputerChoice());
  assignPlayerIcon("Scissors");
})
resetBtn.addEventListener('click', resetGame);
// This function grabs a random value from the above array and assigns it as the computers choice.
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  assignComputerIcon(compChoice);
  return compChoice;
}

function assignComputerIcon(compChoice) {
  computerImg.classList.remove('rock', 'paper', 'scissors');
  switch (compChoice) {

    case 'Rock':
      computerImg.classList.add('rock');
      break;

    case 'Paper':
      computerImg.classList.add('paper');
      break;

    case 'Scissors':
      computerImg.classList.add('scissors');
      break;
  }
}

  function assignPlayerIcon(playerChoice) {
    playerImg.classList.remove('rock', 'paper', 'scissors');
    switch (playerChoice) {

      case 'Rock':
        playerImg.classList.add('rock');
        break;

      case 'Paper':
        playerImg.classList.add('paper');
        break;

      case 'Scissors':
        playerImg.classList.add('scissors');
        break;
    }
  }

  // This function takes the user and computer selection that will be grabbed with the two functions above and returns
  // a value that determines who won the round.
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return roundResults(playerSelection, computerSelection, "draw");
    }
    else if (playerSelection == 'Rock') {
      return (computerSelection == 'Paper') ? roundResults(playerSelection, computerSelection, "lose") : roundResults(playerSelection, computerSelection, "win");
    }
    else if (playerSelection == 'Paper') {
      return (computerSelection == 'Scissors') ? roundResults(playerSelection, computerSelection, "lose") : roundResults(playerSelection, computerSelection, "win");
    }
    else if (playerSelection == 'Scissors') {
      return (computerSelection == 'Rock') ? roundResults(playerSelection, computerSelection, "lose") : roundResults(playerSelection, computerSelection, "win");
    }
    assignComputerIcon();
  }

  function roundResults(playerSelection, computerSelection, result) {
    switch (result) {
      case "win":
        playerRoundWins += 1;
        roundResult.textContent = "You win this round!";
        roundResult.style.color = '#17FD03';
        playerScore.textContent = `${playerRoundWins}`;
        botScore.textContent = `${computerRoundWins}`;
        roundOutcome.textContent = `${playerSelection} beats ${computerSelection}!`;
        roundOutcome.style.color = '#17FD03';
        break;

      case "lose":
        computerRoundWins += 1;
        roundResult.textContent = `You lost this round!`;
        roundResult.style.color = 'red';
        playerScore.textContent = `${playerRoundWins}`;
        botScore.textContent = `${computerRoundWins}`;
        roundOutcome.textContent = `${playerSelection} loses to ${computerSelection}!`;
        roundOutcome.style.color = "red";
        break;

      case "draw":
        roundResult.textContent = "This round is a draw!";
        roundResult.style.color = 'gold';
        roundOutcome.textContent = "Draw!";
        roundOutcome.style.color = 'gold';
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
