// 1. Print all numbers between -10 and 19 (inclusive)
var count = -10;

while (count <= 19) {
  console.log(count);

  count++;
}

// 2. Print all even numbers between 10 and 40 (inclusive)
count = 10;

while (count <= 40) {
  console.log(count);

  count += 2;
}

// 3. Print all odd numbers between 300 and 333 (inclusive)
count = 300;

while (count <= 333) {
  if (count % 2 !== 0){
    console.log(count);
  }

  count++;
}

// 4. Print all numbers divisible by 3 and 5 between 5 and 50 (inclusive)

count = 5;

while (count <= 50) {
  if (count % 5 === 0 && count % 3  === 0){
    console.log(count);
  }

  count++;
}
