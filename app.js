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
    console.log("FizzBuzz")};
    if (i % 3 === 0) {
      console.log("Fizz");
      if (i % 5 === 0) {
        console.log("Buzz");
      }
    
  }
}

// Exercise 3 Section
let i = 1

while(i <= 100){
  if (i % 2 === 1) {
    console.log(`${i} odd`)
  };

  i++;
}


while(i <= 100){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    if (i % 3 === 0) {
      console.log("Fizz");
      if (i % 5 === 0) {
        console.log("Buzz");
      }
    }
  }
  i++;
}

do{
  if (i % 2 === 1) {
    console.log(`${i} odd`)
  };

  i++;
} while(i <= 100);

do{
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")};
    if (i % 3 === 0) {
      console.log("Fizz");}
      if (i % 5 === 0) {
        console.log("Buzz");
      }
    
  } while(i <= 100)

  // Exercise 4

  let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i < n; i++) {
  if (n[i] === value) {
    console.log("Found Value!");
    break;
  }
  else {
    console.log("Did not print Value")
  } 
  
}