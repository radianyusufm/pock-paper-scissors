const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

let totalGame = 0
let winPlayer = 0
let winComputer = 0
let draw = 0

rock.addEventListener('click', () =>  playRound('rock'))
paper.addEventListener('click', () => playRound('paper'))
scissors.addEventListener('click', () => playRound('scissors'))


function playRound(player){
    
    let computer = randomSelection().toLowerCase()
    let resultMessage = ''
    
    totalGame += 1
    
    if (player == computer ) {
        draw += 1
        resultMessage = 'Draw! ' + player + " and " + computer
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
        ) {

        winPlayer += 1
        countScore(winPlayer, 'player')
        resultMessage =  "You Won! " + player +" beats " + computer
        
    } else {
        winComputer += 1
        countScore(winComputer, 'computer')
        resultMessage = "You Lose! " + computer +" beats " + player
    } 

    showtScore()
    resultGame(resultMessage)
}


function resultGame(str){
    
    document.querySelector('.result').innerHTML = ''

    let text = document.createTextNode(str)
    let divResult = document.querySelector('.result')
    divResult.appendChild(text)

    console.log("Total Game : " + totalGame)
    console.log("Win Player : " + winPlayer)
    console.log("Win Computer : " + winComputer)
}


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




function countScore(totalScore, playerName){
    document.querySelector('.winner').innerHTML = ''

    if (totalScore == 5 ){
        
        let str = "The Winner is " + playerName
        let text = document.createTextNode(str)
        let divResult = document.querySelector('.winner')
        divResult.appendChild(text)
        
        resetScore()
    }
}


function showtScore() {
    document.querySelector('.total_game').innerHTML = totalGame
    document.querySelector('.player_win').innerHTML = winPlayer
    document.querySelector('.computer_win').innerHTML = winComputer
    document.querySelector('.draw').innerHTML = draw
}

function resetScore(){
    totalGame = 0
    winPlayer = 0
    winComputer = 0
    draw = 0
}