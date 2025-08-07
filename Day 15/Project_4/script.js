const startGameBtn = document.querySelector("#start-game");
const form = document.querySelector("#input-data");
let userInput = document.querySelector("#number");
const submitBtn = document.querySelector("form button[type=submit]");
const remaining = document.querySelector("#remaining span");
const userGuesses = document.querySelector("#your-guesses span");
const result = document.querySelector("#result span");
const generatedNumber = document.querySelector("#generated-number span");

let remainingAttempts;
let randomNumber;

startGameBtn.addEventListener("click", function () {
  startGameBtn.classList.add("turned-off");
  startGameBtn.setAttribute("disabled", "");
  userInput.removeAttribute("disabled", "");
  submitBtn.classList.remove("turned-off");
  submitBtn.removeAttribute("disabled", "");

  randomNumber = Math.floor(Math.random() * 100 + 1);

  remainingAttempts = 8;
  remaining.innerText = remainingAttempts;
  userGuesses.innerText = "empty";
  result.innerText = "Pending...";
  generatedNumber.innerText = "...";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userNumber = parseInt(userInput.value);
  checkGuess(userNumber);
  userInput.value = "";
});

function checkGuess(userNumber) {
  const hint = document.querySelector("#hint span");

  remainingAttempts--;
  displayInfo(userNumber);

  if (userNumber != randomNumber) {
    if (userNumber > randomNumber) {
      hint.innerText = "Your number is TOO high..!";
    } else {
      hint.innerText = "Your number is TOO less..!";
    }
  } else {
    hint.innerText = "...";
    endGame("You Win..!");
    return;
  }

  if (remainingAttempts == 0) {
    endGame("You Lose..!");
    return;
  }
}

function displayInfo(userNumber) {
  remaining.innerText = remainingAttempts;

  if (remainingAttempts == 7) {
    userGuesses.innerText = userNumber + ", ";
  } else if (remainingAttempts == 0) {
    userGuesses.innerText += userNumber;
  } else {
    userGuesses.innerText += userNumber + ", ";
  }
}

function endGame(message) {
  startGameBtn.classList.remove("turned-off");
  startGameBtn.removeAttribute("disabled", "");

  userInput.setAttribute("disabled", "");
  submitBtn.classList.add("turned-off");
  submitBtn.setAttribute("disabled", "");

  result.innerText = message;
  generatedNumber.innerText = randomNumber;
}
