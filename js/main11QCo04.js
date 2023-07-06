// Your First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    console.log(playerChoice); // string
} else {
    alert("Ok, maybe next time.");
}