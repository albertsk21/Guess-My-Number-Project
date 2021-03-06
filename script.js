'use strict';

let number = Math.trunc(Math.random() * 40) + 1;
let score = 15;
let highScore = -1;
let lose = 0;

// ---- Output for the clas message ---- //
function getMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
  if (lose >= 1) {
    highScore = 0;
    document.querySelector('.highscore').textContent = highScore;
  }

  score = 15;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 40) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  getMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
});

if (score > 1) {
  document.querySelector('.check').addEventListener('click', function () {
    let numberGuess = Number(document.querySelector('.guess').value);

    if (!numberGuess) {
      getMessage('No Number :(');
    } else if (numberGuess === number) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = number;
      getMessage('Correct Number');

      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (numberGuess !== number) {
      if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent =
          numberGuess > number ? ' too high' : 'too low';
      } else {
        document.querySelector('body').style.backgroundColor = '#ff0000';
        getMessage('You lost the game');
        lose = lose + 1;
      }
    }
  });
}
