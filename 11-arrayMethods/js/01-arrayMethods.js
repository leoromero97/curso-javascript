console.log("Validar si exsite un valor con array de métodos");
const months4 = [
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

const cart9 = [
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

months4.forEach((month) => {
  if (month === "Enero") {
    console.log("Enero si existe");
  }
});

// includes para un array de strings
const result2 = months4.includes("Enero");
console.log(result2);

// some para un array de objetos
const result3 = cart9.some((product) => product.name === "Cinta métrica");
