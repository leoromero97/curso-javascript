const cart3 = [
  {
    name: "Monitor 24 pulgadas",
    price: 40000,
  },
  {
    name: "Monitor 32 pulgadas",
    price: 60000,
  },
  {
    name: "Monitor 90 pulgadas",
    price: 140000,
  },
  {
    name: "Iphone 15",
    price: 1110000,
  },
];
// For
console.log("Empieza el bucle for()");
for (let index = 0; index < cart3.length; index++) {
  console.log(index);
  const product = cart3[index];
  console.log(`El producto ${product.name} cuesta ARS ${product.price}`);
}
// ForEach
console.log("Empieza el bucle forEach()");
const newCartForEach = cart3.forEach(function (product) {
  return `El producto ${product.name} cuesta ARS ${product.price}`;
});
console.log(newCartForEach);
// Map crea un array nuevo
console.log("Empieza el bucle map()");
const newCartMap = cart3.map(function (product) {
  return `El producto ${product.name} cuesta ARS ${product.price}`;
});
console.log(newCartMap);
