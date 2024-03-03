function randomSelection(){
    number = Math.floor(Math.random() * 3);

    if (number == 0){
        return 'Rock'
    } else if (number == 1) {
        return 'Paper'
    } else if (number == 2) {
        return 'Scissors'
    }
}

function validateInputUser(s){
    if (s.toLowerCase() !== 'rock' && s.toLowerCase() !== 'paper' && s.toLowerCase() !== 'scissors') {
        return "Invalid Input"
    } else {
        return s
    }
}


function playRound(computer, player){
    if (player == computer ) {
        return 'Draw! ' + player + " and " + computer
    } 
    
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
        ) {
        return "You Won! " + player +" beats " + computer
    } else {
        return "You Lose! " + computer +" beats " + player
    } 
}



for (let i = 0; i < 5; i++) {
    const computerSelection = randomSelection().toLowerCase()
    const playerSelection = validateInputUser(prompt())

    console.log(playRound(computerSelection, playerSelection)) 
}
