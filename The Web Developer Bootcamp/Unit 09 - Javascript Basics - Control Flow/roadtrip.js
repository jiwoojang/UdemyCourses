// Get user input
var input = prompt("Are we there yet?");

// Determine if the input contains the keywords, and if not, reprompt
while (input.indexOf("yes") === -1 && input.indexOf("yeah") === -1 ) {
  input = prompt("Are we there yet?");
}

// Alert for completion
alert("We made it!");
