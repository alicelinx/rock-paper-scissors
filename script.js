const choices = ['rock', 'paper', 'scissors'];
const gestures = {
  "rock": '✊',
  "paper": '🖐️',
  "scissors": '✌️'
};
const buttons = document.querySelectorAll('button.gesture-button');
const scoreStatus = document.querySelector('.score');
const resultDisplay = document.querySelector('.result');
const restartButton = document.querySelector('button.restart-button');
const gestureDisplay = document.querySelector('.image-display');

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const updateScore = () => {
  scoreStatus.textContent = `YOU - ${playerScore}/5 : ${computerScore}/5 - BOT`;
};

const playRoundLogic = (playerSelection, computerSelection) => {
  gestureDisplay.textContent = `${gestures[playerSelection]} vs ${gestures[computerSelection]}`;
  if (playerSelection === computerSelection) {
    return "It's a tie, try it again!";
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return `Oh no! You lose... ☹︎`;
  }
  return `Hooray! You win! ☺︎`;

};

const playRound = (e) => {
  const playerSelection = e.target.getAttribute('data-gesture');
  const computerSelection = getComputerChoice();
  const result = playRoundLogic(playerSelection, computerSelection);

  resultDisplay.textContent = result;

  if (result.includes('win')) {
    playerScore++;

  } else if (result.includes('lose')) {
    computerScore++;

  }
  updateScore();

  if (playerScore >= 5) {
    resultDisplay.textContent = '🎉 You won the game! 🎉';
    buttons.forEach(button => button.removeEventListener('click', playRound));
  } else if (computerScore >= 5) {
    resultDisplay.textContent = '💀 Bot won the game! 💀';
    buttons.forEach(button => button.removeEventListener('click', playRound));
  }
};

const restartGame = () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultDisplay.textContent = null;
  gestureDisplay.textContent = null;
  buttons.forEach(button => button.addEventListener('click', playRound));
};

restartButton.addEventListener('click', restartGame);

buttons.forEach(button => button.addEventListener('click', playRound));

updateScore();
