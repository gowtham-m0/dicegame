'use strict';

const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');
const current1Score = document.getElementById('current--0');
const current2Score = document.getElementById('current--1');
const rolldice = document.querySelector('.btn--roll');
const lock = document.querySelector('.btn--hold');
const img = document.querySelector('.dice');

let totalScore1 = 0;
let totalScore2 = 0;
let cur1 = 0;
let cur2 = 0;
let winner = false;

player1Score.textContent=totalScore1;
player2Score.textContent=totalScore2;
let turn = 0;
function changeColor(turn){
    document.querySelector('.player--'+turn).classList.add('player--active');    
    if(turn===0)
        document.querySelector('.player--1').classList.remove('player--active');
    else
        document.querySelector('.player--0').classList.remove('player--active')
}

rolldice.addEventListener('click',()=>{
    if(!winner){
        let score = Math.trunc(Math.random()*6+1);
        let image = "dice-"+score+".png";
        img.setAttribute('src',image);
        if(turn===0){
            if(score==1){
                cur1=0;
                current1Score.textContent=cur1;
                turn=1;
                changeColor(turn);
            }
            else{
                cur1+=score;
                current1Score.textContent=cur1;
            }
        }
        else if(turn===1){
            if(score===1){
                cur2=0;
                current2Score.textContent=cur2;
                turn=0;
                changeColor(turn);
            }
            else{
                cur2+=score;
                current2Score.textContent=cur2;
            }
        }
    }
});

lock.addEventListener('click',()=>{
    if(!winner){
        if(turn===0){
            totalScore1+=cur1;
            cur1=0;
            current1Score.textContent=cur1;
            document.querySelector
            player1Score.textContent=totalScore1;
            if(totalScore1>=100){
                winner=true;
                document.querySelector('.player--0').classList.add('player--winner');
                document.querySelector('.name').classList.add('.player--winner');
                return;

            } 
            turn=1;
            changeColor(turn)
        }
        else if(turn===1){
            totalScore2+=cur2;
            cur2=0;
            current2Score.textContent=cur2;
            player2Score.textContent=totalScore2;
            if(totalScore2>=100){
                winner=true;
                document.querySelector('.player--1').classList.add('player--winner');
                document.getElementById('name--1').classList.add('.player--winner');
                return;
            }
            turn=0;
            changeColor(turn)
        }
    }
});


document.querySelector('.btn--new').addEventListener('click',()=>{
    totalScore1=0;
    totalScore2=0;
    cur1=0;
    cur2=0;
    current1Score.textContent=cur1;
    current2Score.textContent=cur2;
    player1Score.textContent=totalScore1;
    player2Score.textContent=totalScore2;
    winner=false;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.getElementById('name').classList.remove('.player-winner');
    turn=0;
    changeColor(turn);
});