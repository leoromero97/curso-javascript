const balance1 = 10000;
const totalToPay = 300;
const hasCard = true;
const hasCheck = false;

if (balance1 >= totalToPay) {
  console.log("Si podes pagar el total de tu compra.");
} else if (hasCheck) {
  console.log("Si puedo pagar porque tengo cheque.");
} else if (hasCard) {
  console.log("Si puedo pagar porque tengo la tarjeta.");
} else {
  console.log("No podes pagar el total de tu compra por fondos insuficientes.");
}
