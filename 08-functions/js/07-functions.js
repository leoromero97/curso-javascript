// Expresión de la función

const functions07 = function () {
  console.log("Función de expresión de la función");
};
// Arrow function
const functions07a = () => "Arrow function";
console.log(functions07a);

const functions07b = () => {
  console.log("Arrow function 2 con llaves");
  console.log("Arrow function 2 con otra linea de código");
};

console.log(functions07b);

const functions07c = tech => `Aprendiendo ${tech}`;

console.log(functions07c("Javascript"));
