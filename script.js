'use strict';

const getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setTextContent = function (dom, message) {
  document.querySelector(dom).textContent = message;
};

let secretNumber = getRandomNumber();
let score = 20;
let highscore = 0;
let play = true;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  if (score <= 0 || !play) {
    return;
  }

  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    setTextContent('.message', '⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    setTextContent('.message', '🎉 Correct number!');
    setTextContent('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      setTextContent('.highscore', highscore);
    }

    play = false;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setTextContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
    } else {
      setTextContent('.message', '💥 You lost the game!');
      setTextContent('.score', 0);
    }

    score--;
    console.log('score:', score);
    setTextContent('.score', score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getRandomNumber();
  console.log(secretNumber);
  play = true;

  setTextContent('.message', 'Start guessing...');
  setTextContent('.score', score);
  setTextContent('.number', '?');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
