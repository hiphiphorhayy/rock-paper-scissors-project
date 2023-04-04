const r = 'rock';
const p = 'paper';      // constant variables for choices
const s = 'scissors';
const answers = [r, p, s]       //make an array for the choices and iterate through it

let getComputerChoice = () => answers[Math.floor(Math.random() * answers.length)];
                                    //^function that randomly returns choice for computer
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
        return `You lose! ${p} beats ${r}`
    }
    else if (user === p && computer === s) {
        return `You lose! ${s} beats ${p}`
    }
    else if (user === s && computer === r) {
        return `You lose! ${r} beats ${s}`
    }
}

function game () {
    let winsLossesTies = [0,0,0]    //make an array to keep track of wins losses and ties
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, paper, or scissors?', '');  //prompt user for choice
        while (!answers.includes(playerSelection.toLowerCase())) { //while loop of input lowercased until valid response is given
            playerSelection = prompt('Invalid response! Choose rock, paper, or scissors.', '').toLowerCase();
        }               //repeatedly prompt user and lowercase the response
        
        playerSelection = playerSelection.toLowerCase();        //save lowercase version of input to playerSelection variable

        let result = round(playerSelection);        //call round function and console log the result
        console.log(result);

        if (result.startsWith('You win')) {     //if else statement to track results with array of wins losses and ties
            winsLossesTies[0]++;
        } else if (result.startsWith('You lose')) {
            winsLossesTies[1]++;
        } else if (result.startsWith('It\'s a')) {
            winsLossesTies[2]++;
        }
    }

    console.log(`${winsLossesTies[0]} wins, ${winsLossesTies[1]} losses, ${winsLossesTies[2]} ties`);
    if (winsLossesTies[0] > winsLossesTies[1]) {        //final response giving total # of wins losses and ties and declaring final result of game
        console.log('You win the game!');
    } else if (winsLossesTies[0] < winsLossesTies[1]) {
        console.log('You lost the game..');
    } else {
        console.log('Game tie?! You should play again');
    }
}

game();