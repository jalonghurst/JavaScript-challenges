// *Variables*
// Declare a variable and assign to it a sentance as a string. Alert if the sentance is a question
let str = "Is this a question?"
let checkForQuestion = alert(str.endsWith('?'));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let statement = "I am avaliable for jr. dev positions";
console.log(statement.replace('jr. dev', 'software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    let random = Math.random();
    if (random < 0.33 ) {
    return 'rock'
  } else if (random < .66) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playAgainstBot(choice) {
    let bot = rockPaperScissors();
    if( choice === 'rock' && bot === 'scissors' || choice === 'paper' && bot === 'rock' || choice === 'scissors' && bot === 'paper')  {
        return  `You win! You played ${choice} and bot played ${bot}`
    } else if ( bot === choice) {
        return 'It\'s a draw'
    } else {
        return `You lose. You played ${choice} and bot played ${bot}`
    }
}

console.log(playAgainstBot('paper'));

