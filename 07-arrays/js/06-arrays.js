// Agregar valores de forma declarativa
const cartOrigin = [];

const product9 = {
  name: "Smart TV",
  price: 40000,
};
const product10 = {
  name: "Play Station 5",
  price: 1000000,
};
const product11 = {
  name: "Tablet",
  price: 300000,
};

console.table(cartOrigin);
let cartFinal;
cartFinal = [...cartOrigin, product9];
console.table(cartFinal);
// Agregando otro valor al final del array
cartFinal = [...cartFinal, product10];
console.table(cartFinal);
// Agregando otro valor al inicio del array
cartFinal = [product11, ...cartFinal];
console.table(cartFinal);
console.table(
  "Esto sigue siendo un array vacio porque no se modificó:",
  cartOrigin
);
