let playerSelection = prompt('Rock, paper, or scissors?', '');  //prompt user for choice

const r = 'rock';
const p = 'paper';      // constant variables for choices
const s = 'scissors';

const answers = [r, p, s]
                                //make an array for the choices and iterate through it
for (let choice of answers) {                                //to check users choice case insensitively
    const regex = new RegExp('^' + choice + '$', 'i');
    if (regex.test(playerSelection)) {
        playerSelection = choice;
        break;
    }
}
                            //function that randomly returns choice for computer
let getComputerChoice = () => answers[Math.floor(Math.random() * answers.length)];

function round (user) {           //function for each round
    let computer = getComputerChoice();
    if (user === computer) {
        return "It's a tie!"
    }
    else if (user === r && computer === s) {
        return `You win! ${r} beats ${s}`
    }
    else if (user === p && computer === r) {
        return `You win! ${p} beats ${r}`
    }
    else if (user === s && computer === p) {
        return `You win! ${s} beats ${p}`
    }
                                            //^ tie and winning logic in if statements
                                            //V losing logic in if statements
    else if (user === r && computer === p) {
        return `You lose! ${r} beats ${p}`
    }
    else if (user === p && computer === s) {
        return `You lose! ${p} beats ${s}`
    }
    else if (user === s && computer === r) {
        return `You lose! ${s} beats ${r}`
    }
}

let result = round(playerSelection);
console.log(result);