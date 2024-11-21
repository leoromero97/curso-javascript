const operatorNumber4 = 20;
const operatorNumber5 = "20";
const operatorNumber6 = 30;
// Comparar 2 valores por igualación
console.log(
  "Compara los valores, ¿Los valores son iguales?",
  operatorNumber4 == operatorNumber5
);
console.log(
  "Comparador los valores y el tipo de dato, ¿Los valores son iguales?",
  operatorNumber4 === operatorNumber5
);
// Comparador por negación
const password1 = "admin";
const password2 = "Admin";
console.log("¿Las contraseñas son diferentes?", password1 != password2);
console.log("¿Los valores son diferentes?", operatorNumber4 != operatorNumber5);
console.log(
  "¿Los valores son diferentes?, modo estricto:",
  operatorNumber4 !== operatorNumber5
);
