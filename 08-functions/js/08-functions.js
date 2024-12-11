// Arrow functions y los iteradores forEach y map
const cart5 = [
  {
    name: "Monitor 24 pulgadas",
    price: 40000,
  },
  {
    name: "Monitor 32 pulgadas",
    price: 60000,
  },
  {
    name: "Monitor 150 pulgadas",
    price: 140000,
  },
  {
    name: "Iphone 15 Pro Max",
    price: 1110000,
  },
];
// ForEach
console.log("Empieza el bucle forEach() en arrow function");
const newCartForEach = cart5.forEach(product => `El producto ${product.name} cuesta ARS ${product.price}`);
console.log(newCartForEach);
// Map crea un array nuevo con arrow function
console.log("Empieza el bucle map() en arrow function");
const newCartMap = cart5.map(product => `El producto ${product.name} cuesta ARS ${product.price}`);
console.log(newCartMap);
