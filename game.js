const rndNum = (choices) => (Math.floor(Math.random() * choices) + 1);
let playerPoints = 0;

function computerPlay() {
    let choice = rndNum(5);
    if (choice === 1) {
        return 'Rock';
    } else if (choice === 2) {
        return 'Paper';
    } else if (choice === 3) {
        return 'Scissors';
    } else if (choice === 4) {
        return 'Lizard';
    } else {
        return 'Spock';
    }
}

function playerSelection() {
    let userInput = prompt("Rock, Paper, Scissors, Lizard or Spock?");
    return correct(userInput);
}

function correct(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}

function playGame(playerSelection, computerPlay) {
    console.log("You chose: ", playerSelection);
    console.log("The computer chose: ", computerPlay);
    if (playerSelection === 'Rock') {
        if (computerPlay === 'Rock') {
            console.log("It's a Draw!");
        } else if (computerPlay === 'Paper') {
            console.log("You Lose! Paper covers Rock!");
            playerPoints--;
        } else if (computerPlay === 'Scissors') {
            console.log("You Win! Rock crushes Scissors!");
            playerPoints++;
        } else if (computerPlay === 'Lizard') {
            console.log("You Win! Rock crushes Lizard!");
            playerPoints++;
        } else {
            console.log("You Lose! Spock vaporizes Rock!");
            playerPoints--;
        }
    } else if (playerSelection === 'Paper') {
        if (computerPlay === 'Rock') {
            console.log("You win! Paper covers Rock!");
            playerPoints++;
        } else if (computerPlay === 'Paper') {
            console.log("It's a draw!");
        } else if (computerPlay === 'Scissors') {
            console.log("You Lose! Scissors cuts Paper!");
            playerPoints--;
        } else if (computerPlay === 'Lizard') {
            console.log("You Lose! Lizard eats Paper!");
            playerPoints--;
        } else {
            console.log("You Win! Paper disproves Spock!");
            playerPoints++;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerPlay === 'Rock') {
            console.log("You Lose! Rock crushes Scissors!");
            playerPoints--;
        } else if (computerPlay === 'Paper') {
            console.log("You Win! Scissors cuts Paper!");
            playerPoints++;
        } else if (computerPlay === 'Scissors') {
            console.log("It's a Draw!");
        } else if (computerPlay === 'Lizard') {
            console.log("You Win! Scissors decapitates Lizard!");
            playerPoints++;
        } else {
            console.log("You Lose! Spock smashes Scissors!");
            playerPoints--;
        }
    } else if (playerSelection === 'Lizard') {
        if (computerPlay === 'Rock') {
            console.log("You Lose! Rock crushes Lizard!");
            playerPoints--;
        } else if (computerPlay === 'Paper') {
            console.log("You Win! Lizard eats Paper!");
            playerPoints++;
        } else if (computerPlay === 'Scissors') {
            console.log("You Lose! Scissors depatitates Lizard!");
            playerPoints--;
        } else if (computerPlay === 'Lizard') {
            console.log("It's a Draw!");
        } else {
            console.log("You Win! Lizard poisons Spock!");
            playerPoints++;
        }
    } else {
        if (computerPlay === 'Rock') {
            console.log("You win! Spock vaporizes Rock!");
            playerPoints++;
        } else if (computerPlay === 'Paper') {
            console.log("You Lose! Paper disproves Spock!");
            playerPoints--;
        } else if (computerPlay === 'Scissors') {
            console.log("You Win! Spock smashes Scissors!");
            playerPoints++;
        } else if (computerPlay === 'Lizard') {
            console.log("You Lose! Lizard poisons Spock!");
            playerPoints--;
        } else {
            console.log("It's a Draw!");
        }
    }
}

playGame(playerSelection(), computerPlay());
console.log(playerPoints);