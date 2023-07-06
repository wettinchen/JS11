// Your First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    // play
    console.log(playGame); // true
} else {
    alert("Ok, maybe next time.");
    console.log(playGame); // false
}