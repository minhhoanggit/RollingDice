'use strict';

//get element
const player0El = document.querySelector('.player-0')
const player1El = document.querySelector('.player-1')

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current-0')
const current1El = document.getElementById('current-1')

const diceEl = document.querySelector('.dice')
const btnRollEl = document.querySelector('.btn-roll')
const btnHoldEl = document.querySelector('.btn-hold')
const btnNewEl = document.querySelector('.btn-new')

//conditions
const switchPlayer = function(){
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
}

diceEl.classList.add('hidden');
let scores, currentScore, activePlayer, playing;
const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');

    player0El.classList.remove('player-win');
    player1El.classList.remove('player-win');
    player0El.classList.add('player-active');
    player1El.classList.remove('player-active');
}
init();
//Rolling
btnRollEl.addEventListener('click', function(){
    if(playing){
        //1. generate random dice
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice)
        //2. display dice png
        diceEl.classList.remove('hidden');
        diceEl.src = `./images/dice-${dice}.png`;
        // console.log(diceEl.src)
        // current value
        if(dice !== 1){
            currentScore += dice;
            console.log(currentScore);
            document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        }else{ // switch player
            switchPlayer();
        }

    }
})

btnHoldEl.addEventListener('click', function(){
    if(playing){
    // console.log(currentScore);
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            playing =false;
            document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
            document.querySelector(`.player-${activePlayer}`).classList.add('player-win');
            diceEl.classList.add('hidden');

        }
        switchPlayer();
    }
})

btnNewEl.addEventListener('click', init)


