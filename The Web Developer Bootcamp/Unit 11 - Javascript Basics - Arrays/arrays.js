// Function which intakes an array and prints its contents in reverse
// Assumes the argument will be a valid array
function printReverse(array) {
  for (var i = (array.length - 1); i >= 0; i--) {
    console.log(array[i]);
  }
}

// Function which determines if all the contents of an array are identical
// Again, assumes valid array input

function isUniform(array) {
  // use the first element as reference, it doenst matter which element is used
  var check = array[0];
  var isUniform = true;

  // Check all the elements of the array against this
  array.forEach(function(element) {
    if (element !== check){

      // If any one of the array elements does not match, return false
      isUniform = false;
    }
  });

  // If we made it to this point, we iterated through all the elements and they all matched, so return true
  return isUniform;
}

// Function which sums the contents of all the numbers in an array.
// Assumes array input contains only numbers
function sumArray(numArray) {
  var total = 0;

  numArray.forEach(function(num) {
    total += num;
  });

  return total;
}

// Function which returns the maximum numerical value in the array
// Assumes array input will only contain numbers
function maxArray(numArray) {
  var max = numArray[0];

  numArray.forEach(function(num, index) {
    if (index === 0){
      // Skip the first one, we already stored it in the max variable so no need to compare
      return;
    } else {
      // If the array value is greater than the current known max, record it as the new max
      if (num > max) {
        max = num;
      }
    }
  });

  return max;
}
