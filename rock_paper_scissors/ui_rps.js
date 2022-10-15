//antes que nada deberia fijarme como hacer que los botones duevuelvan un string que yo quiera
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper")

let cpuPoints = 0
let playerPoints = 0

// cuando el jugador presiona el boton iniciara una ronda con el valor del propio boton
rockBtn.addEventListener("click", function() {console.log("hello");});

// startRound(playerChoice)
//selectRoundWinner()
//addPoint()
//resetCounter()
function consolePick() {
    const rps = ["Rock", "Paper", "Scissors"];

    let rndIdx = Math.floor(Math.random() * 2);
    let consoleSelection = rps[rndIdx];

    return consoleSelection
}