const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie, try it again!";
  }

  if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Rock'
  ) {
    return `You lose... ${playerSelection} loses to ${computerSelection} 🙁`;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection == 'Paper') {
    return `You win! ${playerSelection} beats ${computerSelection} 🥳`;
  }
};


const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(`Enter your choice: Rock, Paper or Scissors`).capitalize();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('Ya you won the game!! 🎉🎉🎉');
  } else if (playerScore < computerScore) {
    console.log('Oh no computer won the game 💀');
  } else {
    console.log("It's a tie!");
  }
};

// Helper function
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

game();