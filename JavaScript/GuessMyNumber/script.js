'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('- No number!')
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('- Correct Number!')

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '- Too high' : '- Too low';
      displayMessage(guess > secretNumber ? '- Too high' : '- Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '- You lost the game'
      displayMessage('- You lost the game');
    }
  }

  // else if (guess > secretNumber && score > 0) {
  //   document.querySelector('.message').textContent = '- Too High!'
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess < secretNumber && score > 0) {
  //   document.querySelector('.message').textContent = '- Too Low!'
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = '- You lost the game'
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...'
  displayMessage('Start guessing...')
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});