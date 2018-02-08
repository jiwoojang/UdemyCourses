// Array of possible colors for the squares
var colors = InitializeColors(6);

// Get the squares needed
var squares = document.querySelectorAll(".square");

// Winning color
var correctColor = pickColor();
var correctColorDisplay = document.getElementById("correctColor");

// Status message
var message = document.querySelector("#message");

// Title
var titleHeader = document.querySelector("h1");

correctColorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i ++){
  // Assign each square a color
  squares[i].style.backgroundColor = colors[i];

  // Assign the click event
  squares[i].addEventListener("click", function(){
    // Retrieve the color that was clicked
    var clickedColor = this.style.backgroundColor;

    // Determine if correct
    if (clickedColor === correctColor){
      // Change the status indicator and all the square colors
      ChangeColors(clickedColor)
      message.textContent = "Correct!";
    } else {
      // make the square the background color so it disappears
      this.style.background = "#232323"
      message.textContent = "Try again!";
    }
  });
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

function GenerateRandomColor() {
  // Generate each RGB value
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Concatenate and return
  return "rgb(" + r + ", "+ g + ", "+ b + ")"
}
