console.log("hello world");

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let choice = "";
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("rock, paper, scissors");
        choice = choice.toLowerCase();
    }
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(computerChoice, humanChoice){
        let tieText = `${humanChoice} is the same as ${computerChoice} it's a tie`;
        let winText = `${humanChoice} beats ${computerChoice} you win`;
        let loseText = `${computerChoice} beats ${humanChoice} you lose`;
        
        if(computerChoice == humanChoice){
            console.log(tieText);
        }else if(humanChoice == choices[0]){
            switch(computerChoice){
                case choices[1]:
                    console.log(loseText);
                    computerScore++;
                    break;
                case choices[2]:
                    console.log(winText);
                    humanScore++;
                    break;    
            }
        }else if(humanChoice == choices[1]){
            switch(computerChoice){
                case choices[0]:
                    console.log(winText);
                    humanScore++;
                    break;
                case choices[2]:
                    console.log(loseText);
                    computerScore++;
                    break;    
            }
        } else if(humanChoice == choices[2]){
            switch(computerChoice){
                case choices[0]:
                    console.log(loseText);
                    computerScore++;
                    break;
                case choices[1]:
                    console.log(winText);
                    humanScore++;
                    break;    
            }
        }
    }

    while(round < 5){
        playRound(cpu = getComputerChoice(), human = getHumanChoice());
        round++;
    }

    if(humanScore == computerScore){
        console.log(`You score ${humanScore}, cpu score ${computerScore} it's a tie game.`)
    }else if(humanScore > computerScore){
        console.log(`You score ${humanScore}, cpu score ${computerScore} you win the game.`)
    }else{
        console.log(`You score ${humanScore}, cpu score ${computerScore} you lose the game.`)
    }
}
playGame();