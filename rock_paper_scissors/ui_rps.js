//antes que nada deberia fijarme como hacer que los botones duevuelvan un string que yo quiera
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper")

let cpuPoints = 0
let playerPoints = 0
let round = 1

// cuando el jugador presiona el boton iniciara una ronda con el valor del propio boton
rockBtn.addEventListener("click", function() {startRound("Rock")});
scissorsBtn.addEventListener("click", function() {startRound("Scissors")});
paperBtn.addEventListener("click", function() {startRound("Paper")});

function startRound(playerHand) {
    const cpuHand = cpuPick();
    console.log(round)

    roundWinner = selectRoundWinner(playerHand, cpuHand);
    addPoint(roundWinner)

    // si el jugador o la cpu tienen 5 puntos resetear el marcador y mostrar quien gana
    if (playerPoints == 5 || cpuPoints == 5) {
        playerPoints > cpuPoints? declareMatchWinner("player"): declareMatchWinner("cpu")
    };

    round += 1

    console.log(roundWinner, cpuPoints, playerPoints, cpuHand)

};

function selectRoundWinner(player, cpu) {
    switch (player+cpu) {
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            return "Player";

        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            return "Draw";

        default:
            return "Cpu";  
    };
};

function addPoint(roundWinner) {
    switch (roundWinner) {
        case "Player":
            playerPoints += 1;
            break;
        case "Cpu":
            cpuPoints += 1;
            break;
        default:
            null
    };
};

function resetCounter() {
    cpuPoints = 0
    playerPoints = 0
}

function cpuPick() {

    const rps = ["Rock", "Paper", "Scissors"];
    let rndIdx = Math.floor(Math.random() * 3);
    let consoleSelection = rps[rndIdx];

    return consoleSelection
};

function resetScore() {
    cpuPoints = 0;
    playerPoints = 0; 
};

function declareMatchWinner(winner) {
    winner == "player"? console.log("You win"): console.log("You lose");

    playerPoints = 0;
    cpuPoints = 0;
};