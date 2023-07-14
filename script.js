function getComputerChoice(){
    const number = Math.floor(Math.random()*1000);
    if(number % 3 === 0){
        return "rock";
    }else if(number % 3 === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playerSelection(){
    let playerInput = prompt("What are you going to throw out? Rock, Paper, or Scissors? ");
    playerInput.toLowerCase();

    return playerInput;
}

function playRound(playerInput, computerSelection){
    if (playerInput == "rock" && computerSelection == "paper" || playerInput == "scissors" && computerSelection == "rock" || playerInput == "paper" && computerSelection == "scissors"){
        console.log(`You lost to the computer! You chose ${playerInput} while the computer chose ${computerSelection}`);
    }else if(playerInput === "rock" && computerSelection == "scissors" || playerInput == "scissors" && computerSelection == "paper" || playerInput == "paper" && computerSelection == "rock"){
        console.log(`You won against the computer! You chose ${playerInput} while the computer chose ${computerSelection}`);
    }else{
        console.log(`It was a tie! Both of you chose ${playerInput}`);
    }
}

const computerSelection = getComputerChoice();
let playerInput = playerSelection();

console.log(`The computer chose ${computerSelection}`);
console.log(`You chose ${playerInput}`);

playRound(playerInput,computerSelection);