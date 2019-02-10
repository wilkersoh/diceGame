/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, player;

let init = function(){
    scores = [0, 0];
    player = 0;
    roundScore = 0;
    finish = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = ' Player 1';
    document.getElementById('name-1').textContent = ' Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');  
    document.querySelector('.player-0-panel').classList.add('active');
}

const r = document.getElementById('btn-roll');
const h = document.getElementById('btn-hold');


init();

r.addEventListener('click', () => {
    if(finish){
        let dice = Math.floor(Math.random() * 6) + 1;
        const d = document.getElementById('dice');
        d.src =  './img/dice-' + dice + '.png';
        console.log(dice)
        
        // not score = 1 change
        if(dice !== 1){
            roundScore += dice;
            document.getElementById('current-' + player).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
    
})

h.addEventListener('click', () => {
    if (finish){
        scores[player] += roundScore;
        // console.log(scores)
        
        // update to UI
        document.getElementById('score-' + player).textContent = scores[player];

        if(scores[player] >= 100){
            document.getElementById('name-' + [player]).textContent = 'Winner';
            finish = false;
        } else {
            nextPlayer();
        }
    }     
})

document.getElementById('btn-new').addEventListener('click', init);

function nextPlayer(){
    
    player === 0 ? player = 1 : player = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');   
}

