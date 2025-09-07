//Rock beats scissors, scissors beat paper, paper beats rock
const choices = ["rock", "scissors", "paper"];

let humanScore = 0,
  computerScore = 0;

const choicesRef = document.querySelector(".choices");
const scoreContainer = document.querySelector(".score");

const humanText = document.querySelector(".human");
const computerText = document.querySelector(".computer");

let choice;

choicesRef.addEventListener("click", (event) => {
  if (humanScore < 5 && computerScore < 5) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    if (humanScore == 5 || computerScore == 5) {
      displayWinOrLose(humanScore, computerScore);
      //Add a new button asking the user to restart.
      const restartButton = document.createElement("button");
      restartButton.textContent = "Play Again?";
      scoreContainer.appendChild(restartButton);

      restartButton.addEventListener("click", () => {
        resetGame();

        scoreContainer.removeChild(restartButton);
      });
    }
  }
});

function displayWinOrLose(humanScore, computerScore) {
  if (humanScore > computerScore) {
    alert("u win");
  } else {
    alert("u lose!");
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  updateScore();
}

//Randomly picks between rock, scissors or paper
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

//Asks user to pick a choice
function getHumanChoice(event) {
  choice = event.target.id;
  return choice;
}

//Compares choices and determines who wins/loses.
function checkChoice(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("You tie!~");
  } else if (
    (choices.findIndex((e) => e === humanChoice) + 1) % 3 ==
    choices.findIndex((e) => e === computerChoice)
  ) {
    console.log("You win!~");
    humanScore++;
  } else {
    console.log("You lose!~");
    computerScore++;
  }

  updateScore();
}

//updates our score UI
function updateScore() {
  humanText.textContent = humanScore;
  computerText.textContent = computerScore;
}

//Gets choices from user and the computer and passes it into checkChoice
function playRound(humanChoice, computerChoice) {
  console.log("Human choice is " + humanChoice);
  console.log("Computer choice is " + computerChoice);

  checkChoice(humanChoice, computerChoice);
}
