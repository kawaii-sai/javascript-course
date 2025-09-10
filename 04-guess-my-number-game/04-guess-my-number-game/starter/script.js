'use strict';

console.log('Game setup ready');

// DOM Element Selection
console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');

// Initialize Game State Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let playerName = 'Charles';
let attempts = 0;
let gameActive = true;

// Display Initial Game State
scoreEl.textContent = score;
highscoreEl.textContent = highscore;

// Event Listener for Check Button
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!!');
  const guess = Number(guessEl.value);

  if (!guess || guess < 1 || guess > 20) {
    messageEl.textContent = !guess ? 'No number!' : 'Number must be between 1 and 20';
    return;
  }

  if (guess === secretNumber) {
    messageEl.textContent = '🎉 Correct Number!';
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    messageEl.textContent = '🎉 You won!';
    guessEl.disabled = true;
    document.querySelector('.check').disabled = true;
  } else {
    if (guess > secretNumber) {
      messageEl.textContent = 'Too high!';
    } else {
      messageEl.textContent = 'Too low!';
    }

    score--;
    scoreEl.textContent = score;

    if (score < 1) {
      messageEl.textContent = '💥 You lost!';
      numberEl.textContent = secretNumber;
      guessEl.disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'red';
    }
  }
});

// Event Listener for Again Button (Reset Game)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  highscore = 0;

  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  scoreEl.textContent = score;
  guessEl.value = '';
  guessEl.disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
