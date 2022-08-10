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
const playerImg = document.querySelector('.playerImg')

let playerRoundWins = 0;
let computerRoundWins = 0;

rock.addEventListener('click', () => {
  playRound("rock", getComputerChoice());
  assignPlayerIcon("rock");
})
paper.addEventListener('click', () => {
  playRound("paper", getComputerChoice());
  assignPlayerIcon("paper");
})
scissors.addEventListener('click', () => {
  playRound("scissors", getComputerChoice());
  assignPlayerIcon("scissors");
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
}

  function assignPlayerIcon(playerChoice) {

    playerImg.classList.remove('rock', 'paper', 'scissors');
    switch (playerChoice) {

      case 'rock':
        playerImg.classList.add('rock');
        break;

      case 'paper':
        playerImg.classList.add('paper');
        break;

      case 'scissors':
        playerImg.classList.add('scissors');
        break;
    }

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
    assignComputerIcon();
  }

  function roundResults(result) {
    switch (result) {
      case "win":
        playerRoundWins += 1;
        roundResult.textContent = "You win this round!";
        roundResult.style.color = '#17FD03';
        playerScore.textContent = `${playerRoundWins}`;
        botScore.textContent = `${computerRoundWins}`;
        break;

      case "lose":
        computerRoundWins += 1;
        roundResult.textContent = `You lost this round!`;
        roundResult.style.color = 'red';
        playerScore.textContent = `${playerRoundWins}`;
        botScore.textContent = `${computerRoundWins}`;
        break;

      case "draw":
        roundResult.textContent = "This round is a draw!";
        roundResult.style.color = 'gold';
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
