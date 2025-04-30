// Variables for the score.
let humanScore = 0;
let computerScore = 0;
// Necessary score to declare the winner.
const WINS = 5;
// Emojis for the choices in the DOM.
let hChoice = document.querySelector(".human-choice");
let cChoice = document.querySelector(".computer-choice");


// Function to get a random choice for the computer.
function getComputerChoice() {
    let randomValue = Math.random();

    // Split the 0 - 1 range of values in three parts of 0.33.
    if (randomValue > 0/3 && randomValue < 1/3) {
        cChoice.textContent = "👊🏻"; 
        return "ROCK";
    } else if (randomValue > 1/3 &&  randomValue < 2/3) {
        cChoice.textContent = "🖐🏻";
        return "PAPER";
    } else {
        cChoice.textContent = "✌🏻"; 
        return "SCISSORS"
    }
}


let humanChoice = "";
let buttonsChoice = document.querySelectorAll(".play");
// Get the human's choice listening for each button.
buttonsChoice.forEach(button => {
    button.addEventListener("click", () => {
        humanChoice = button.textContent;
        if (humanChoice == "👊🏻") {
            humanChoice = "ROCK";
            hChoice.textContent = "👊🏻";
        } else if (humanChoice == "🖐🏻") {
            humanChoice = "PAPER";
            hChoice.textContent = "🖐🏻";
        } else {
            humanChoice = "SCISSORS";
            hChoice.textContent = "✌🏻";
        }
        playRound(humanChoice, getComputerChoice());
    })
});


let historialOfDuels = document.querySelector(".historial");
let descDuel = document.createElement("p");
let score = document.querySelector(".score")

// Function to decide the winner of the duel.
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore++;
        descDuel.textContent = `${humanChoice} BEATS ${computerChoice}! YOU WIN.`;
        score.textContent = `${humanScore} - ${computerScore}`;

    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore++;
        descDuel.textContent = `${humanChoice} BEATS ${computerChoice}! YOU WIN.`;
        score.textContent = `${humanScore} - ${computerScore}`;

    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore++;
        descDuel.textContent = `${humanChoice} BEATS ${computerChoice}! YOU WIN.`;
        score.textContent = `${humanScore} - ${computerScore}`;

    } else if (humanChoice === computerChoice) {
        descDuel.textContent = `BOTH PICKED ${humanChoice}! YOU TIE.`;
        score.textContent = `${humanScore} - ${computerScore}`;

    } else {
        computerScore++;
        descDuel.textContent = `${humanChoice} LOSES TO ${computerChoice}! YOU LOSE.`;
        score.textContent = `${humanScore} - ${computerScore}`;
    }

    historialOfDuels.appendChild(descDuel);
    checkWinner();
}


function checkWinner() {
    if (humanScore == WINS || computerScore == WINS) {
        showResults();
        disable();
    }
}

// Variables to show the winner and restart the game.
let resultText = document.createElement("p");
resultText.classList.add("result-text");
let restartBtn = document.createElement("button");
restartBtn.textContent = "Play Again";
restartBtn.classList.add("restart-btn")
let body = document.querySelector("body");
body.appendChild(resultText);


// Shows the results after the game is finished.
function showResults() {
    if (humanScore > computerScore) {
        resultText.textContent = `You Won!`;
    } else if (humanScore < computerScore) {
        resultText.textContent = `You Lost!`;
    }
    restartBtn.style.display = "inline-block";
    body.appendChild(restartBtn);
    disable();
}

function disable() {
    buttonsChoice.forEach(button => {
    button.disabled = true;
    button.style.cursor = "default";
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    hChoice.textContent = "";
    cChoice.textContent = "";
    score.textContent = `${humanScore} - ${computerScore}`;
    resultText.textContent = "";
    descDuel.textContent = "";
}

restartBtn.addEventListener("click", () => {
    buttonsChoice.forEach(button => {
        button.disabled = false;
        button.style.cursor = "pointer";
    });
    resetGame();
    restartBtn.style.display = "none";
});