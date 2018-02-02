// Creates a random, unknown number
// Currently a static number
var targetNum = 4;

// Ask user for their guess
var guessNum = Number(prompt("Guess a number!"));

// Check the guess
if (guessNum === targetNum){
  alert("Correct!");
} else if (guessNum > targetNum) {
  // Too high
  alert("Too high, refresh the page and guess again!");
} else {
  // Too low
  alert("Too low, refresh the page and guess again!");
}
