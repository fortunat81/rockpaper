let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function updateScore(scoreToUpdate){
  scoreToUpdate.textContent = Number(scoreToUpdate.textContent) + 1;
}

function updateResultsText(results){
    resultsText.textContent = results;
}

let gameContainer =document.querySelector("#gameContainer");
let humanScore = document.querySelector("#humanScore");
let computerScore = document.querySelector("#cpuScore");
let resultsText = document.querySelector("#results");
let round = document.querySelector("#round");
gameContainer.addEventListener("click", (e) => {
    playRound(e.target.value, getComputerChoice());
});

function playRound(computerChoice, humanChoice) {
    let tieText = `${humanChoice} is the same as ${computerChoice} it's a tie`;
    let winText = `${humanChoice} beats ${computerChoice} you win`;
    let loseText = `${computerChoice} beats ${humanChoice} you lose`;


    if (computerChoice == humanChoice) {
        updateResultsText(tieText);
        updateResultsText(tieText);
    } else if (humanChoice == choices[0]) {
        switch (computerChoice) {
            case choices[1]:
                updateResultsText(loseText);
                updateScore(computerScore);
                break;
            case choices[2]:
                updateResultsText(winText);
                updateScore(humanScore);
                break;
        }
    } else if (humanChoice == choices[1]) {
        switch (computerChoice) {
            case choices[0]:
                updateResultsText(winText);
                updateScore(humanScore);
                break;
            case choices[2]:
                updateResultsText(loseText);
                updateScore(computerScore);
                break;
        }
    } else if (humanChoice == choices[2]) {
        switch (computerChoice) {
            case choices[0]:
                updateResultsText(loseText);
                updateScore(computerScore);
                break;
            case choices[1]:
                updateResultsText(winText);
                updateScore(humanScore);
                break;
        }
    }
    round.textContent = Number(round.textContent) + 1;
    console.log(Number(round.textContent) + 1);
    if(Number(round.textContent > 5 )){
        declareWinner();
        resetGame();
    }
}

function resetGame(){
    computerScore.textContent = 0;
    humanScore.textContent = 0;
    round.textContent = 1;
}

function declareWinner() {
    let human = Number(humanScore.textContent);
    let cpu = Number(computerScore.textContent);
    if (human == cpu) {
        console.log(`You score ${human}, cpu score ${cpu} it's a tie game.`)
    } else if (human > cpu) {
        console.log(`You score ${human}, cpu score ${cpu} you win the game.`)
    } else {
        console.log(`You score ${human}, cpu score ${cpu} you lose the game.`)
    }
    resetGame();
}