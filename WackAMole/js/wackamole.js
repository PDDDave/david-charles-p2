const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let timerId = null;
let hitPosition;
let currentTime = 15; //change time here


//changes random square to mole class, assigns ID to hitPosition
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

// add click listener and method to each square
squares.forEach(square =>{
    square.addEventListener('mousedown', ()=>{
        if(square.id === hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})


function moveMole(){
    timerId = setInterval(randomSquare, 1000);
}
moveMole();


function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    
    if(currentTime === 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over!  FinalScore: ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);