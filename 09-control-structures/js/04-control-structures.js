const isUser04 = true;
const hasAutentic04 = true;

// Que se cumplan las 2 condiciones
if (isUser04 && hasAutentic04) {
  console.log("Podes pagar porque sos usuario y estás autenticado");
} else {
  console.log("No podes pagar porque sos usuario y estás autenticado");
}

// Diferentes valores en las constantes
const isUser05 = false;
const hasAutentic05 = true;

if (isUser05 && hasAutentic05) {
  console.log("Podes pagar porque sos usuario y estás autenticado");
} else if (!isUser05 && !hasAutentic05) {
  console.log("No podes pagar porque no sos usuario y no estás autenticado");
} else if (!isUser05) {
  console.log("No sos usuario, inicar sesión.");
} else if (!hasAutentic05) {
  console.log("No estás autenticado, valida tu usuario.");
}
