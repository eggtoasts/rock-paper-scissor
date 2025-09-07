//Rock beats scissors, scissors beat paper, paper beats rock
const choices = ["rock", "scissors", "paper"];

let humanScore = 0,
  computerScore = 0;

const choicesRef = document.querySelector(".choices");
const scoreContainer = document.querySelector(".score");

const humanText = document.querySelector(".human");
const computerText = document.querySelector(".computer");

const humanPickedText = document.querySelector(".humanPicked");
const computerPickedText = document.querySelector(".computerPicked");

let winLose = document.querySelector(".winLose");

let choice;

choicesRef.addEventListener("click", (event) => {
  if (humanScore < 5 && computerScore < 5) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    if (humanScore == 5 || computerScore == 5) {
      //Displays win/lose
      displayWinOrLose(humanScore, computerScore);

      //Add a new button asking the user to restart.
      const restartButton = document.createElement("button");
      restartButton.textContent = "Play Again?";
      restartButton.style.marginTop = "15px";
      scoreContainer.appendChild(restartButton);

      restartButton.addEventListener("click", () => {
        resetGame();

        scoreContainer.removeChild(restartButton);

        let winLoseText = document.querySelector(".winLoseText");

        winLose.removeChild(winLoseText);
      });
    }
  }
});

function winDisplay() {
  const newDiv = document.createElement("div");
  const winText = document.createElement("h2");

  winText.textContent = "You lose!";
  winText.setAttribute("class", "winLoseText");
  winText.style["align-self"] = "center";

  winLose.appendChild(winText);
}

function pickedDisplay(humanChoice, computerChoice) {
  humanPickedText.textContent = `${humanChoice}`;
  computerPickedText.textContent = `${computerChoice}`;
}

function loseDisplay() {
  const newDiv = document.createElement("div");
  const loseText = document.createElement("h2");

  loseText.textContent = "You lose!";
  loseText.setAttribute("class", "winLoseText");

  winLose.appendChild(loseText);
}

function displayWinOrLose(humanScore, computerScore) {
  winLose = document.querySelector(".winLose");
  if (humanScore > computerScore) {
    winDisplay();
  } else {
    loseDisplay();
  }
  winLose = document.querySelector(".winLose");
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  humanPickedText.textContent = "???";
  computerPickedText.textContent = "???";

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
  pickedDisplay(humanChoice, computerChoice);
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
