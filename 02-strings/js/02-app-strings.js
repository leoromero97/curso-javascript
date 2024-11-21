const product1 = "Monitor 20 pulgadas";
console.log(product1);

// Conocer la cantidad de letras de la cadena de texto
console.log("Cantidad de letras en la cadena de texto", product1.length);
// Conocer la posición de la letra donde empieza la palabra que buscamos. Si no se encuentra devuelve -1
console.log(product1.indexOf("Monitor"));

// Devuelve un valor de tipo boolean para saber si incluye el string que le pasemos en el método
console.log("Incluye tablet?", product1.includes("Tablet"));
console.log("Incluye Monitor?", product1.includes("Monitor"));
console.log("Incluye monitor?", product1.includes("monitor"));
