
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var userChoice= [];
// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;
function restartGame(){
    guesses = 10;
    userChoice = [];
}
// function noRepeat(){
//     if(userChoice )
// }

document.onkeyup = function (event) {
    var userGuess = event.key;
    userChoice.push(userGuess);
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


    if (userGuess === computerChoice) {
        wins++;
        alert("WOW, YOUR A PSYCHIC!!!!");
         restartGame()
    }
    else {
        guesses--;
    }
    if(guesses === 0){
        losses++;
        restartGame();
    }


    document.getElementById("wins").innerHTML =  wins;
    document.getElementById('losses').innerHTML =  losses;
    document.getElementById('guesses').innerHTML =  guesses;
    document.getElementById("choices").innerHTML = userChoice;

} 