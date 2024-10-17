let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const resetGame = document.getElementById("resetGame");

submitGuess.addEventListener("click", function () {
  const userGuess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts--;

  if (userGuess === randomNumber) {
    feedback.textContent = "Congratulations! You guessed it right!";
    endGame();
  } else if (attempts === 0) {
    feedback.textContent = `Sorry, you've run out of attempts. The number was ${randomNumber}.`;
    endGame();
  } else if (userGuess < randomNumber) {
    feedback.textContent = `Too low! You have ${attempts} attempts left.`;
  } else {
    feedback.textContent = `Too high! You have ${attempts} attempts left.`;
  }

  guessInput.value = "";
});

function endGame() {
  guessInput.disabled = true;
  submitGuess.disabled = true;
  resetGame.style.display = "block";
}

resetGame.addEventListener("click", function () {
  attempts = 3;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  feedback.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitGuess.disabled = false;
  resetGame.style.display = "none";
});
