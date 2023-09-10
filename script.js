// ZMIENNE

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

let gameRound = 0;



// LOGIKA

/* let userInput = prompt("Choose rock, paper or scissors"); 
    lowLetters = userInput.toLowerCase();

    if (lowLetters == "rock") {
        console.log("You choose ROCK");
    } else if (lowLetters == "paper") { 
        console.log("You choose PAPER");    
    } else if  (lowLetters == "scissors") { 
        console.log("You choose SCISSORS");
    } else  {
        console.log("Wrong answer");
    }; 
    */
    

 // ALGORYTM   

 playerChoice;
 computerChoice;


// teraz dopisz reakcje komputera
// wybranie kto wygrywa
// wynik
// kolejna runda (petla)

// FUNKCJE

// function itemChoice()

function getPlayerChoice () {
    let userInput = prompt("Choose rock, paper or scissors");
    let lowLetters = userInput.toLowerCase();


    if (lowLetters === "rock") {
        console.log("You choose ROCK");
    } else if (lowLetters === "paper") { 
        console.log("You choose PAPER");    
    } else if (lowLetters === "scissors") { 
        console.log("You choose SCISSORS");
    } else {
        console.log("Wrong answer");
    }

    return lowLetters;
};

function getComputerChoice() {
    let compRoundChoice = randomGenerator();

    if (compRoundChoice === "rock") {
        console.log("Computer choose ROCK");
    } else if (compRoundChoice === "paper") {
        console.log("Computer choose PAPER");
    } else {
        console.log("Computer choose SCISSORS");
    }

    return  compRoundChoice;
};

function randomGenerator() {
     let generatedNumber = Math.floor(Math.random() * 3) + 1;
    
     if (generatedNumber === 1) {
        return "rock";
     } else if (generatedNumber === 2) {
        return "paper";
     } else { 
        return "scissors";
     }
    };


