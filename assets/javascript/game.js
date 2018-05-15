// If letter right, mark as a win and restart
// If player exhausts all guesses, mark as a loss and restart

var wins = 0;
var losses = 0;
var guesses = 9;
var letters =
['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Empty array for guessed letters
var guessedLetters = [];

// Computer chooses random letter
var compRand = letters[Math.floor(Math.random() * letters.length)];
console.log(compRand);

// Player chooses random letter
document.onkeyup = function (event) {
    var playRand = event.key;
    console.log(playRand);

// If letter is wrong, mark down letter as previously guessed
    if (compRand != playRand) {
        (guesses-- && guessedLetters.push(playRand));
        console.log(guesses);
    }

// If letter right, mark as a win and restart
    if (compRand === playRand) {
        wins++
        console.log(wins);
    }
}
document.getElementById("game").innerHTML = "Wins: " + wins + "<br> Losses: " + losses + "<br> Guesses Left: " + guesses;
document.getElementById("guesses").innerHTML = "Your guesses so far: " + guessedLetters;