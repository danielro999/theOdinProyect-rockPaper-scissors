function getComputerChoice (){
    let numero = Math.floor(Math.random()*3);
    let choice = ' ';
    if (numero == 0){
        choice = "rock"
    }

    else if(numero == 1){
        choice = "paper"
    }

    else{
        choice = "scissors" 
    }
    return choice
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "scissors"){
        
        console.log("empate")
    
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "scissors" && computerSelection == "paper"){
   
        console.log("punto jugador")
    
    
    }
    else if (playerSelection == "paper" && computerSelection == "scissors" ||
             playerSelection == "rock" && computerSelection == "paper" ||
             playerSelection == "scissors" && computerSelection == "rock"){
   
            console.log("punto compudora")
        
    }
    else{
        console.log("escribir bien => rock, paper or scissors")
    }

    return "computadora: "+ computerSelection + " | "+"player: " + playerSelection;
};


function game (){
let player = 0;
let computer = 0;

for (let index = 0; index < 5; index++) {
    let computerSelection = getComputerChoice ();
    
    let playerSelection = prompt("rock, paper or scissors");
    console.log(playRound(playerSelection, computerSelection))
  
}

}

game()