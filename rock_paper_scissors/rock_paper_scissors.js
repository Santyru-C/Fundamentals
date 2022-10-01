/* Rock paper scissors instructions
to play the user needs to pick rock paper or scissors
then the computer picks one of the same three options
rock beats scissors
scissors cut paper
paper wraps rock
give the round to the winner
if the player gets to 3 points before the computer they win*/

// a container with the three choices will need to be made for the computer to choice
const computerOptions = ["Rock", "Paper", "Scissors"]

// Print game name, welcome
console.log("Welcome")
//start the game
//until either the player or the computer gets to three points, ask for input
//create two numeric variables to store the score
let playerScore = 0
let computerScore = 0

// function that enables the script to pick between rock paper and scissors
function choose () {
    let randomNumber = Math.floor(Math.random() * 3);
    
    return computerOptions[randomNumber]
}

function checkForWin(playerInput, computerInput) {
    switch (playerInput + computerInput) {
        
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            return true;
            break;

        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            return "tie";
            break;

        default:
            return false
    }
}

function whoBeatsWho(winner, loser) {
    console.log(winner + " beats " + loser)
}
//rock paper scissors

for (let i = 1; i < 6; i++) {
    console.log("Round " + i);

    let playerChoice = prompt("Choose: ")
    // let the computer pick a random entry from the array
    let computerChoice = choose()
    
    //check for winner, update score and log winner
    if (checkForWin(playerChoice, computerChoice) == "tie") {
        console.log("Tie!");

    } else if (checkForWin(playerChoice,computerChoice)) {
        whoBeatsWho(playerChoice, computerChoice);
        playerScore += 1

    } else {
        whoBeatsWho(computerChoice, playerChoice);
        console.log("You lose!");
        computerScore += 1
    }

    console.log(playerScore, computerScore)

    // a function that decides who wins the round is necessary
    if (playerScore == 3 || computerScore == 3) {
        console.log("Game is over!")
        break;
    }
}
// ask user for input, store in a variable called user- choice

//if player rock and computer scissors or player scissors and computer paper or player paper and computer rock
// return true

