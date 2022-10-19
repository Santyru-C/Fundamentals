//antes que nada deberia fijarme como hacer que los botones duevuelvan un string que yo quiera
const rockBtn = document.querySelector(".handBtn.rock");
const scissorsBtn = document.querySelector(".handBtn.scissors");
const paperBtn = document.querySelector(".handBtn.paper")

const pSelectionDisplay = document.querySelector(".player.hand")
const cpuSelectionDisplay = document.querySelector(".cpu.hand")

const roundText = document.querySelector("#roundText");

const playerScore = document.querySelector(".player.score")
const cpuScore = document.querySelector(".cpu.score")

const resetButton = document.querySelector("#resetbtn")
resetButton.addEventListener("click", function() {reset()})

let cpuPoints = 0
let playerPoints = 0
let round = 1

rockBtn.addEventListener("click", function() {startRound("Rock")});
scissorsBtn.addEventListener("click", function() {startRound("Scissors")});
paperBtn.addEventListener("click", function() {startRound("Paper")});

// functions

function startRound(playerHand) {
    const cpuHand = cpuPick();
    console.log(round)

    roundWinner = selectRoundWinner(playerHand, cpuHand);
    addPoint(roundWinner)

    if (playerPoints == 5 || cpuPoints == 5) {
        playerPoints > cpuPoints? declareMatchWinner("player"): declareMatchWinner("cpu");
        toggleHandButtons()
    };

    round += 1;

    pSelectionDisplay.textContent = playerHand
    cpuSelectionDisplay.textContent = cpuHand
    updateScoreDisplay

    console.log(roundWinner, cpuPoints, playerPoints, cpuHand)

};

function selectRoundWinner(player, cpu) {
    switch (player+cpu) {
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            roundText.textContent = "You win! " + player + " beats " + cpu; //misc update, move this functionality to a proper function
            return "Player";

        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            roundText.textContent = "Draw!";
            return "Draw";

        default:
            roundText.textContent = "You lose! " + cpu + " beats " + player;
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

function cpuPick() {

    const rps = ["Rock", "Paper", "Scissors"];
    let rndIdx = Math.floor(Math.random() * 3);
    let consoleSelection = rps[rndIdx];

    return consoleSelection
};

function declareMatchWinner(winner) {
    winner == "player"? roundText.textContent = "Game is over: You win!": 
                        roundText.textContent = "Game is over: You lose!";

};

function updateScoreDisplay() {
    playerScore.textContent = playerPoints;
    cpuScore.textContent = cpuPoints;
};

function reset() {
    playerPoints = 0
    cpuPoints = 0
    round = 0

    cpuScore.textContent = playerPoints
    playerScore.textContent = cpuPoints
    roundText.textContent = "Rock... Paper... Scissors!"
    toggleHandButtons()

};

function toggleHandButtons() {
    const allHandButtons = document.querySelectorAll(".handBtn");

    for (const button of allHandButtons) {
        button.disabled? button.disabled = false: button.disabled = true;
    };

}


// play again button
