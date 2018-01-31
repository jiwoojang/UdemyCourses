function isEven(num) {
  if (typeof num !== "number") {
    alert("You did not enter a number")
  } else {
    return (Boolean(num % 2 === 0 ));
  }
}

function factorial(num) {
  if (typeof num !== "number") {
    alert("You did not enter a number")
  } else {
    // Non recursive implementation, since I am not sure how well JS handles recursion...
    var total = 1

    for (var i = 1; i <= num; i ++){
      total *= i;
    }

    return total;

    // Recursive implementaion, just for fun
    //if (num === 0){
    //  return 1;
    //} else {
    //  return num * factorial(num - 1);
    //}
  }
}

function kebabToSnake(input) {
  if (typeof input !== "string") {
    alert("You did not enter a string")
  } else {
    return input.replace(/-/g, "_");
  }
}
