const r = 'rock';
const p = 'paper';      // constant variables for choices
const s = 'scissors';
const answers = [r, p, s]       //make an array for the choices and iterate through it

let getComputerChoice = () => answers[Math.floor(Math.random() * answers.length)];
                                    //^function that randomly returns choice for computer

let scoreMessage = document.querySelector('.score');
let roundMessage = document.querySelector('.round');

let newRound = document.createElement('p');
let newScore = document.createElement('p');
newScore.textContent = 'Press a button to play';


scoreMessage.appendChild(newScore);
roundMessage.appendChild(newRound);

function round(user) {           //function for each round
    let computer = getComputerChoice();
    if (user === computer) {
        newRound.textContent = "It's a tie!";
        return newRound.textContent;
    }
    else if (user === r && computer === s) {
        newRound.textContent = `You win! ${r} beats ${s}`;
        return newRound.textContent;
    }
    else if (user === p && computer === r) {
        newRound.textContent = `You win! ${p} beats ${r}`;
        return newRound.textContent;
    }
    else if (user === s && computer === p) {
        newRound.textContent = `You win! ${s} beats ${p}`;
        return newRound.textContent;
    }
                                            //^ tie and winning logic in if statements
                                            //V losing logic in if statements
    else if (user === r && computer === p) {
        newRound.textContent = `You lose! ${p} beats ${r}`;
        return newRound.textContent;
    }
    else if (user === p && computer === s) {
        newRound.textContent = `You lose! ${s} beats ${p}`;
        return newRound.textContent;
    }
    else if (user === s && computer === r) {
        newRound.textContent = `You lose! ${r} beats ${s}`;
        return newRound.textContent;
    }
}

let buttons = document.querySelectorAll('button');
let winsLossesTies = [0,0,0]    //make an array to keep track of wins losses and ties

function playRound(button) {
    let result = round(button.textContent.toLowerCase());
    newRound.textContent = result;

    if (result.startsWith('You win')) {     //if else statement to track results with array of wins losses and ties
        winsLossesTies[0]++;
    } else if (result.startsWith('You lose')) {
        winsLossesTies[1]++;
    } else if (result.startsWith("It's a")) {
        winsLossesTies[2]++;
    }

    newScore.textContent = `${winsLossesTies[0]} wins, ${winsLossesTies[1]} losses, ${winsLossesTies[2]} ties`;

    for (let outcome of winsLossesTies) {
        if (outcome == 5) {
            finalResponse();
            break;
        } else {
            continue;
        }
    }
}

buttons.forEach(button => button.addEventListener('click', () => playRound(button)));

function finalResponse() {
    if (winsLossesTies[0] > winsLossesTies[1] && winsLossesTies[0] > winsLossesTies[2]) {        //final response giving total # of wins losses and ties and declaring final result of game
    newScore.textContent = 'You win the game!';
    } else if (winsLossesTies[1] > winsLossesTies[0] && winsLossesTies[1] > winsLossesTies[2]) {
    newScore.textContent = 'You lost the game..';
    } else if (winsLossesTies[2] > winsLossesTies[0] && winsLossesTies[2] > winsLossesTies[1]) {
    newScore.textContent = 'Game tie?! You should play again';
    }

    resetButton = document.createElement('button');
    resetButton.textContent = 'Play again?';
    newRound.textContent = '';
    roundMessage.appendChild(resetButton);
    buttons.forEach(button => button.disabled = true);

    resetButton.addEventListener('click', () => {
        winsLossesTies = [0,0,0];
        newScore.textContent = '';
        roundMessage.removeChild(resetButton);
        buttons.forEach(button => button.disabled = false);
    });
}