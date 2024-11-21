const product = "Moto";
const brand = "Honda";

// Concatenar con método concat()
console.log(product.concat(" ", brand));
console.log(product.concat(" en descuento"));

// Concatenar con + y espacios
console.log("La marca del producto: " + product + ", es " + brand);

// Concatenar con , y espacios
console.log("El producto a vender es: ", product);

// Concatenar con template strings, se debe usar comilla invertida o bactick y signo de pesos ($) y encerrar entre llaves {} la variable
console.log(`El producto es ${product} y su marca es ${brand}`);
