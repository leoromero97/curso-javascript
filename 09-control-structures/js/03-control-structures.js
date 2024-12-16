// Switch case

const paymentMethod = "Efectivo";

switch (paymentMethod) {
  case "Efectivo":
    console.log(`Pagaste en ${paymentMethod}`);
    break;

  case "Cheque":
    console.log(`Pagaste en ${paymentMethod}`);
    break;
  case "Tarjeta de débito":
    console.log(`Pagaste en ${paymentMethod}`);
    break;
  default:
    console.log(
      "Aún no seleccionaste un método de pago o método de pago no soportado"
    );
    break;
}
