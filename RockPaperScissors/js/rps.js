var choices = ['rock','paper','scissors'];

//Main loop for the Rock paper scissors game
function game(event){
    var pcChoice = getPcChoice();
    var plChoice = event.target.id;
    var result = evaluate(plChoice, pcChoice);

    var playerEl = document.getElementById('user-choice');
    var pcEl = document.getElementById('computer-choice');
    var resultEl = document.getElementById('result');

    playerEl.textContent = plChoice;
    pcEl.textContent = pcChoice;
    resultEl.textContent = result;

}

//generates random choice for PC
function getPcChoice(){
    var x = getRandomInt(3);
    return choices[x];
}

//gets random int for random choice
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

//evaluates game
function evaluate(player, pc){
    var result = '';
    if(player === 'rock'){
        if(pc === 'rock'){
            result = 'Draw!';
        }else if( pc === 'paper'){
            result = 'Loose!';
        }else if(pc === 'scissors'){
            result = 'Win!';
        }
    }else if(player === 'paper'){
        if(pc === 'rock'){
            result = 'Win!';
        }else if( pc === 'paper'){
            result = 'Draw!';
        }else if(pc === 'scissors'){
            result = 'Loose!';
        }
    }else if(player === 'scissors'){
        if(pc === 'rock'){
            result = 'Loose!';
        }else if( pc === 'paper'){
            result = 'Win!';
        }else if(pc === 'scissors'){
            result = 'Draw!';
        }
    }
    return result;
}

//wire up buttons
function init(){
    document.getElementById('rock').onclick = game;
    document.getElementById('paper').onclick = game;
    document.getElementById('scissors').onclick = game;
}

init();