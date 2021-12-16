'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

let displaymessage = function(message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.message').textContent=
    // 'Number is correct 🥇';
    console.log(typeof guess);

    if(!guess){
        // document.querySelector('.message').textContent= '⛔ Enter Number';
        displaymessage('⛔ Enter Number');
        }  else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        // document.querySelector('.message').textContent= 'Correct You win! 🏆';
        displaymessage('Correct you win 🏆');
        document.querySelector('body').style.backgroundColor = 'rgb(141, 194, 71)';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.score').textContent = score;
        if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore; }
        // } else {
        //     document.querySelector('.highscore').textContent = highscore;
        // }
        }   else         
        // document.querySelector('.message').textContent= guess > secretNumber ? 'Value too high' : 'Value too low';
        displaymessage(guess > secretNumber ? 'Value too high' : 'Value too low');
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            // document.querySelector('.message').textContent= 'You lost the game! ';
            displaymessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    // }   else if(guess < secretNumber){
    //     document.querySelector('.message').textContent= 'Value is Low!';
        
    //     if(score > 1){
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else{
    //         document.querySelector('.message').textContent= 'You lost the game! ';
    //         document.querySelector('.score').textContent = 0;
    //     }
    }
//  }
 );

 document.querySelector('.again').addEventListener(
     'click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        // document.querySelector('.message').textContent= 'Start guessing...';
        displaymessage('Start guessing...');
        document.querySelector('.score').textContent= score;
        document.querySelector('.guess').value= '';
        document.querySelector('body').style.backgroundColor= '#222';
        document.querySelector('.number').style.width= '15rem';
        document.querySelector('.number').textContent= '?';
     }
 )