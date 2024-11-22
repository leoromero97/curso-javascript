const productObject8 = {
  productName: "Play Station 4",
  price: 600,
  available: true,
  getInformation: function () {
    console.log(
      `El producto ${this.productName} tiene un valor de $${this.price}`
    );
  },
};
// Obtener un array a partir de las propiedades de un objeto
console.log(
  "Transformar un objeto a un array con los nombres de sus propiedades:",
  Object.keys(productObject8)
);
// Obtener un array a partir de los valores de las propiedades de un objeto
console.log(
  "Transformar un objeto a un array con los nombres de sus propiedades:",
  Object.values(productObject8)
);
// Obtener un objeto con arrays como propiedades, y cada array tiene su propiedad y su valor
console.log(
  "Transformar un objeto a un objeto donde cada propiedad se vuelve un array con el nombre de la propiedad y su valor:",
  Object.entries(productObject8)
);
