// Declare variables for the score.
let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
// Rounds to be played.
const ROUNDS = 5;

// Function to get a random choice for the computer.
function getComputerChoice() {
    let randomValue = Math.random();

    // Split the 0 - 1 range of values in three parts of 0.33.
    if (randomValue > 0/3 && randomValue < 1/3) {
        return "Rock";
    } else if (randomValue > 1/3 &&  randomValue < 2/3) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

// Function to get the user's choice.
function getHumanChoice() {
    let promptValue = prompt("Choose rock, paper or scissors: ");
    promptValue = promptValue.toLowerCase();
    // Grab the first letter and capitalize it, then add the rest.
    return promptValue.charAt(0).toUpperCase() + promptValue.slice(1);
}

// Function to decide the winner of the duel.
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`You Tie! Both picked ${humanChoice}.`);
        tieCounter++
    } else {
        console.log(`You Lost! ${humanChoice} loses to ${computerChoice}.`);
        computerScore++;
    }
}

// Shows the results after the game is finished.
function showResult() {
    if (humanScore > computerScore) {
        console.log(`You Won!`);
        console.log(`Human: ${humanScore}.`);
        console.log(`Computer: ${computerScore}.`);
        console.log(`Ties: ${tieCounter}.`);
    } else if (humanScore < computerScore) {
        console.log(`You Lost!`);
        console.log(`Human: ${humanScore}.`);
        console.log(`Computer: ${computerScore}.`);
        console.log(`Ties: ${tieCounter}.`);
    } else {
        console.log(`You Tied!`);
        console.log(`Human: ${humanScore}.`);
        console.log(`Computer: ${computerScore}.`);
        console.log(`Ties: ${tieCounter}.`);
    }
}

// It is played for 5 rounds.
function playGame() {
    for (let i = 0; i < ROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    showResult();
}
playGame();