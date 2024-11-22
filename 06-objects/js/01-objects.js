const nameObject = "Leonardo";
const priceObject = 2000;
const isAvailable = true;
// Objeto literal
const profile = {
  name: "Leonardo",
  price: 2000,
  isAvailable: false,
};
console.log("Mostrar perfil 1 con objeto literal:", profile);

// Objeto constructor
function Profile(name, price) {
  this.name = name;
  this.price = price;
  this.isAvailable = true;
}

const profile2 = new Profile("Esteban", 1300);
console.log("Mostrar perfil 2 con objeto constructor:", profile2);
