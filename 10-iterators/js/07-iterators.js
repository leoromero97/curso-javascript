// for of
const tasks2 = [
  "Estudiar inglés",
  "Cenar",
  "Salir a correr",
  "Dormir la siesta",
];

const cart8 = [
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

for (let task of tasks2) {
  console.log(task);
}

for (let product of cart8) {
  console.log(`El producto ${product.name} cuesta ARS ${product.price}`);
}