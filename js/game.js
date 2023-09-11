/***
 * GUI: UI button
 * Input: player choice, computer choice
 * Output: Determine winner or loser
 * END
 */

const validMove = ["rock","paper","scissors"];
const displayOutput = document.querySelector('#result');
let roundCount = 1;
let playerScore = 0;
let computerScore = 0;

function endGame(){
    displayOutput.innerHTML = `
    <br> Game end! </br>
    <br> Your score : ${playerScore}</br>
    <br> computer score : ${computerScore} </br>
    `

    if(playerScore > computerScore){
        displayOutput.innerHTML += `<br>You Win!</br>`;
    } else if (playerScore === computerScore){
        displayOutput.innerHTML += `<br>Game tied!</br>`;
    } else {
        displayOutput.innerHTML += `<br>You lose!</br>`;
    }

    roundCount = 1;
    playerScore = 0;
    computerScore = 0;
}

function getComputerChoiceIndex(){
    let choiceIndex = Math.floor(Math.random() * 3);
    return choiceIndex;
}

function playRound(playerIndex, computerIndex){
    if(roundCount == 5){
        endGame();
        return;
    }
    const resultMatrix =   [[0,1,2], //0 = tie, 1 = lose, 2 = win
                            [2,0,1],
                            [1,2,0]];
    
    displayOutput.innerHTML = 
    `<br>Player choice: ${validMove[playerIndex]}</br>
    <br>Computer choice: ${validMove[computerIndex]}</br>`;

    switch(resultMatrix[playerIndex][computerIndex]) {
        case 0:{
            displayOutput.innerHTML += `<br>You tied!</br>`; 
            break; 
        } 
        case 1: {
            computerScore++;
            displayOutput.innerHTML += `<br>You Lose! ${validMove[computerIndex]} beats ${validMove[playerIndex]}</br>`;
            break;
        }
        case 2: {
            playerScore++;
            displayOutput.innerHTML += `<br>You Win! ${validMove[playerIndex]} beats ${validMove[computerIndex]}</br>`;
            break;
        }
    }
    roundCount++;
}

function initializeGame(){
    const displayChoices = document.querySelector('#choices');
    for(let i = 0; i < validMove.length; i++){
        let button = document.createElement('button');
        button.textContent = validMove[i];
        button.addEventListener('click', () => {
            console.log(`player click ${validMove[i]}`);
            playRound(i, getComputerChoiceIndex());
        });
        displayChoices.appendChild(button);
    }
    displayOutput.textContent = "Output show here!";
}


initializeGame();