console.log("Filtrar un objeto de productos");

const cart12 = [
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

let result7;

result7 = cart12.filter((product) => product.price >= 20000);
result7 = cart12.filter((product) => product.name !== "Martillo");
console.log(result7);
