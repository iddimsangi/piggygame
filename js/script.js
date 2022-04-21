'use strict';
const playerO1 = document.querySelector('.player--0');
const playerO2 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const player01Score = document.querySelector('#score--0');
const player02Score = document.querySelector('#score--1');
const currentScorePl1 = document.querySelector('#current--0');
const scorePl1 = document.querySelector('#score--0');

const resetHandler = () => {
  diceImg.classList.add('hidden');
  player01Score.textContent = 0;
  player02Score.textContent = 0;
  player01Score.textContent = 0;
  player02Score.textContent = 0;
  document.querySelector(`#name--0`).textContent = `PLAYER 1`;
  document.querySelector(`#name--1`).textContent = `PLAYER 2`;
  scores = [0, 0];
};

let scores = [0, 0];
let playerActive = 0;
let currentScore = 0;
resetHandler();

const switchPlayerHandler = () => {
  document.querySelector(`#current--${playerActive}`).textContent = 0;
  currentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  playerO1.classList.toggle('player--active');
  playerO2.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `../img/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.querySelector(`#current--${playerActive}`).textContent =
      currentScore;
  } else {
    switchPlayerHandler();
  }
});
btnHold.addEventListener('click', () => {
  scores[playerActive] += currentScore;
  if (scores[playerActive] > 30) {
    document.querySelector(`#score--${playerActive}`).textContent =
      scores[playerActive];
    diceImg.classList.add('hidden');
    document
      .querySelector(`.player--${playerActive}`)
      .classList.add('player--winner');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    document.querySelector(`#current--${playerActive}`).textContent = 0;
    currentScore = 0;
    document.querySelector(`#name--${playerActive}`).textContent = 'WINNER';
  } else {
    document.querySelector(`#score--${playerActive}`).textContent =
      scores[playerActive];
    diceImg.classList.add('hidden');
    switchPlayerHandler();
  }
});
btnNew.addEventListener('click', () => {
  document
    .querySelector(`.player--${playerActive}`)
    .classList.remove('player--winner');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  resetHandler();
});
