let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

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

function playRound (humanChoice) {
    const computerChoice = getComputerChoice();
    let roundResult = "";

    if(humanChoice === computerChoice) {
        roundResult = "It's a Tie!";
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore = humanScore + 1;
        roundResult = "You Win, " + humanChoice + " beats " + computerChoice + "!";
    } else {
        computerScore = computerScore + 1;
        roundResult = "The Computer Wins, " + computerChoice + " beats " + humanChoice + "!";
    }

    displayResults(roundResult);
}

function displayResults(result) {
    resultsDiv.textContent = result;
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultsDiv.textContent = "You are the Winner!";
    } else if (computerScore === 5) {
        resultsDiv.textContent = "The Computer is the Winner!";
    }
}

rockBtn.addEventListener("click", (event) => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));