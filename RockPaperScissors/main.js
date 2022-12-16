

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

    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
        console.log("empate")
        }
        else if (computerSelection == "scissors"){
            console.log("punto jugador")
        }
        else{
            console.log("punto compudora")
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "paper"){
        console.log("empate")
        }
        else if (computerSelection == "rock"){
            console.log("punto jugador")
        }
        else{
            console.log("punto compudora")
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "scissors"){
        console.log("empate")
        }
        else if (computerSelection == "paper"){
            console.log("punto jugador")
        }
        else{
            console.log("punto compudora")
        }
    }
    else{
        console.log("escribir bien => rock, paper or scissors")
    }

    return "computadora: "+ computerSelection + " | "+"player: " + playerSelection;
}

let computerSelection = getComputerChoice ();
    
let playerSelection = prompt("rock, paper or scissors");
console.log(playRound(playerSelection, computerSelection))

