function getComputerChoice(){
    return array[~~(Math.random() * array.length)];
}

function playRound(playerInput, computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerInput = playerInput.toLowerCase();
    if (playerInput == "rock" && computerSelection == "paper" || playerInput == "scissors" && computerSelection == "rock" || playerInput == "paper" && computerSelection == "scissors"){
        console.log(`You lost to the computer! You chose ${playerInput} while the computer chose ${computerSelection}`);
    }else if(playerInput === "rock" && computerSelection == "scissors" || playerInput == "scissors" && computerSelection == "paper" || playerInput == "paper" && computerSelection == "rock"){
        console.log(`You won against the computer! You chose ${playerInput} while the computer chose ${computerSelection}`);
    }else{
        console.log(`It was a tie! Both of you chose ${playerInput}`);
    }
}

function game(playerInput,computerSelection){
    while(roundNumber <= 5){
        console.log(`Round ${roundNumber}! Fight!`)
        playerInput = getplayerSelection();
        computerSelection = getComputerChoice();
        playRound(playerInput,computerSelection);
        if (playerInput == "rock" && computerSelection == "paper" || playerInput == "scissors" && computerSelection == "rock" || playerInput == "paper" && computerSelection == "scissors"){
            computerScore++;
            console.log(`Computer: ${computerScore} \nYou: ${playerScore}`);
        }else if(playerInput === "rock" && computerSelection == "scissors" || playerInput == "scissors" && computerSelection == "paper" || playerInput == "paper" && computerSelection == "rock"){
            playerScore++;
            console.log(`Computer: ${computerScore} \nYou: ${playerScore}`);
        }else{
            console.log(`Computer: ${computerScore} \nYou: ${playerScore}`);
        }
        roundNumber++;
    }

    if(roundNumber == 6 && playerScore > computerScore){
        console.log("Congratulations! You have won against the computer! Refresh the page to play again!");
    }else if(roundNumber == 6 && computerScore > playerScore){
        console.log("Boohoo! You lost against the computer! Better luck next time! Refresh the page to play again!");
    }
    else{
        console.log("Oh! You two are good! Both of you tied! Refresh the page to play again!");
    }
}

function btnClick(playerInput, computerSelection){
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const img = button.querySelector("img");
            playerInput = img.alt.toLowerCase();
            
            playRound(playerInput, computerSelection);
        });
    });
}

let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;
let playerInput;
let computerSelection;
const array = ["Rock", "Paper", "Scissors"];
let buttons = document.querySelectorAll(".button");

computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerInput);

