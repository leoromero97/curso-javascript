console.log("Función para tomar una cantidad de datos, unirlos y entregar los datos");

const cart11 = [
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
  }
];

// Con forEach

let total2 = 0

cart11.forEach(product => total2 += product.price)
console.log(total2)

// Con reduce
let result6 = cart11.reduce((total2, product) => total2 + product.price, 0)
console.log(result6);

