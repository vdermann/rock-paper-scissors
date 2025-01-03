let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
const ROUNDS = 5;

function getComputerChoice() {
    let randomValue = Math.random();

    if (randomValue > 0/3 && randomValue < 1/3) {
        return "Rock";
    } else if (randomValue > 1/3 &&  randomValue < 2/3) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let promptValue = prompt("Choose rock, paper or scissors: ");
    promptValue = promptValue.toLowerCase();
    return promptValue.charAt(0).toUpperCase() + promptValue.slice(1);
}

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

function playGame() {
    for (let i = 0; i < ROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    showResult();
}

playGame();