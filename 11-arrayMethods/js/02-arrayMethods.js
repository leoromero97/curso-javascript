console.log("Encontrar la posición de un array");
const months5 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre"
];

const cart10 = [
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

// Comprobar si un valor existe en un array con forEach

months5.forEach((month, index) => {
  if (month === "Marzo") {
    console.log(`Marzo encontrado en el índice ${index}`);
  }
});

// Encontrar un index en un array
const resultIndex4 = months5.findIndex(month => month === 'Febrero');
console.log(resultIndex4);

// Encontrar un index en un array de objetos
const resultIndex5 = cart10.some(product => product.price <= 20000);
console.log(resultIndex5)
