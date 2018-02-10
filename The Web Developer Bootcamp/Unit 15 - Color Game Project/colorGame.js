// TODO: Make this modulated!  use a "game" object and make everything a part of that
// Array of possible colors for the squares
var colors = [];

// Game mode
var numSquares = 6;

// Get the squares needed
var squares = document.querySelectorAll(".square");

// Winning color
var correctColor = pickColor();
var correctColorDisplay = document.querySelector("#correctColor");

// Status message
var message = document.querySelector("#message");

// Title
var titleHeader = document.querySelector("h1");

// Buttons
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

InitializeGame();

function InitializeGame() {
  InitializeModeButtons();
  InitializeSquares();

  // Reset game parameters
  ResetGame();

  // Reset button
  reset.addEventListener("click", ResetGame);
  correctColorDisplay.textContent = correctColor;
}

// Initialize mode buttons
function InitializeModeButtons() {
  for (var i = 0; i < modeButtons.length; i ++){
    modeButtons[i].addEventListener("click", function() {
      // Remove selected style class
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");

      // Select this button only
      this.classList.add("selected");

      // Choose which mode we are in
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    });
  }

  // Repick and display colors
  ResetGame();
}

// Initialize squares
function InitializeSquares() {
  for (var i = 0; i < squares.length; i ++){
    // Assign each square a color
    squares[i].style.backgroundColor = colors[i];

    // Assign the click event
    squares[i].addEventListener("click", function(){
      // Retrieve the color that was clicked
      var clickedColor = this.style.backgroundColor;

      // Determine if correct
      if (clickedColor === correctColor){
        // Change the status indicator, all the square colors, and the reset button
        ChangeColors(clickedColor)
        message.textContent = "Correct!";
        reset.textContent = "Play again?";
      } else {
        // make the square the background color so it disappears
        this.style.background = "#232323"
        message.textContent = "Try again!";
      }
    });
  }
}

// Resets the state of the game with the correct mode
function ResetGame() {
  // Pick new colors and choose one amongst them to be the correct color
  colors = InitializeColors(numSquares);
  correctColor = pickColor();

  // Display the new correct color
  correctColorDisplay.textContent = correctColor;

  // Render the new colors
  for (var i = 0; i < squares.length; i ++){

    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  // Reset the background color on the title header, and messages
  titleHeader.style.backgroundColor = "steelblue";
  message.textContent = "";
  reset.textContent = "New Colors";
}

// Changes all the squares to a specific color
function ChangeColors(color) {
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  // Change the header color to match as well
  titleHeader.style.backgroundColor = color;
}

// Function which returns a random color from the available list
function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function which generates an array of colors
function InitializeColors(colorCount) {
  var colorArray = [];

  // Push the colors to the array
  for (var i = 0; i < colorCount; i++){
    colorArray.push(GenerateRandomColor());
  }

  return colorArray;
}

// Function which generates and returns one randome color
function GenerateRandomColor() {
  // Generate each RGB value
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Concatenate and return
  return "rgb(" + r + ", "+ g + ", "+ b + ")"
}
