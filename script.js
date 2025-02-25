console.log("hi gigachadidos");

let humanScore = 0;

let computerScore = 0;

let numRounds = 0;

//Event listener
buttonsDiv = document.querySelector("#buttons");
selectionDiv = document.querySelector("#selection");
finalresultDiv = document.querySelector("#finalresult");

buttonsDiv.addEventListener("click", (e) => {
    console.log("Event captured");
    playRound(e.target.innerText,getRandomNumber());
    displayResults();
});

function displayResults(){
    let text = document.querySelector("#results");
    text.innerText = "Testing the change of text";
    currentScore = `The computer's score is ${computerScore}, and your score is ${humanScore}!`;
    endScore = '';
    if (numRounds >= 5){
        if(humanScore === computerScore){
            endScore = `It is a draw! You both got ${humanScore} !`;
        } 
        else if (humanScore > computerScore){
            endScore = `You win! You scored ${humanScore} and the computer scored ${computerScore}.`;
        }
        else{
            endScore = `You Lose! You scored ${humanScore} and the computer scored ${computerScore}.`;
        }
    }

    text.innerHTML = endScore;
}

//playGame();

function playGame(){
    // playRound(getHumanChoice(),getRandomNumber());

    
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

    outcome = '';
    console.log(`You picked ${humanChoice}.`);
    console.log(`The computer picked ${computerChoice}.`);
    
    if (humanChoice === computerChoice){
        console.log(`Draw! you both selected ${humanChoice} !`);
        outcome = `Draw! you both selected ${humanChoice} !`;
    }
    else if ( (humanChoice === "Rock" && computerChoice === "Scissors") 
            || (humanChoice === "Paper" && computerChoice === "Rock") 
            || (humanChoice === "Scissors" && computerChoice === "Paper")){
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice} !`);
        outcome = `You win! ${humanChoice} beats ${computerChoice} !`;
    }
    else if ( (computerChoice === "Rock" && humanChoice === "Scissors") 
            || (computerChoice === "Paper" && humanChoice === "Rock") 
            || (computerChoice === "Scissors" && humanChoice === "Paper")){
        computerScore += 1;
        console.log(`You Lose =( ! ${computerChoice} beats ${humanChoice} !`);
        outcome = `You Lose =( ! ${computerChoice} beats ${humanChoice} !`;
        }
        
    else{
        console.log('Invalid Choice!');
        outcome = 'Invalid Choice!';
    }
    selectionDiv.innerText = `You picked ${humanChoice}.\n` + 
                            `The computer picked ${computerChoice}.\n`+
                            outcome;
    numRounds += 1;
}

function getRandomNumber (){
    let rand = Math.random();
    let choice =  rand <= 0.333 ? "Rock" : rand <= 0.66 ? "Paper" : "Scissors";
    return choice
}

function getHumanChoice (){
    let choice = prompt("Choose: Rock, Paper, or Scissors?")
    if (choice.toLowerCase()=== "rock"){
        return "Rock";
    }
    else if (choice.toLowerCase()=== "paper"){
        return "Paper";
    }
    else if (choice.toLowerCase()=== "scissors"){
        return "Scissors";
    }
    return "Invalid";
}