function average(scoreArray) {
  var sum = 0;

  for (var i = 0; i < scoreArray.length; i++){
    sum += scoreArray[i];
  }

  return Math.round(sum / scoreArray.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
