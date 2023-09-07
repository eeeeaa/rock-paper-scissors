/***
 * GUI: console log
 * Input: player choice, computer choice
 * Output: Determine winner or loser
 * 
 * START
 * get player choice with type string from input
 * convert player choice to lower case
 * get computer choice randomly
 * 
 * PLAYROUND
 *      WHEN got player choice and computer choice
 *      THEN compare player choice and computer choice based on rule set
 *      store score for player and computer
 *      return string
 * 
 * GAME
 *      LOOP PLAYROUND 5 times
 *      compare scores and print winner name
 * END
 */

const validMove = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(){
    let input = prompt("Rock, Paper, or Scissors?");
    if (typeof input == "string"){
        return input.toLowerCase();
    }else{
        return "";
    }
}
function getComputerChoice(){
    let choiceIndex = Math.floor(Math.random() * 3);
    return validMove[choiceIndex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "You tied!"
    } else {
        switch(playerSelection){
            case validMove[0]:
                if(computerSelection === validMove[1]){
                    computerScore += 1;
                    return "You Lose! Paper beats Rock";
                } else {
                    playerScore += 1;
                    return "You Win! Rock beats scissors";
                }
                break;
            case validMove[1]:
                if(computerSelection === validMove[2]){
                    computerScore += 1;
                    return "You Lose! Scissors beats paper";
                    
                } else {
                    playerScore += 1;
                    return "You Win! Paper beats Rock";
                }
                break;
            case validMove[2]:
                if(computerSelection === validMove[0]){
                    computerScore += 1;
                    return "You Lose! Rock beats Scissors";
                } else {
                    playerScore += 1;
                    return "You Win! Scissors beats paper";
                }
                break;
        }
    }
}

function game(){
    for(i = 1; i <= 5; i++){
        let player = getPlayerChoice();
        let computer = getComputerChoice();
        
        if(validMove.find((element) => element === player) === undefined){
            console.log("Illegal move!"); 
            return;
        }

        console.log(`player play ${player}`);
        console.log(`computer play ${computer}`);

        console.log(playRound(player, computer));
        console.log(`current score: 
        current round: ${i}
        player - ${playerScore} 
        computer - ${computerScore}`);
    }

    if(playerScore === computerScore){
        console.log("Player tie for this game!");
    } else if (playerScore > computerScore) {
        console.log("Player win this game!");
    } else {
        console.log("Computer win this game!");
    }
}

game();