console.log("hello world");

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let choice = "";
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("rock, paper, scissors").toLowerCase();
    }
    return choice;
}