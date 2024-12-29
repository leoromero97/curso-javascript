// Inicializar iterador for con break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`Este es el número 5. #${i}`);
    break; // Se detiene el ciclo
  }
  console.log(`Número con for ${i}`);
}

// Inicializar iterador for con continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`Este es el número 5. #${i}`);
    continue; // Se se muestra el mensaje y se salta a la siguiente iteración.
  }
  console.log(`Número ${i}`);
}

// Caso real
const cart7 = [
  {
    name: "Monitor 24 pulgadas",
    price: 40000,
  },
  {
    name: "Monitor 32 pulgadas",
    price: 60000,
    isOff: true,
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

for (let i = 0; i < cart7.length; i++) {
  if (cart7[i].isOff) {
    console.log(`El producto ${cart7[i].name} tiene un descuento`);
    continue;
  }
  console.log(`El producto ${cart7[i].name}`);
}
