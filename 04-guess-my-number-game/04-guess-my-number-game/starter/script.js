'use strict';
 
console.log('Game setup ready');
 
//===== DOM Element Selection - The Foundation
console.log(`=== DOM ELEMENT SELECTION ===`);
 
const messageEl = document.querySelector(`.message`);
console.log(messageEl);
 
console.log(messageEl.textContent);
 
//messageEl.textContent = `Hello from JavaScript!`;
 
// access score class name
 
const scoreEl = document.querySelector(`.score`);
 
console.log(`Score Element:`, scoreEl);
 
const numberE1 = document.querySelector(`.number`);
//numberE1.textContent = 15;
 
const highscoreEl = document.querySelector(`.highscore`);
 
console.log(`Current highscore:`, highscoreEl.textContent);
 
const guessEl = document.querySelector(`.guess`);
 
//guessEl.value = 10;
 
console.log('Guess input value:', guessEl.value);
 
// Game State Variables
 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Debugging
console.log('Secret Number:', secretNumber);
 
let score = 20;
let highscore = 0;
 
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
 
console.log('Game state initialized');
 
// playerName attempts, gameActive
// and display to console
 
let playerName = 'Charles';
let attempts = 0;
let gameActive = true;
 
console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game Active:', gameActive);
 
// Basic Game logic
document.querySelector('.check').addEventListener('click', function () {
  // code here
  console.log('Check button clicked!!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return;
  }
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'Number must be between 1 and 20';
    return;
  }
 
  if (guess === secretNumber) {
    console.log('Correct guess');
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = 'secret number';
    if (guess === secretNumber) {
      console.log('Correct guess!');
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.body.style.backgroundColor = 'green';
      // Check if this is a new high score
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
 
      // Show win message and disable further guessing
      document.querySelector('.message').textContent = '🎉 You won!';
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
     
    }
  } else if (guess > secretNumber) {
    console.log('Too high');
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    console.log('Too low');
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = '💥 You lost!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'red';
 
      document.querySelector('.score').textContent = score;
    }
  }
});
// Reset Game Logic
document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button is working');
  // reset game state variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New Secret Number After Restart:', secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
 
});

