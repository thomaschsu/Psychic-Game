// Variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessedLetters = [];
var guessesLeft = 9;

// Functions that update wins, losses, guessesleft
function updateWins() {
    document.querySelector("#wins").innerHTML = "<b>Wins: </b>" + wins;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "<b>Losses: </b>" + losses;
}

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "<b>Guesses Left: </b>" + guessesLeft;
}

function updateGuessedLetters() {
    document.querySelector("#guessedLetters").innerHTML = "<b>Your guesses so far: <br></b>[ " + guessedLetters.join(', ') + ' ]';
}

// Function for restarting the game
function restartGame() {
    guessesLeft = 9;
    guessedLetters = [];
    renderLetter();
    updateGuessesLeft();
    updateGuessedLetters();
}

renderLetter();
updateWins();
updateLosses();
updateGuessesLeft();
updateGuessedLetters();

// Computer chooses random letter
function renderLetter() {
    var compRand = letters[Math.floor(Math.random() * letters.length)];

    // Player chooses random letter
    document.onkeyup = function(event) {
        var playRand = event.key.toLowerCase();

        // If player pushs a-z, game starts
        if ((playRand === 'a') || (playRand === 'b') || (playRand === 'c') || (playRand === 'd') || (playRand === 'e') ||
            (playRand === 'f') || (playRand === 'g') || (playRand === 'h') || (playRand === 'i') || (playRand === 'j') ||
            (playRand === 'k') || (playRand === 'l') || (playRand === 'm') || (playRand === 'n') || (playRand === 'o') ||
            (playRand === 'p') || (playRand === 'q') || (playRand === 'r') || (playRand === 's') || (playRand === 't') ||
            (playRand === 'u') || (playRand === 'v') || (playRand === 'w') || (playRand === 'x') || (playRand === 'y') ||
            (playRand === 'z')) {

            // If letter is incorrect, push it to the empty array
            if (compRand != playRand) {
                (guessedLetters.push(playRand) && guessesLeft--);
                updateGuessedLetters();
                updateGuessesLeft();
            }

            // If letter is correct, mark as a win and restart
            if (compRand == playRand) {
                wins++;
                updateWins();
                alert("Good job! You got the correct letter! You're def a psychic.");
                renderLetter();
                restartGame();
            }

            // If player exhausts all guesses, mark as a loss and restart
            if (guessesLeft == 0) {
                losses++;
                updateLosses();
                alert("You lost! Nice try though.");
                renderLetter();
                restartGame();
            }

        }

    }
};