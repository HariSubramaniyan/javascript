let Scores = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    Ties : 0,
    Losses : 0
}
updateScoreEle();
document.body.addEventListener('keydown',(event) => {

    if(event.key === 'r'){
        Play('Rock');
    }
    else if( event.key ==='p'){
        Play('paper');
    }
    else if (event.key ==='s'){
        Play('scissors');
    }

});
function Play(val){           
const computerMove = pickComputerMove();

let res = '';

if(val === 'Rock'){
    if(computerMove === 'Rock'){
        res = 'Tie';
    }
    else if(computerMove === 'paper'){
        res = 'You Lose';
    }
    else if(computerMove ==='scissors'){
        res ='You Win';
    }
}
if(val === 'paper'){
    if(computerMove === 'Rock'){
        res = 'You Win';
    }
    else if(computerMove === 'paper'){
        res = 'Tie';
    }
    else if(computerMove ==='scissors'){
        res ='You Lose';
    }
}
if(val === 'scissors'){
    if(computerMove === 'Rock'){
        res = 'You Lose';
    }
    else if(computerMove === 'paper'){
        res = 'You Win';
    }
    else if(computerMove ==='scissors'){
        res ='Tie';
    }
}

if(res === 'You Win'){
    Scores.wins+=1;
}
else if(res ==='Tie'){
    Scores.Ties += 1;
}
else if(res ==='You Lose'){
    Scores.Losses+=1;
}

localStorage.setItem('score',JSON.stringify(Scores));

updateScoreEle();
document.querySelector('.js-result').innerHTML = res;
document.querySelector('.js-moves').innerHTML = `you
<img src="./rock-papper-scisoorser-img/${val}-emoji.png" class="move-icon">
<img src ="./rock-papper-scisoorser-img/${computerMove}-emoji.png" class="move-icon">
Computer`;

}
function updateScoreEle(){

document.querySelector('.js-score')
    .innerHTML = `Wins : ${Scores.wins} ,
     Losses : ${Scores.Losses} , Ties: ${Scores.Ties}`;

}
function pickComputerMove(){

const randomNumber = Math.random();
let computerMove = '';

if(randomNumber >=0 &&randomNumber < 1/3 ){
    computerMove = 'Rock';
}
else if (randomNumber  > 1 / 3 && randomNumber  < 2/ 3){
    computerMove = 'paper';
}
else if(randomNumber > 2 / 3 && computerMove < 1){
    computerMove = 'scissors';
}
return computerMove;
}
