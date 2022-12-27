const msj = document.getElementById("msj");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
let player = 0
let cpu = 0

btnRock.addEventListener("click", ()=> {    
        clickRock()
    }) 

btnPaper.addEventListener("click",()=>{
        clickPaper()
    })

btnScissors.addEventListener("click", event=>{
        clickScissors()
    })

const resetImagen = ()=>{
    setTimeout(()=>{
    document.getElementById("imgCPU").src=`./img/game_transparente.png`
    document.getElementById("imgPlayer").src=`./img/game.png`
    },1500) }

function clickRock(){
    const playerSelection = "rock";
    let computerSelection = getComputerChoice ();
    document.getElementById("imgPlayer").src=`./img/${playerSelection}.png`
    document.getElementById("imgCPU").src=`./img/${computerSelection}.png`
    playRound(playerSelection, computerSelection);
    resetImagen()
    winnerChecker()
}

function clickPaper(){
    const playerSelection = "paper";
    let computerSelection = getComputerChoice ();
    document.getElementById("imgPlayer").src=`./img/${playerSelection}.png`
    document.getElementById("imgCPU").src=`./img/${computerSelection}.png`
    playRound(playerSelection, computerSelection);
    resetImagen()
    winnerChecker()
}

function clickScissors(){
    const playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    document.getElementById("imgCPU").src=`./img/${computerSelection}.png`
    document.getElementById("imgPlayer").src=`./img/${playerSelection}.png`
    playRound(playerSelection, computerSelection)
    resetImagen()
    winnerChecker()
}

winnerChecker = () =>{ 
    if (player === 5 || cpu === 5){
        return  player > cpu ? playerWin() : cpuWin()
    }
}

function playerWin(){
    endgameModal.classList.add('active')
    overlay.classList.add('active') 
    document.getElementById('overlay').innerHTML = '<p>GANASTE PAPA!!!</p>' 
}

function cpuWin(){
    endgameModal.classList.add('active')
    overlay.classList.add('active') 
    document.getElementById('overlay').innerHTML = '<p>): CPU Gana!!</p>'
}

function resetGame (){
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
    player = 0
    cpu = 0
    puntoCpu.textContent = player
    puntoPlayer.textContent = cpu
    msj.textContent = "" 
}

restartBtn.addEventListener('click', ()=>{
    resetGame()
})

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
        msj.textContent = "Empate"   
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "scissors" && computerSelection == "paper"){
             msj.textContent = "Ganaste esta!!"
             player ++
             puntoPlayer.textContent = player 
    }
    else if (playerSelection == "paper" && computerSelection == "scissors" ||
             playerSelection == "rock" && computerSelection == "paper" ||
             playerSelection == "scissors" && computerSelection == "rock"){
             msj.textContent = "Perdiste esta" 
             cpu ++
             puntoCpu.textContent = cpu
    }
};




