// Your First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        console.log(playerChoice); // string
    } else {
        alert("I guess you changed your mind. Maybe next time.");
        console.log(playerChoice); // null
    }
} else {
    alert("Ok, maybe next time.");
}