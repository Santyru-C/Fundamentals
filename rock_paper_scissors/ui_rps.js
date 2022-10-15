//antes que nada deberia fijarme como hacer que los botones duevuelvan un string que yo quiera
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper")

let cpuPoints = 0
let playerPoints = 0

// cuando el jugador presiona el boton iniciara una ronda con el valor del propio boton
rockBtn.addEventListener("click", function() {console.log("hello");});

// startRound(playerChoice)
function selectRoundWinner(player, cpu) {
    switch (player+cpu) {
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            return "player";

        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            return "draw";

        default:
            return "cpu";
            
    };
};
function addPoint(roundWinner) {
    (roundWinner == "Player")? playerPoints += 1: cpuPoints += 1;
};

function resetCounter() {
    cpuPoints = 0
    playerPoints = 0
}
function consolePick() {

    const rps = ["Rock", "Paper", "Scissors"];
    let rndIdx = Math.floor(Math.random() * 3);
    let consoleSelection = rps[rndIdx];

    return consoleSelection
};