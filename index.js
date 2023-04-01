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

