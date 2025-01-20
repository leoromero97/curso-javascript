console.log("Todos los elementos deben cumplir una condición");

const cart14 = [
  {
    name: "Caja de herramientas 16 pulgadas",
    price: 20000,
  },
  {
    name: "Taladro inalámbrico",
    price: 45000,
  },
  {
    name: "Juego de destornilladores",
    price: 15000,
  },
  {
    name: "Sierra circular",
    price: 30000,
  },
  {
    name: "Lijadora orbital",
    price: 25000,
  },
  {
    name: "Martillo",
    price: 10000,
  },
];

const result10 = cart14.every((product) => product.price > 20000);
console.log(result10);
