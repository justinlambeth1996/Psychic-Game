var wins = 0;
var losses = 0;

var numWinsP = document.getElementById("numWins");
var numLossesP = document.getElementById("numLosses");
var numAttemptsP = document.getElementById("numAttempts");
var numAttemptsSoFarP = document.getElementById("numAttemptsSoFar");

// Only on page load - only runs once!
var computerLetter = newGame();
var attempts = 10;
var attemptsSoFar = 0;



document.onkeyup = function (event) {

      // write to the guesses so far div/p


      var choice = event.key;
      // Choice is right!
      if (choice === computerLetter) {
            wins++;
            alert("You Win!");

            console.log(computerLetter);
            numWinsP.textContent = "Wins: " + wins;
            // Write the number of wins to the document
            var computerLetter = newGame();

      }
      // Choice is wrong AND they have attempts left
      else if (choice != computerLetter && attempts > 0) {
            attempts--;
            attemptsSoFar++;
            alert("Wrong guess!");

            // write the number of attempts left? to the document
            numAttemptsP.textContent = "Attempts: " + attempts;
            numAttemptsSoFarP.textContent = "Attempts So Far: " + attemptsSoFar;
      }
      else if (choice != computerLetter && attempts === 0) {
            losses++;
            alert("Game over!");
            numLossesP.textContent = "Losses: " + losses;
            // write the number of losses to the document
            // Game needs to be restarted
            var computerLetter = newGame();
      }
}

function newGame() {
      var letters = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
      var lettersArr = letters.split("");
      var returnLetter = lettersArr[Math.floor(Math.random() * lettersArr.length)];
      // reset the guesses so far div/p
      attempts = 10;
      numAttemptsP.textContent = "Attempts: " + attempts;
      attemptsSoFar = 0;
      numAttemptsSoFarP.textContent = "Attempts So Far: " + attemptsSoFar;
      return returnLetter;

}



