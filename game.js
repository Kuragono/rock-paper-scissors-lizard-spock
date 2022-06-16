let playerPoints = 0;
let computerPoints = 0;
const rndNum = (choices) => Math.floor(Math.random() * choices) + 1;

function computerPlay() {
  let choice = rndNum(5);
  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else if (choice === 3) {
    return "Scissors";
  } else if (choice === 4) {
    return "Lizard";
  } else {
    return "Spock";
  }
}

//function playerSelection(userInput) {
  //let userInput = prompt("Rock, Paper, Scissors, Lizard or Spock?");
  //return correct(userInput);
  //return userInput;
//}

//function correct(input) {
//  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
//}

// function testPlayerChoice() {
//   let choice = correct(playerSelection());
//   if (choice == 'Rock' || choice == 'Paper' || choice == 'Scissors' || choice == 'Lizard' || choice == 'Spock') {
//     return true;
//   } else {
//     return false;
//   }
// }

function playGame(playerSelection, computerPlay) {
  // if (testPlayerChoice()) {
  //   return;
  // } else {
  //   console.log('You selected something invalid!')
  // }
  console.log("You chose: ", playerSelection);
  console.log("The computer chose: ", computerPlay);
  if (playerSelection === "Rock") {
    if (computerPlay === "Rock") {
      console.log("It's a Draw!");
    } else if (computerPlay === "Paper") {
      console.log("You Lose! Paper covers Rock!");
      computerPoints++;
    } else if (computerPlay === "Scissors") {
      console.log("You Win! Rock crushes Scissors!");
      playerPoints++;
    } else if (computerPlay === "Lizard") {
      console.log("You Win! Rock crushes Lizard!");
      playerPoints++;
    } else {
      console.log("You Lose! Spock vaporizes Rock!");
      computerPoints++;
    }
  } else if (playerSelection === "Paper") {
    if (computerPlay === "Rock") {
      console.log("You win! Paper covers Rock!");
      playerPoints++;
    } else if (computerPlay === "Paper") {
      console.log("It's a draw!");
    } else if (computerPlay === "Scissors") {
      console.log("You Lose! Scissors cuts Paper!");
      computerPoints++;
    } else if (computerPlay === "Lizard") {
      console.log("You Lose! Lizard eats Paper!");
      computerPoints++;
    } else {
      console.log("You Win! Paper disproves Spock!");
      playerPoints++;
    }
  } else if (playerSelection === "Scissors") {
    if (computerPlay === "Rock") {
      console.log("You Lose! Rock crushes Scissors!");
      computerPoints++;
    } else if (computerPlay === "Paper") {
      console.log("You Win! Scissors cuts Paper!");
      playerPoints++;
    } else if (computerPlay === "Scissors") {
      console.log("It's a Draw!");
    } else if (computerPlay === "Lizard") {
      console.log("You Win! Scissors decapitates Lizard!");
      playerPoints++;
    } else {
      console.log("You Lose! Spock smashes Scissors!");
      computerPoints++;
    }
  } else if (playerSelection === "Lizard") {
    if (computerPlay === "Rock") {
      console.log("You Lose! Rock crushes Lizard!");
      computerPoints++;
    } else if (computerPlay === "Paper") {
      console.log("You Win! Lizard eats Paper!");
      playerPoints++;
    } else if (computerPlay === "Scissors") {
      console.log("You Lose! Scissors depatitates Lizard!");
      computerPoints++;
    } else if (computerPlay === "Lizard") {
      console.log("It's a Draw!");
    } else {
      console.log("You Win! Lizard poisons Spock!");
      playerPoints++;
    }
  } else {
    if (computerPlay === "Rock") {
      console.log("You win! Spock vaporizes Rock!");
      playerPoints++;
    } else if (computerPlay === "Paper") {
      console.log("You Lose! Paper disproves Spock!");
      computerPoints++;
    } else if (computerPlay === "Scissors") {
      console.log("You Win! Spock smashes Scissors!");
      playerPoints++;
    } else if (computerPlay === "Lizard") {
      console.log("You Lose! Lizard poisons Spock!");
      computerPoints++;
    } else {
      console.log("It's a Draw!");
    }
  }
}

function game(button) {
  //for (let i = 0; i < 1; i++) {}
  playGame(button, computerPlay());
  currentPoints();
}

function getWinner() {
    if (playerPoints > 0) {
        console.log('You Win!');
    } else if (playerPoints == 0) {
        console.log("It's a Draw!");
    } else {
        console.log('You Lose!');
    }
}

function currentPoints() {
  document.getElementById('playerpoints').textContent = `You: ${playerPoints}`;
  document.getElementById('computerpoints').textContent = `Computer: ${computerPoints}`;
}

//game();
//getWinner();


/********** BUTTONS ***********/

document.getElementById('rock').addEventListener('click', () => {
  game('Rock');
})
document.getElementById('paper').addEventListener('click', () => {
  game('Paper');
})
document.getElementById('scissors').addEventListener('click', () => {
  game('Scissors');
})
document.getElementById('lizard').addEventListener('click', () => {
  game('Lizard');
})
document.getElementById('spock').addEventListener('click', () => {
  game('Spock');
})