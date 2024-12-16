// Operador ternario muy similar al IF pero en otra sintáxis.

const isAuth07 = true;

console.log(isAuth07 ? "Si está autenticado" : "No está autenticado");

// Validar 2 condiciones en un ternario.

const canPay07 = true;

console.log(
  isAuth07 && canPay07
    ? "Si está autenticado y puede pagar"
    : "No está autenticado y no puede pagar"
);

// Operador ternario anidado.

const canPay08 = false;

console.log(
  isAuth07
    ? canPay08
      ? "Si está autenticado y puede pagar"
      : "Si está auténticado y no puede pagar"
    : "No está y no puede pagar"
);
