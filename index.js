const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('num-of-guesses');
const correctMessage = document.getElementById('correct');
// const rangeCheck = document.getElementById('range-check');

let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts++;
  if (guess < 1) {
    hideAllMessages();
      resetButton.style.display = '';
      //rangeCheck.style.display = '';
        tooLowMessage.innerHTML = 'You guessed too low. Try again.';
        // return;
    }
    if (guess > 99) {
      resetButton.style.display = '';
      //rangeCheck.style.display = '';
        tooHighMessage.innerHTML = 'You guessed too high. Try again.';
        // return;
    } else {
      resetButton.style.display = '';
      guessInput.value = '';
      //rangeCheck.style.display = 'none';
    }
  console.log(guess);
}

    // hideAllMessages();
  

  // if (guess < 1) {
  //   resetButton.style.display = 'none';
  //   rangeCheck.style.display = '';
  //   rangeCheck.innerHTML = "Must be greater than 0";
  //   //return;
  // }
  // if (guess > 99) {
  //   resetButton.style.display = 'none';
  //   rangeCheck.style.display = '';
  //   rangeCheck.innerHTML = "Must be less than 100";
  //   //return;
  // }

  // attempts = attempts++;
  // resetButton.style.display = '';

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = 'Congratulations, You guessed correctly! Would you like to play again?';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }  

  const remainingAttempts = maxNumberOfAttempts - attempts;
  if (guess < targetNumber) {
     //if (guess < targetNumber) {
      tooLowMessage.style.display = 'You guessed too low. Try again.';
    } else if (guess > targetNumber) {
      tooHighMessage.style.display = 'You guessed too high. Try again.';
    } else if (guess === targetNumber) {
      correctMessage.style.display = 'Congratulations, You guessed correctly! Would you like to play again?';
    } else if (attempts === maxNumberOfAttempts) {
      submitButton.disabled = true;
      guessInput.disabled = true;
      resetButton.disabled = false;
      maxGuessesMessage.style.display = 'You reached the max number of guesses.';
    }

    // const remainingAttempts = maxNumberOfAttempts - attempts;

    // numberOfGuessesMessage.style.display = '';
    // numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    // if (remainingAttempts === 1) {
    //   // numberOfGuessesMessage.style.display = '';
    //   // numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
    // } else {
    //   // numberOfGuessesMessage.style.display = '';
    //   // numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    // }
  

  // if (attempts === maxNumberOfAttempts) {
  //   submitButton.disabled = true;
  //   guessInput.disabled = true;
  //   resetButton.disabled = false;
  //   maxGuessesMessage.style.display = 'You reached the max number of guesses.';
  // }

  // guessInput.value = '';

  // resetButton.style.display = '';
  

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  // resetButton.disabled = true;
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  //maxNumberOfAttempts === 5;
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages(); 
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
