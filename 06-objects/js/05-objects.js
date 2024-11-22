const productObject3 = {
  productName3: "Aire acondicionado",
  price: 800000,
  available: true,
  information: {
    weight: "1kg",
    height: "50cm",
    width: "70cm",
  },
};
// Acceder al valor de un objeto
console.log(productObject3.information);

// Acceder al valor de un objeto dentro de un objeto
console.log(productObject3.information.weight);

// Acceder al valor de un objeto anidado por destructuring:

const {
  productName3,
  information,
  information: { width },
} = productObject3;

console.log(productName3, information, width);
