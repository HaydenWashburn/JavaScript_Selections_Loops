console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(`${i} odd`);
  }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    if (i % 3 === 0) {
      console.log("Fizz");
      if (i % 5 === 0) {
        console.log("Buzz");
      }
    }
  }
}
