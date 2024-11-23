// Eliminar elementos de forma imperativa con métodos de array
const cartOrigin2 = [];

const product12 = {
  name: "Iphone 16",
  price: 1200000,
};
const product13 = {
  name: "Play Station 4",
  price: 300000,
};
const product14 = {
  name: "Tablet",
  price: 300000,
};
const product15 = {
  name: "Xiaomi Redmi13",
  price: 600000,
};

cartOrigin2.push(product12, product13, product14, product15);
console.table(cartOrigin2);
// Eliminar ultimo elemento de un array
cartOrigin2.pop();
console.table(cartOrigin2);
// Eliminar primer elemento de un array
cartOrigin2.shift();
console.table(cartOrigin2);
// Eliminar un elemento de un array segun la posición
cartOrigin2.splice(1, 1);
console.table(cartOrigin2);
