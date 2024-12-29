/* Dada ima serie de elementos, los múltiplos de 3 y 5 se deben reemplazar por "FizzBuzz", los múltiplos de 3 por "Fizz" y los múltiplos de 5 por "Buzz". Si un número no es múltiplo de 3 o 5, se debe dejar igual. Por ejemplo, si la serie es [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], el resultado debe ser [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"].*/

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
}
