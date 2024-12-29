// Inicializar do while
let i2 = 0;

do {
  console.log(`Número con do while ${i2}`);
  i2++; // Incremento
} while (i2 < 10); // Condición

// Fizz Buzz con do while
let init2 = 1;

console.log("Fizz Buzz con do while");
do {
  // Condición
  if (init2 % 15 === 0) {
    console.log(`${init2} FizzBuzz`);
  } else if (init2 % 3 === 0) {
    console.log(`${init2} Fizz`);
  } else if (init2 % 5 === 0) {
    console.log(`${init2} Buzz`);
  }
  init2++; // Incremento
} while (init2 < 50);
