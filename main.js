let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    if(computerChoice === 0) {
        return "rock";
    } else if(computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice () {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

console.log(getHumanChoice());

function playRound (humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "It's a Tie!";
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You Win!";
    } else {
        return "The Computer Wins!";
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);