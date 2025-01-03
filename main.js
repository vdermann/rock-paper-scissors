let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomValue = Math.random();
    console.log(randomValue);

    if (randomValue > 0/3 && randomValue < 1/3) {
        return "Rock";
    } else if (randomValue > 1/3 &&  randomValue < 2/3) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors: ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}

