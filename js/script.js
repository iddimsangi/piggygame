'use strict';
const playerO1 = document.querySelector('.player--0');
const playerO2 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const currentScorePl1 = document.querySelector('#current--0');
const scorePl1 = document.querySelector('#score--0');
let playerActive = 0;
let currentScore = 0;
diceImg.classList.add('hidden');
btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `../img/dice-${dice}.png`;
  playerO1.classList.remove('player--active');
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.querySelector(`#current--${playerActive}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${playerActive}`).textContent = 0;
    playerO1.classList.toggle('player--active');
    playerO2.classList.toggle('player--active');
  }
});
