const numberStringOne = "20";
console.log("Primer constante: ", numberStringOne);
console.log("Tipo de dato de la primer constante:", typeof numberStringOne);

// Convertir un string a un número entero
console.log("Ahora el string es un número: ", Number.parseInt(numberStringOne));
// Convertir a un número flotante
const numberStringTwo = "20.2";
console.log(numberStringTwo);
console.log(
  "Ahora el string es un número flotante: ",
  Number.parseFloat(numberStringTwo)
);
// Validar si un número es entero
const numberStringThree = "Uno";
console.log(numberStringThree);
console.log("¿Es un número entero?", Number.isInteger(numberStringThree));

const numberStringFour = 20;
console.log(numberStringFour);
console.log("¿Es un número entero?", Number.isInteger(numberStringFour));
