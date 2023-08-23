const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const computerSelection = getComputerChoice();
console.log(`Computer choice: ${computerSelection}`);


const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie, try it again!";
  }

  if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Rock'
  ) {
    return `You lose... ${computerSelection} beats ${playerSelection} 🙁`;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection == 'Paper') {
    return `You win! ${playerSelection} beats ${computerSelection} 🥳`;
  }
};

const playerSelection = 'Rock';
console.log(playRound(playerSelection, computerSelection));