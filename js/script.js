'use strict';
const playerO1 = document.querySelector('.player--0');
const playerO2 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const player01Score = document.querySelector('#score--0');
const player02Score = document.querySelector('#score--1');
const currentScorePl1 = document.querySelector('#current--0');
const scorePl1 = document.querySelector('#score--0');
const scores = [0, 0];
let playerActive = 0;
let currentScore = 0;
diceImg.classList.add('hidden');
player01Score.textContent = 0;
player02Score.textContent = 0;
btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `../img/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.querySelector(`#current--${playerActive}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${playerActive}`).textContent = 0;
    currentScore = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    playerO1.classList.toggle('player--active');
    playerO2.classList.toggle('player--active');
  }
});
