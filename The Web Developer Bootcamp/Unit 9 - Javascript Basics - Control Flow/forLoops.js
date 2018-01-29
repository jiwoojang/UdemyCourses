// 1. Print all numbers between -10 and 19 (inclusive)
for (var count = -10; count <= 19; count++) {
  console.log(count);
}

// 2. Print all even numbers between 10 and 40 (inclusive)
for (var count = 10; count <= 40; count+=2) {
  console.log(count);
}

// 3. Print all odd numbers between 300 and 333 (inclusive)
for (var count = 300; count <= 333; count++) {
  if (count % 2 !== 0){
    console.log(count);
  }
}

// 4. Print all numbers divisible by 3 and 5 between 5 and 50 (inclusive)
for (var count = 5; count <= 50; count++) {
  if (count % 5 === 0 && count % 3  === 0){
    console.log(count);
  }
}
