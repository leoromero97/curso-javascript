const productObject6 = {
  productName: "Play Station",
  price: 900,
  available: true,
};

const sizeProduct6 = {
  weight: "1kg",
  width: "15cm",
};

// Ver los objetos separados
console.log(productObject6);
console.log(sizeProduct6);
// Unificar objetos con método assign
const objectsJoin = Object.assign(productObject6, sizeProduct6);
console.log("Objetos unificado con método assign", objectsJoin);
// Unificar objetos con spread operator
const objectsJoin2 = { ...productObject6, ...sizeProduct6 };
console.log("Objetos unificado con spread operator", objectsJoin2);
