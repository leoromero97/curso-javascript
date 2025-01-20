console.log("Encontrar un elemento de un array");

const cart13 = [
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


// con forEach()
let result8 = '';

cart13.forEach((product, index) => {
  if (product.name === 'Martillo') {
    result8 = cart13[index]
  }
})


let result9 = cart13.find(product => product.name === 'Martillo')
console.log(result9);
