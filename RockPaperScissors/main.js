

const btnRock = document.getElementById("rock");
btnRock.addEventListener("click", ()=> prompt("")) 





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
        console.log("player: "+ playerSelection + " | computadora: " + computerSelection +" => empate") 

    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "scissors" && computerSelection == "paper"){
             console.log("player: "+ playerSelection + " | computadora: " + computerSelection +" => punto player")
             return "player" 
    }
    else if (playerSelection == "paper" && computerSelection == "scissors" ||
             playerSelection == "rock" && computerSelection == "paper" ||
             playerSelection == "scissors" && computerSelection == "rock"){
             console.log("player: "+ playerSelection + " | computadora: " + computerSelection +" => punto compudora") 
             return "computer"
    }
    else{
        console.log("escribir bien => rock, paper or scissors")
    }   
};





// function game (){
//     let player = 0;
//     let computer = 0;

//     for (let index = 0; index < 5; index++)  {

//         let computerSelection = getComputerChoice ();
        
//         let playerSelection = prompt("rock, paper or scissors");

//         let resultado =playRound(playerSelection, computerSelection)

//         if ( resultado == "player"){
//             player++
//         }
//         else if (resultado == "computer"){
//             computer++
//         }
//         console.log("player:"+ player +" | " + "computer: " + computer )
//     }

//     if (player > computer){
//         console.log("player gano!!")
//     }
//     else if (player < computer){
//         console.log("computer gano!!")
//     }
//     else{
//         console.log("empate")
//     }


// }

// game()