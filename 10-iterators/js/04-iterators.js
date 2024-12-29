// Inicializar while
let i = 0;

while (i < 10) {
  // Condición
  console.log(`Número con while ${i}`);
  i++; // Incremento
}

// Fizz Buzz con while
let init = 1;

console.log("Fizz Buzz con while");
while (init < 50) {
  // Condición
  if (init % 15 === 0) {
    console.log(`${init} FizzBuzz`);
  } else if (init % 3 === 0) {
    console.log(`${init} Fizz`);
  } else if (init % 5 === 0) {
    console.log(`${init} Buzz`);
  }
  init++; // Incremento
}
