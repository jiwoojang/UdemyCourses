// Convert to number
var age = Number(prompt("Please enter your age"));

// Invalid inputs
if (age < 0){
  alert("This age is less than zero. Not acceptable");
} else {
  // For valid inputs
  if (age < 18) {
    console.log("You cannot enter the venue.");
  } else if (age <  21) {
        console.log("You may enter the venue but you cannot drink.");
  } else {
    console.log("You may enter and you may drink!");

    if (age === 21){
      console.log("Happy birthday!");
    }
  }

  // Bonus things
  if (age % 2 !== 0) {
    console.log("Your age is odd!");
  }

  if (age & Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
  }
}
