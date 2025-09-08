//Rock beats scissors, scissors beat paper, paper beats rock
const choices = ["Rock 🪨", "Scissors ✂️", "Paper 📄"];

let humanScore = 0,
  computerScore = 0;

const choicesRef = document.querySelector(".choices");
const scoreContainer = document.querySelector(".score");

const humanText = document.querySelector(".human");
const computerText = document.querySelector(".computer");

const humanPickedText = document.querySelector(".humanPicked");
const computerPickedText = document.querySelector(".computerPicked");

const winLoseText = document.querySelector(".winLoseText");
const restartButton = document.querySelector(".resetButton");

const roundText = document.querySelector(".round");

let winLose = document.querySelector(".winLose");

let choice;

choicesRef.addEventListener("click", (event) => {
  if (event.target.id == "") return;
  if (humanScore < 5 && computerScore < 5) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    if (humanScore == 5 || computerScore == 5) {
      //Toggles a reset button asking the user to restart.
      winLose.setAttribute("class", "winLose item opacity");
      restartButton.setAttribute("class", "resetButton opacity");
      //Displays win/lose
      displayWinOrLose(humanScore, computerScore);

      restartButton.addEventListener("click", () => {
        winLose.setAttribute("class", "winLose item");
        restartButton.setAttribute("class", "resetButton");
        resetGame();
      });
    }
  }
});

function pickedDisplay(humanChoice, computerChoice) {
  humanPickedText.textContent = `${humanChoice}`;
  computerPickedText.textContent = `${computerChoice}`;
}

function winDisplay() {
  winLoseText.textContent = "You win!";
  winLoseText.setAttribute("class", "winLoseText win");
}

function loseDisplay() {
  winLoseText.textContent = "You lose!";
  winLoseText.setAttribute("class", "winLoseText lose");
}

function displayWinOrLose(humanScore, computerScore) {
  if (humanScore > computerScore) {
    winDisplay();
  } else {
    loseDisplay();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  humanPickedText.textContent = "???";
  computerPickedText.textContent = "???";

  roundText.textContent = "Reach 5 points to win!";

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

    roundText.textContent = "You both tied this round!";
  } else if (
    (choices.findIndex((e) => e === humanChoice) + 1) % 3 ==
    choices.findIndex((e) => e === computerChoice)
  ) {
    console.log("You win!~");
    humanScore++;
    roundText.textContent = "You won the round! 🎉";
  } else {
    console.log("You lose!~");
    computerScore++;
    roundText.textContent = "You lost the round! 😔";
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
