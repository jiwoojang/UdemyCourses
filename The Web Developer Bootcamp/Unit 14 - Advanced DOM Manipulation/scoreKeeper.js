// Buttons
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p1");
var resetButton = document.querySelector("#reset");

// Inputs
var numInput = document.querySelector("input");

// Current max score
var maxScoreDisplay = document.querySelector("p span");

// The score shown in the h1
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

// Variables for tracking score
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;

// Game status
var gameOver = false;

// Listners to increment scores
 p1.addEventListener("click", function() {
   if (!gameOver){
     p1Score++;

     // Flip the flag if necessary
     if (p1Score === maxScore){
       gameOver = true;

       // Adjust the style to indicate green
       p1Display.classList.add("winner");
     }

     p1Display.textContent = p1Score;
   }
 });

 p2.addEventListener("click", function() {
   if (!gameOver){
     p2Score++;

     // flip the flag if necessary
     if (p2Score === maxScore){
       gameOver = true;

       // Adjust the style to indicate green
       p2p2Display.classList.add("winner");
     }

     p2Display.textContent = p2Score;
   }
 });

// For the reset button
 resetButton.addEventListener("click", function() {
   reset();
 });

// For the number input
numInput.addEventListener("change", function() {
  maxScore = Number(this.value);
  maxScoreDisplay.textContent = this.value;

  // Reset if max score was changed
  reset()
});

function reset() {
  // Reset and display scores
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");

  // Flip the flag back
  gameOver = false
}
