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

function getHumanChoice () {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("The Score is Player: " + humanScore + ", Computer: " + computerScore);
    }
}

playGame();