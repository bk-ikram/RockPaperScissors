console.log("hi gigachad");

let humanScore = 0;

let computerScore = 0;

playGame();

function playGame(){
    playRound(getHumanChoice(),getRandomNumber());
    playRound(getHumanChoice(),getRandomNumber());
    playRound(getHumanChoice(),getRandomNumber());
    playRound(getHumanChoice(),getRandomNumber());
    playRound(getHumanChoice(),getRandomNumber());
    
    if(humanScore === computerScore){
        console.log(`It is a draw! You both got ${humanScore} !`);
    } 
    else if (humanScore > computerScore){
        console.log(`You win! You scored ${humanScore} and the computer scored ${computerScore}.`);
    }
    else{
        console.log(`You Lose! You scored ${humanScore} and the computer scored ${computerScore}.`);
    }
    return;
}




function playRound (humanChoice,computerChoice){
    console.log(`You picked ${humanChoice}.`);
    console.log(`The computer picked ${computerChoice}.`);
    
    if (humanChoice === computerChoice){
        console.log(`Draw! you both selected ${humanChoice} !`);
    }
    else if ( (humanChoice === "Rock" && computerChoice === "Scissors") 
            || (humanChoice === "Paper" && computerChoice === "Rock") 
            || (humanChoice === "Scissors" && computerChoice === "Paper")){
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice} !`);
    }
    else if ( (computerChoice === "Rock" && humanChoice === "Scissors") 
            || (computerChoice === "Paper" && humanChoice === "Rock") 
            || (computerChoice === "Scissors" && humanChoice === "Paper")){
        computerScore += 1;
        console.log(`You Lose =( ! ${computerChoice} beats ${humanChoice} !`);
        }
    else{
        console.log('Invalid Choice!');
    }
}



function getRandomNumber (){
    let rand = Math.random();
    let choice =  rand <= 0.333 ? "Rock" : rand <= 0.66 ? "Paper" : "Scissors";
    return choice
}


function getHumanChoice (){
    let choice = prompt("Choose: Rock, Paper, or Scissors?")
    if (choice.toLowerCase()=== "rock"){
        return "Rock"
    }
    else if (choice.toLowerCase()=== "paper"){
        return "Paper"
    }
    else if (choice.toLowerCase()=== "scissors"){
        return "Scissors"
    }
    return "Invalid"
}