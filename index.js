const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('num-of-guesses');
const correctMessage = document.getElementById('correct');
const rangeCheck = document.getElementById('range-check');

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
  if (guess < 1) {
    hideAllMessages(); 
      resetButton.style.display = 'none';
      rangeCheck.style.display = '';
      rangeCheck.innerHTML = "Must be greater than 0";
      return;
    }
    if (guess > 99) {
      resetButton.style.display = 'none';
      rangeCheck.style.display = '';
      rangeCheck.innerHTML = "Must be less than 100";
      return;
    } else {
      resetButton.style.display = 'none';
      rangeCheck.style.display = 'none';
      attempts = attempts++;
    }
  console.log(guess);
}

    hideAllMessages();
  

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

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }  

  if (guess < targetNumber) {
     //if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else if (guess > targetNumber) {
      tooHighMessage.style.display = '';
    } else if (guess === targetNumber) {
      correctMessage.style.display = '';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    // numberOfGuessesMessage.style.display = '';
    // numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    if (remainingAttempts === 1) {
      numberOfGuessesMessage.style.display = '';
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
    } else {
      numberOfGuessesMessage.style.display = '';
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    }
  

  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = '';

  resetButton.style.display = '';
  

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
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
