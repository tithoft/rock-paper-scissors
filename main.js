function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());