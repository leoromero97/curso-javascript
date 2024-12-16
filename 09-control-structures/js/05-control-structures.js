const balanceCash05 = 3000;
const balanceCredit05 = 40000;
const balanceTotal05 = balanceCash05 + balanceCredit05;
const totalToBuy05 = 6000;

// Si una condición se cumple es suficiente para ejecutar lo que queramos posterior a esa condición.
if (
  balanceCash05 > totalToBuy05 ||
  balanceCredit05 > totalToBuy05 ||
  balanceTotal05 > totalToBuy05
) {
  console.log("Si podes pagar");
} else {
  console.log("No podes pagar");
}
