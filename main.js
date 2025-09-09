let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

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

function getHumanChoice () {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

//function playGame() {

    function playRound (humanChoice) {
        const computerChoice = getComputerChoice();
        if(humanChoice === computerChoice) {
            return "It's a Tie!";
        } else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore = humanScore + 1;
            return "You Win, " + humanChoice + " beats " + computerChoice + "!";
        } else {
            computerScore = computerScore + 1;
            return "The Computer Wins, " + computerChoice + " beats " + humanChoice + "!";
        }
    }
//}

rockBtn.addEventListener("click", (event) => console.log("Button clicked"));
paperBtn.addEventListener("click", () => playRound("papaer"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

//playGame();