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

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  }
  if (i % 3 === 0) {
    console.log(i, "Fizz");
  }
  if (i % 5 === 0) {
    console.log(i, "Buzz");
  }
}

// Exercise 3 Section
let i = 1;

while (i <= 100) {
  if (i % 2 === 1) {
    console.log(`${i} odd`);
  }
  i++;
}
i = 0;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  }
  if (i % 3 === 0) {
    console.log(i, "Fizz");
  }
  if (i % 5 === 0) {
    console.log(i, "Buzz");
  }
  i++;
}
i = 0;
do {
  if (i % 2 === 1) {
    console.log(`${i} odd`);
  }

  i++;
} while (i <= 100);
i = 0;
do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("Buzz");
  }
  i++;
} while (i <= 100);

// Exercise 4

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++) {
  if (i === value) {
    console.log("Found Value!");
    break;
  }
  if (i == n) {
    console.log("Did not find Value");
  }
}

// Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log(i, "FizzBuzz");
  }
  if (i % fizzDivisor === 0) {
    console.log(i, "Fizz");
  }
  if (i % buzzDivisor === 0) {
    console.log(i, "Buzz");
  }
}