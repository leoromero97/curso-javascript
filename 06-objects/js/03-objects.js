const productObject = {
  name: "Monitor 20 pulgadas",
  price: 70000,
  available: true,
};
// Agregando un nuevo valor
productObject.image = "image.png";
console.log(productObject);

// Cambiando un valor existente
productObject.available = false;
console.log(productObject);

// Eliminando un valor existente
delete productObject.price;
console.log(productObject);
