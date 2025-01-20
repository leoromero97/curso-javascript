console.log("Programación funcional con spread operator");
const months9 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
];

const cart15 = [
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
];
console.log(months9);
// Esta forma no modifica el array original, pero es importante el orden
const months10 = [...months9, "Ocutbre", "Noviembre"];
console.log(months10);

const product16 = { name: "Sierra circular", price: 30000 };

const cart16 = [...cart15, product16];
console.log(cart16);
