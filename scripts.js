function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  let player = prompt("Please enter your choice: ").toLowerCase();

  return player;
}

function game() {
  let currentRound = 0;
  let playerScore = 0;
  let compScore = 0;

  while (currentRound < 5) {
    let player = getPlayerChoice();

    switch (getComputerChoice()) {
      case 0:
        compChoice = "rock";
      case 1:
        compChoice = "paper";
      case 2:
        compChoice = "scissors";
    }

    if (player === compChoice) {
      console.log("It's a draw!");
    } else if (player === "rock") {
      if (compChoice === "scissors") {
        playerScore++;
        console.log(
          `Player used ${player} | Computer used ${compChoice}. Player won!`
        );
        console.log(
          `Current score: Player:${playerScore} | Computer:${compScore}`
        );
      } else {
        compScore++;
        console.log(
          `Player used ${player} | Computer used ${compChoice}. Computer won!`
        );
        console.log(
          `Current score: Player:${playerScore} | Computer:${compScore}`
        );
      }
    } else if (player === "paper") {
      if (compChoice === "rock") {
        playerScore++;
        console.log(
          `Player used ${player} | Computer used ${compChoice}. Player won!`
        );
        console.log(
          `Current score: Player:${playerScore} | Computer:${compScore}`
        );
      } else {
        compScore++;
        console.log(
          `Player used ${player} | Computer used ${compChoice}. Computer won!`
        );
        console.log(
          `Current score: Player:${playerScore} | Computer:${compScore}`
        );
      }
    } else if (player === "scissors") {
      if (compChoice === "paper") {
        playerScore++;
        console.log(
          `Player used ${player} | Computer used ${compChoice}. Player won!`
        );
        console.log(
          `Current score: Player:${playerScore} | Computer:${compScore}`
        );
      } else {
        compScore++;
        console.log(
          `Player used ${player} | Computer used ${compChoice}. Computer won!`
        );
        console.log(
          `Current score: Player:${playerScore} | Computer:${compScore}`
        );
      }
    }
    currentRound++;
  }

  if (playerScore > compScore) {
    console.log(
      `And the winner is Player with a total score of ${playerScore} against Computer's ${compScore}`
    );
  } else {
    console.log(
      `And the winner is Computer with a total score of ${compScore} against Player's ${playerScore}`
    );
  }
}

game();
