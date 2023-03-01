'use strict';

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

// let secretNumber = Math.trunc(Math.random()*20) + 1  ; 


// let score = 20;
// let highscore = 0;
// const displayMessage = function(message){
//     document.querySelector('.message').textContent = message;
// }



// document.querySelector('.check') .addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess);
    
//     if(!guess){
//         // document.querySelector('.message').textContent = 'No Number!!'
//         displayMessage('No Number!!')
//     } else if (guess === secretNumber){
//         // document.querySelector('.message').textContent = 'You WIn👌✌️🙌!!'
//         displayMessage('You WIn👌✌️🙌!!');

//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';   

//         if (score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }

//     } else if (guess !== secretNumber) {
//         if (score > 1){
//             // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!!':'Too Low'
            
//             displayMessage(guess > secretNumber ? 'Too High!!':'Too Low');
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You Loose!!'
        
//             document.querySelector('.score').textContent = 0;

//         }
//     }
    
    
    // else if (guess > secretNumber){
    //     if (score > 1){
    //         document.querySelector('.message').textContent = 'Too High!!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Loose!!'
        
    //         document.querySelector('.score').textContent = 0;

    //     }
        
    // } else if (guess < secretNumber){
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Loose!!'
    //         document.querySelector('.score').textContent = 0;
              
    //     }
        
    // }

   
// })

// document.querySelector('.again').addEventListener('click' , function(){
//     // document.querySelector('.highscore').textContent = highscore;
//      secretNumber = Math.trunc(Math.random()*20) + 1  ;
//     // document.querySelector('.number').value = 'secretNumber';
//     score = 20;
//     document.querySelector('.message').textContent = 'Start Guessing!!' 
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = '#222';
//     // document.querySelector('.number').style.width ='15rem';
//     // highscore = score;
    
// })

let secretNumber = Math.trunc(Math.random()*20) + 1 ;
console.log(secretNumber);
let score = 20 ;
document.querySelector('.score').textContent = score;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!!!!'
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'You Win!!!!'
        if (score > highScore) {
            highScore = score ;
            document.querySelector('.highscore').textContent = highScore ;
        }
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '28rem';
    } else if (guess !== secretNumber) {
        guess > secretNumber ?  document.querySelector('.message').textContent = 'Too High !!!' : document.querySelector('.message').textContent = 'Too Low !!!!' ;
        score--;
        if (score >= 1) { 
            document.querySelector('.score').textContent = score ;
            
        } else if ( score < 1 ) {
            document.querySelector('.score').textContent = 0 ;
            document.querySelector('.message').textContent = 'You Loose !!!'
        }
        
        
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20) + 1 ;
    console.log(secretNumber);
    document.querySelector('.message').textContent = 'Start guessing!!!!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    score = 20;
    document.querySelector('.score').textContent = score;
})

