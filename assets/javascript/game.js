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
    var wins = 0;
    var playRand = event.key;
    console.log(playRand);

// If letter is wrong, mark down letter as previously guessed
    if (compRand != playRand) {
        (guesses-- && guessedLetters.push(playRand));
        console.log(guesses);
    }

// If letter right, mark as a win and restart
    if (compRand === playRand) {
        wins++;
        console.log(wins);
    }
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guesses + "</p>" +
        "<p>Your guesses so far: " + guessedLetters + "</p>";
        document.querySelector("#game").innerHTML = html;
};