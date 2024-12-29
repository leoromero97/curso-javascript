// Inicializar iterador for
for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

// Primer ejercicio integrando números, condiciones e iteradores
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}

// Caso real
const cart6 = [
  {
    name: "Monitor 24 pulgadas",
    price: 40000,
  },
  {
    name: "Monitor 32 pulgadas",
    price: 60000,
  },
  {
    name: "Monitor 150 pulgadas",
    price: 140000,
  },
  {
    name: "Iphone 15 Pro Max",
    price: 1110000,
  },
];

for (let i = 0; i < cart6.length; i++) {
  console.log(`El producto ${cart6[i].name} cuesta ARS ${cart6[i].price}`);
}
