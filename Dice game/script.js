'use strict';
const player01EL = document.querySelector('.player--0');
const player02EL = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');  // both works for Id's 
const score1 = document.getElementById('score--1');  // but this is one is cosider faster
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceimg = document.querySelector('.dice');
const btnNEW_GAME = document.querySelector('.btn--new');
const btnROLL = document.querySelector('.btn--roll');
const btnHOLD = document.querySelector('.btn--hold');
let scores = [0,0];           // storing the scores of both the players (player-0, player-1)
let currentscore = 0;           // points score during the dice roll
let currentplayer = 0;          
score0.textContent = 0;
score1.textContent = 0;

let playing = true;



const switchplayer = function(){
    currentscore = 0;
    document.getElementById(`current--${currentplayer}`).textContent = currentscore
        currentplayer = currentplayer === 0 ? 1:0;
        player01EL.classList.toggle('player--active');
        player02EL.classList.toggle('player--active');
}

// dice img is kept initially hidden
diceimg.classList.add('hidden');

// Function to the Roll dice button 
btnROLL.addEventListener('click', function(){
    if(playing){
    const diceroll = Math.trunc(Math.random()*6 + 1);
    // console.log(diceroll);
    diceimg.classList.remove('hidden');
    diceimg.src = `dice-${diceroll}.png`;
    // checking whether dice result is 1. 
    if(diceroll !== 1){

        // 1. If dice != 1 ..... getting to result to current score
        currentscore += diceroll;
        console.log(currentscore);
        document.getElementById(`current--${currentplayer}`).textContent = currentscore;
       
    }else{ 
        // If the dice is rolled to one, switching to the other player  
        switchplayer();
    }
    }
})

// Functioning the hold button
btnHOLD.addEventListener('click', function(){
    if (playing){

    // 1. Adding currentscore to the total score before switching player
    scores[currentplayer] += currentscore;
    document.getElementById(`score--${currentplayer}`).textContent = scores[currentplayer];
    // Final result----where player wins 
    if (scores[currentplayer] >= 20){
        playing = false;
        document.querySelector(`.crown--${currentplayer}`).classList.remove('hidden');
        document.querySelector(`.player--${currentplayer}`).classList.remove('player--active');
        document.querySelector(`.player--${currentplayer}`).classList.add('player--winner');
        diceimg.classList.add('hidden');
        
    } else{
        switchplayer();
    }
    }
})




// Reset button ///////////////////////
btnNEW_GAME.addEventListener('click', function(){
    document.querySelector(`.player--${currentplayer}`).classList.remove('player--winner');
    diceimg.classList.add('hidden');
    currentscore = 0;
    currentplayer = 0;
    scores[0] = 0;
    scores[1] = 0;
    document.querySelector(`.crown--0`).classList.add('hidden');
    document.querySelector(`.crown--1`).classList.add('hidden');
    player01EL.classList.add('player--active');
    player02EL.classList.remove('player--active');
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    // document.querySelector(`.player--${currentplayer}`).classList.add('player--active');
    score0.textContent = 0;
    score1.textContent = 0;
    playing = true;
})
