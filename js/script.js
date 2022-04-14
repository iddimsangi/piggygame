'use strict';
const btnRoll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const currentScorePl1 = document.querySelector('#current--0');
const scorePl1 = document.querySelector('#score--0');
let currentScore = 0;
diceImg.classList.add('hidden');
btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `../img/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore = currentScore + dice;
    currentScorePl1.textContent = currentScore;
  } else {
  }
});
