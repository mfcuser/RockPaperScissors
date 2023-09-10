// ZMIENNE

let rock; // czy dopisac wartosc?
let paper; // czy dopisac wartosc?
let scissors; // czy dopisac wartosc?

let playerChoice = getPlayerChoice();
let computer = ''; // czy dopisac wartosc?

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



// teraz dopisz reakcje komputera
// wybranie kto wygrywa
// wynik
// kolejna runda (petla)

// FUNKCJE

// function itemChoice()

function getComputerChoice (params) {
    // wybiera losowo jedno z trzech - kamien, papier lub nozyce
}

function randomGenerator() {
    return Math.floor(Math.random() * 3) + 1; 
};

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
}


