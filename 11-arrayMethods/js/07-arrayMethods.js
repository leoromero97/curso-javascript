console.log("Concatenar arrays");

const months6 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
];
const months7 = ["Septiembre", "Octubre", "Noviembre"];
const months8 = ["Diciembre"];

// Con concat()
const allMonths1 = months6.concat(months7, months8);
console.log(allMonths1);

// Con spread operator
const allMonths2 = [...months6, ...months7, ...months8, "Mes desconocido"];
console.log(allMonths2);
