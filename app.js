const player = {
    score: 0,
    display: document.querySelector('#playerScore')
}
const computer = {
    score: 0,
    display: document.querySelector('#computerScore')
}

const rps = ['Rock', 'Paper', 'Scissors'];

computerRoll();

const selectRock = document.querySelector('.rockButton');
const selectPaper = document.querySelector('.paperButton');
const selectScissors = document.querySelector('.scissorsButton');
const resetButton = document.querySelector('#resetScore');
const gameMessage = document.querySelector('#gameMessage');


selectRock.addEventListener('click', function () {
    const playerSelection = 'rock';
    console.log(`You choose ${playerSelection}`)
    if(computerSelection === 'Rock') {
        console.log('There is a tie')
        gameMessage.textContent = 'There is a tie';
    } else if(computerSelection === 'Paper'){
        computer.score += 1;
        computer.display.textContent = computer.score
        console.log('You Lose')
        gameMessage.textContent = 'You lose';
    }else {
        player.score += 1;
        player.display.textContent = player.score
        console.log('You win')
        gameMessage.textContent = 'You win';
    }
    computerRoll();
})

selectPaper.addEventListener('click', function () {
    const playerSelection = 'paper';
    console.log(`You choose ${playerSelection}`)
    if(computerSelection === 'Rock') {
        player.score += 1;
        player.display.textContent = player.score
        console.log('You win');
        gameMessage.textContent = 'You win';
    } else if(computerSelection === 'Paper'){
        console.log('There is a tie.')
        gameMessage.textContent = 'There is a tie';
    }else {
        computer.score += 1;
        computer.display.textContent = computer.score
        console.log('You lose.')
        gameMessage.textContent = 'You lose';
    }
    computerRoll();
})

selectScissors.addEventListener('click', function () {
    const playerSelection = 'scissors';
    console.log(`You choose ${playerSelection}`)
    if(computerSelection === 'Rock') {
        computer.score += 1;
        computer.display.textContent = computer.score
        console.log('You Lose');
        gameMessage.textContent = 'You lose';
    } else if(computerSelection === 'Paper'){
        player.score += 1;
        player.display.textContent = player.score
        console.log('You Win');
        gameMessage.textContent = 'You win';
    }else {
        console.log('There is a Tie')
        gameMessage.textContent = 'There is a tie';
    }
    computerRoll();
})

resetButton.addEventListener('click', function() {
    reset();
})


function computerRoll() {
    computerSelection = rps[Math.floor(Math.random() * rps.length)];
    console.log(`The computer chooses ${computerSelection}`)
}

function reset() {
    computer.display.textContent = 0;
    computer.score = 0;
    player.display.textContent = 0;
    player.score = 0;
    gameMessage.textContent = 'Score has been reset';
}
