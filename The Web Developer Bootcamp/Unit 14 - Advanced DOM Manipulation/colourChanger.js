// Lets get the button element first
var button = document.querySelector("button");
var body = document.querySelector("body");

// Add the click event listern, and toggle the class controlling the background style on the body
button.addEventListener("click", toggleColour);

// Function which uses class toggling to change the styles defined in the HTML in-line stylesheet.
function toggleColour(){
  body.classList.toggle("colourOn");
}
