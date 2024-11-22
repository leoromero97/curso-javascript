const productObject2 = {
  productName: "MacBookc Pro",
  price: 3000,
  available: true,
};
console.log("Valor del name del objeto:", productObject2.productName);
const nombre = productObject2.productName;
console.log("Constante creada a partir de un valor de un objeto:", nombre);
// Destructurando el valor de un objeto
const { productName } = productObject2;
console.log("Valor destructurado", productName);
