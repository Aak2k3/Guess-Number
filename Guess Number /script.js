'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='Correct Answer';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

let a = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent=a;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    if (!guess){
        // document.querySelector('.message').textContent='No number';
        displayMessage('no number billu')

    }else if(guess==a){
        displayMessage('correct Number 🥳');

        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '100vw'

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
        }

        

    }else if(guess!==a){
        if(score>1){
        displayMessage(guess > a ? "Too high" : "Too Low")
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            displayMessage('Booo!! You Lost');
            document.querySelector('.score').textContent='0';

        }
    }
    // else if(guess<a){

    //     if(score>1){
    //         document.querySelector('.message').textContent='Too Low 👇';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //         }else{
    //             document.querySelector('.message').textContent='Booo!! You Lost';
    //             document.querySelector('.score').textContent='0';
    //         }
    // }
})

document.querySelector('.again').addEventListener('click',function(){
     a = Math.trunc(Math.random()*20) + 1;
     score = 20;
     document.querySelector('.number').textContent=a;
     document.querySelector('.score').textContent='20';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('.guess').value='';

})
