// Your First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissors";
            console.log(computer); // rock, paper, scissors
        } else {
            alert("You did not enter rock, paper, or scissors.");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Ok, maybe next time.");
}