const productObject7 = {
  productName: "Play Station 5",
  price: 1200,
  available: true,
  getInformation: function () {
    console.log(
      `El producto ${this.productName} tiene un valor de $${this.price}`
    );
  },
};

productObject7.getInformation();
