//Rock beats scissors, scissors beat paper, paper beats rock
const choices = ["rock", "scissors", "paper"];

let humanScore = 0,
  computerScore = 0;

//Randomly picks between rock, scissors or paper
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

//Asks user to pick a choice
function getHumanChoice() {
  const choice = prompt("Rock, paper, scissors!");
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
}

//Gets choices from user and the computer and passes it into checkChoice
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log("Human choice is " + humanChoice);
  console.log("Computer choice is " + computerChoice);

  checkChoice(humanChoice, computerChoice);

  console.log(computerChoice);
}

//Plays the game with 5 rounds
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanAnswer = getHumanChoice();
    const computerAnswer = getComputerChoice();
    playRound(humanAnswer, computerAnswer);
  }
}

playGame();
