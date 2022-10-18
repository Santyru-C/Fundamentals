//antes que nada deberia fijarme como hacer que los botones duevuelvan un string que yo quiera
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper")

const playerScore = document.querySelector(".player.score")
const cpuScore = document.querySelector(".cpu.score")

let cpuPoints = 0
let playerPoints = 0
let round = 1

rockBtn.addEventListener("click", function() {startRound("Rock")});
scissorsBtn.addEventListener("click", function() {startRound("Scissors")});
paperBtn.addEventListener("click", function() {startRound("Paper")});

const roundText = document.querySelector("#roundText");
roundText.textContent = "hello"

function startRound(playerHand) {
    const cpuHand = cpuPick();
    console.log(round)

    roundWinner = selectRoundWinner(playerHand, cpuHand);
    addPoint(roundWinner)

    if (playerPoints == 5 || cpuPoints == 5) {
        playerPoints > cpuPoints? declareMatchWinner("player"): declareMatchWinner("cpu");
    };

    round += 1;
    updateScoreDisplay

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
            playerScore.textContent = playerPoints;
            break;
        case "Cpu":
            cpuPoints += 1;
            cpuScore.textContent = cpuPoints;
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
    reset()
};

// una funcion que actualice el marcador de los jugadores
function updateScoreDisplay() {
    playerScore.textContent = playerPoints;
    cpuScore.textContent = cpuPoints;
};

function reset() {
    playerPoints = 0
    cpuPoints = 0
    round = 0
    cpuScore.textContent = "0"
    playerScore.textContent = "0"
}

// play again button